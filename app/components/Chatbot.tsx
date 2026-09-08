'use client';

/**
 * Chatbot.tsx — drop-in AI chat widget for any Next.js site.
 *
 *   import Chatbot from '@/components/Chatbot';
 *
 *   <Chatbot
 *     apiUrl="https://chat.yourdomain.com"
 *     tenant="envirocleanuae"
 *   />
 *
 * No dependencies. No Tailwind required — styles are self-contained and
 * scoped with an `aic-` prefix, so nothing leaks in or out.
 * Renders nothing on the server; mounts after hydration.
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Props                                                               */
/* ------------------------------------------------------------------ */
export type ChatbotProps = {
    /** Base URL of the chat service, no trailing slash. */
    apiUrl: string;
    /** Tenant id registered on the service. */
    tenant: string;

    /** Falls back to the tenant's server-side config when omitted. */
    title?: string;
    subtitle?: string;
    greeting?: string;
    quickReplies?: string[];
    whatsapp?: string;

    primaryColor?: string;
    accentColor?: string;

    position?: 'bottom-right' | 'bottom-left';
    /** ms before the teaser badge appears. 0 disables it. */
    badgeDelay?: number;
    badgeText?: string;
    /** ms before the panel opens itself. 0 (default) disables it. */
    autoOpenDelay?: number;

    /** Fired when the agent captures a lead — hook your analytics here. */
    onLead?: (lead: { name: string; whatsapp: string }) => void;
    onOpen?: () => void;
};

type Message = { role: 'user' | 'assistant'; content: string };

const STORE = 'aic_thread_';

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export default function Chatbot({
    apiUrl,
    tenant,
    title,
    subtitle = 'Online · replies instantly',
    greeting,
    quickReplies,
    whatsapp,
    primaryColor = '#0A66A8',
    accentColor = '#17A673',
    position = 'bottom-right',
    badgeDelay = 6000,
    badgeText = 'Ask us anything 💬',
    autoOpenDelay = 0,
    onLead,
    onOpen,
}: ChatbotProps) {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [streaming, setStreaming] = useState('');
    const [busy, setBusy] = useState(false);
    const [chips, setChips] = useState<string[]>([]);
    const [lead, setLead] = useState<{ name: string; whatsapp: string } | null>(null);
    const [input, setInput] = useState('');
    const [cfg, setCfg] = useState<{ name?: string; greeting?: { text: string; options?: string[] }; whatsapp?: string }>({});

    const logRef = useRef<HTMLDivElement>(null);
    const taRef = useRef<HTMLTextAreaElement>(null);
    const abortRef = useRef<AbortController | null>(null);

    const base = apiUrl.replace(/\/$/, '');
    const key = STORE + tenant;

    /* ---- mount: restore thread, fetch config ---- */
    useEffect(() => {
        setMounted(true);
        try {
            const saved = sessionStorage.getItem(key);
            if (saved) {
                const p = JSON.parse(saved);
                if (Array.isArray(p.messages)) setMessages(p.messages);
                if (p.lead) setLead(p.lead);
            }
        } catch { /* private mode */ }

        fetch(`${base}/config?tenant=${encodeURIComponent(tenant)}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => d && setCfg(d))
            .catch(() => { /* fall back to props */ });

        return () => abortRef.current?.abort();
    }, [base, tenant, key]);

    /* ---- teaser badge + auto open ---- */
    useEffect(() => {
        if (!mounted) return;
        const timers: any[] = [];
        if (badgeDelay > 0) timers.push(setTimeout(() => setShowBadge(true), badgeDelay));
        if (autoOpenDelay > 0) timers.push(setTimeout(() => setOpen(true), autoOpenDelay));
        return () => timers.forEach(clearTimeout);
    }, [mounted, badgeDelay, autoOpenDelay]);

    /* ---- persist ---- */
    useEffect(() => {
        if (!mounted || !messages.length) return;
        try { sessionStorage.setItem(key, JSON.stringify({ messages, lead })); } catch { /* ignore */ }
    }, [messages, lead, key, mounted]);

    /* ---- autoscroll ---- */
    useEffect(() => {
        const el = logRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages, streaming, open]);

    /* ---- seed the greeting on first open (no API call) ---- */
    useEffect(() => {
        if (!open || messages.length) return;
        const text = greeting || cfg.greeting?.text || `Hi! How can I help?`;
        setMessages([{ role: 'assistant', content: text }]);
        setChips(quickReplies || cfg.greeting?.options || []);
        onOpen?.();
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    const waNumber = whatsapp || cfg.whatsapp;

    /* ---- send ---- */
    const send = useCallback(
        async (raw: string) => {
            const text = raw.trim();
            if (!text || busy) return;

            const next: Message[] = [...messages, { role: 'user', content: text }];
            setMessages(next);
            setInput('');
            setChips([]);
            setBusy(true);
            setStreaming('');

            const ctrl = new AbortController();
            abortRef.current = ctrl;
            let buf = '';

            try {
                const res = await fetch(`${base}/chat?tenant=${encodeURIComponent(tenant)}`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ messages: next, page: window.location.href }),
                    signal: ctrl.signal,
                });
                if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

                const reader = res.body.getReader();
                const dec = new TextDecoder();
                let acc = '';

                for (; ;) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    acc += dec.decode(value, { stream: true });

                    const blocks = acc.split('\n\n');
                    acc = blocks.pop() || '';

                    for (const block of blocks) {
                        let ev = 'message';
                        let data = '';
                        for (const line of block.split('\n')) {
                            if (line.startsWith('event:')) ev = line.slice(6).trim();
                            else if (line.startsWith('data:')) data += line.slice(5).trim();
                        }
                        if (!data) continue;
                        let d: any;
                        try { d = JSON.parse(data); } catch { continue; }

                        if (ev === 'delta') {
                            buf += d.v;
                            setStreaming(stripOptions(buf).text);
                        } else if (ev === 'lead') {
                            const l = { name: d.name, whatsapp: d.whatsapp };
                            setLead(l);
                            onLead?.(l);
                            pushDataLayer('generate_lead', { ec_source: 'ai_chatbot', tenant });
                        } else if (ev === 'error') {
                            buf += (buf ? '\n' : '') + d.message;
                            setStreaming(buf);
                        }
                    }
                }
            } catch (e: any) {
                if (e?.name !== 'AbortError') {
                    buf = buf || "Sorry — I can't connect right now. Message the team directly and they'll help straight away.";
                }
            } finally {
                const { text: clean, options } = stripOptions(buf);
                if (clean) setMessages((m) => [...m, { role: 'assistant', content: clean }]);
                setChips(options);
                setStreaming('');
                setBusy(false);
                abortRef.current = null;
                if (window.innerWidth > 480) taRef.current?.focus();
            }
        },
        [base, tenant, messages, busy, onLead]
    );

    if (!mounted) return null;

    const side = position === 'bottom-left' ? { left: 20 } : { right: 20 };
    const heading = title || cfg.name || 'Assistant';

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles(primaryColor, accentColor) }} />
            <div className="aic-root" style={side as any}>
                {!open && (
                    <div className="aic-launcher">
                        {showBadge && !lead && (
                            <div className="aic-badge" onClick={() => { setOpen(true); setShowBadge(false); }}>
                                <button
                                    className="aic-badge-x"
                                    aria-label="Dismiss"
                                    onClick={(e) => { e.stopPropagation(); setShowBadge(false); }}
                                >
                                    ✕
                                </button>
                                {badgeText}
                            </div>
                        )}
                        <button className="aic-bubble" aria-label={`Chat with ${heading}`} onClick={() => setOpen(true)}>
                            <ChatIcon />
                        </button>
                    </div>
                )}

                {open && (
                    <div className="aic-panel" role="dialog" aria-label={heading}>
                        <div className="aic-head">
                            <div className="aic-av"><SparkIcon /></div>
                            <div className="aic-titles">
                                <strong>{heading}</strong>
                                <span><i className="aic-dot" />{subtitle}</span>
                            </div>
                            <button className="aic-x" aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
                        </div>

                        <div className="aic-log" ref={logRef} role="log" aria-live="polite">
                            {messages.map((m, i) => (
                                <div key={i} className={`aic-row ${m.role === 'user' ? 'aic-me' : 'aic-bot'}`}>
                                    <div className="aic-msg" dangerouslySetInnerHTML={{ __html: fmt(m.content) }} />
                                </div>
                            ))}

                            {busy && !streaming && (
                                <div className="aic-row aic-bot">
                                    <div className="aic-msg aic-typing"><i /><i /><i /></div>
                                </div>
                            )}
                            {streaming && (
                                <div className="aic-row aic-bot">
                                    <div className="aic-msg" dangerouslySetInnerHTML={{ __html: fmt(streaming) }} />
                                </div>
                            )}
                        </div>

                        {chips.length > 0 && !busy && (
                            <div className="aic-chips">
                                {chips.map((c) => (
                                    <button key={c} className="aic-chip" onClick={() => send(c)}>{c}</button>
                                ))}
                            </div>
                        )}

                        {lead && waNumber && (
                            <a
                                className="aic-wa"
                                href={lead.whatsapp || `https://wa.me/${waNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WaIcon /> Continue on WhatsApp
                            </a>
                        )}

                        <div className="aic-bar">
                            <textarea
                                ref={taRef}
                                rows={1}
                                value={input}
                                placeholder="Type your message…"
                                aria-label="Message"
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    e.target.style.height = 'auto';
                                    e.target.style.height = Math.min(e.target.scrollHeight, 110) + 'px';
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); }
                                }}
                            />
                            <button className="aic-send" aria-label="Send" disabled={busy || !input.trim()} onClick={() => send(input)}>
                                <SendIcon />
                            </button>
                        </div>
                        <div className="aic-legal">AI assistant · answers are indicative, the team confirms every quote</div>
                    </div>
                )}
            </div>
        </>
    );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Pulls the model's `[[options: a | b]]` marker out of the visible text. */
function stripOptions(text: string): { text: string; options: string[] } {
    const m = text.match(/\[\[options:([^\]]*)\]\]/i);
    if (!m) return { text: text.replace(/\[\[options:[^\]]*$/i, '').trim(), options: [] };
    return {
        text: text.replace(m[0], '').trim(),
        options: m[1].split('|').map((s) => s.trim()).filter(Boolean).slice(0, 4),
    };
}

function esc(s: string) {
    return s.replace(/[&<>"']/g, (c) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string)
    );
}
function fmt(s: string) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br/>');
}
function pushDataLayer(event: string, params: Record<string, any>) {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...params });
}

const ChatIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />
    </svg>
);
const SparkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v20M4.9 6.5l14.2 11M19.1 6.5L4.9 17.5" />
    </svg>
);
const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
);
const WaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5v-.5c-.1-.2-.6-1.6-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 1.9 3 4.7 4.1 2.3 1 2.8.8 3.3.7.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
    </svg>
);

/* ------------------------------------------------------------------ */
/* Styles — scoped by prefix, no framework needed                      */
/* ------------------------------------------------------------------ */
function styles(primary: string, accent: string) {
    return `
.aic-root{--aic-p:${primary};--aic-a:${accent};--aic-ink:#0F2233;--aic-line:#E3EAF0;--aic-soft:#F4F8FB;
position:fixed;bottom:20px;z-index:2147483000;font-size:15px;line-height:1.45;color:var(--aic-ink);
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}
.aic-root *,.aic-root *::before,.aic-root *::after{box-sizing:border-box;margin:0;padding:0}
.aic-launcher{display:flex;align-items:center;gap:10px;flex-direction:row-reverse}
.aic-bubble{width:60px;height:60px;border-radius:50%;border:0;cursor:pointer;flex:0 0 auto;color:#fff;
background:linear-gradient(140deg,var(--aic-p),var(--aic-a));box-shadow:0 8px 24px rgba(10,102,168,.34);
display:grid;place-items:center;transition:transform .18s}
.aic-bubble:hover{transform:scale(1.06)}
.aic-bubble:focus-visible{outline:3px solid var(--aic-ink);outline-offset:3px}
.aic-bubble svg{width:28px;height:28px}
.aic-badge{background:#fff;border:1px solid var(--aic-line);border-radius:14px 14px 4px 14px;
padding:10px 32px 10px 14px;box-shadow:0 6px 20px rgba(15,34,51,.14);max-width:220px;font-size:14px;
font-weight:600;cursor:pointer;position:relative;animation:aic-in .3s}
.aic-badge-x{position:absolute;top:3px;right:6px;border:0;background:none;cursor:pointer;color:#8a99a8;font-size:15px}
@keyframes aic-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.aic-panel{width:390px;max-width:calc(100vw - 40px);height:min(640px,calc(100vh - 110px));background:#fff;
border-radius:18px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(15,34,51,.28);animation:aic-in .22s}
.aic-head{background:linear-gradient(140deg,var(--aic-p),var(--aic-a));color:#fff;padding:14px 16px;
display:flex;align-items:center;gap:11px;flex:0 0 auto}
.aic-av{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.2);display:grid;place-items:center;flex:0 0 auto}
.aic-av svg{width:20px;height:20px}
.aic-titles{display:flex;flex-direction:column;min-width:0}
.aic-titles strong{font-size:15px}
.aic-titles span{font-size:12px;opacity:.9;display:flex;align-items:center;gap:5px}
.aic-dot{width:7px;height:7px;border-radius:50%;background:#5BE49B;display:inline-block}
.aic-x{margin-left:auto;border:0;background:rgba(255,255,255,.16);color:#fff;width:30px;height:30px;
border-radius:8px;cursor:pointer;font-size:15px;flex:0 0 auto}
.aic-x:hover{background:rgba(255,255,255,.3)}
.aic-log{flex:1 1 auto;overflow-y:auto;padding:16px;background:var(--aic-soft);display:flex;
flex-direction:column;gap:10px;overscroll-behavior:contain}
.aic-row{display:flex;max-width:100%}
.aic-row.aic-me{justify-content:flex-end}
.aic-msg{padding:10px 13px;border-radius:15px;max-width:86%;font-size:14.5px;word-wrap:break-word;animation:aic-in .18s}
.aic-bot .aic-msg{background:#fff;border:1px solid var(--aic-line);border-bottom-left-radius:5px}
.aic-me .aic-msg{background:var(--aic-p);color:#fff;border-bottom-right-radius:5px}
.aic-typing{display:flex;gap:4px;padding:14px}
.aic-typing i{width:6px;height:6px;border-radius:50%;background:#B4C2CE;animation:aic-t 1.1s infinite}
.aic-typing i:nth-child(2){animation-delay:.15s}
.aic-typing i:nth-child(3){animation-delay:.3s}
@keyframes aic-t{0%,60%,100%{opacity:.35;transform:none}30%{opacity:1;transform:translateY(-3px)}}
.aic-chips{display:flex;flex-wrap:wrap;gap:7px;padding:10px 16px 2px;background:#fff}
.aic-chip{border:1.5px solid var(--aic-p);background:#fff;color:var(--aic-p);border-radius:20px;
padding:8px 14px;font:inherit;font-size:13.5px;font-weight:600;cursor:pointer;transition:.14s}
.aic-chip:hover{background:var(--aic-p);color:#fff}
.aic-wa{margin:10px 16px 0;display:flex;align-items:center;justify-content:center;gap:8px;background:#25D366;
color:#fff;text-decoration:none;padding:12px;border-radius:11px;font-weight:700;font-size:14.5px}
.aic-wa svg{width:19px;height:19px}
.aic-bar{flex:0 0 auto;border-top:1px solid var(--aic-line);background:#fff;padding:10px 12px;
display:flex;gap:8px;align-items:flex-end;margin-top:10px}
.aic-bar textarea{flex:1;border:1.5px solid var(--aic-line);border-radius:12px;padding:10px 12px;
font:inherit;font-size:16px;resize:none;max-height:110px;color:var(--aic-ink);background:#fff;line-height:1.4}
.aic-bar textarea:focus{outline:0;border-color:var(--aic-p);box-shadow:0 0 0 3px rgba(10,102,168,.12)}
.aic-send{width:42px;height:42px;flex:0 0 auto;border:0;border-radius:12px;cursor:pointer;color:#fff;
background:linear-gradient(135deg,var(--aic-p),var(--aic-a));display:grid;place-items:center}
.aic-send:disabled{opacity:.45;cursor:default}
.aic-send svg{width:19px;height:19px}
.aic-legal{font-size:10.5px;color:#93A2B0;text-align:center;padding:0 10px 8px;background:#fff}
@media (max-width:480px){
.aic-root{bottom:14px;right:14px!important;left:14px!important}
.aic-launcher{justify-content:flex-end}
.aic-panel{position:fixed;inset:0;width:100vw;max-width:none;height:100dvh;border-radius:0}
.aic-head{padding-top:calc(14px + env(safe-area-inset-top))}
.aic-bar{padding-bottom:calc(10px + env(safe-area-inset-bottom))}
}
@media (prefers-reduced-motion:reduce){.aic-root *{animation:none!important;transition:none!important}}
`;
}