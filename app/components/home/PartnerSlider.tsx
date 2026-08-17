'use client'

import Image from "next/image";

export default function PartnersSection() {
    const partners = [
        { name: "SAP", src: "/images/sap.webp" },
        { name: "Hilton", src: "/images/hilton.webp" },
        { name: "Radisson", src: "/images/radisson.webp" },
        { name: "Starbucks", src: "/images/starbucks.webp" },
        { name: "CRS", src: "/images/crs.webp" },
    ];

    // Two copies only — the animation travels exactly one copy's width.
    const track = [...partners, ...partners];

    return (
        <section className="py-20 bg-[#F8FFF9] overflow-hidden">
            <style jsx>{`
                .marquee-viewport {
                    display: flex;
                    overflow: hidden;
                    width: 100%;
                    /* Fade the edges instead of a hard cut */
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 8%,
                        black 92%,
                        transparent
                    );
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 8%,
                        black 92%,
                        transparent
                    );
                }

                .marquee {
                    display: flex;
                    align-items: center;
                    gap: 4rem;            /* must match the calc below */
                    width: max-content;   /* size to content, not to parent */
                    flex-shrink: 0;       /* never get squeezed by the flex parent */
                    animation: marquee-scroll 25s linear infinite;
                    will-change: transform;
                }

                .marquee:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee-scroll {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        /* one full copy = half the track, minus half a gap */
                        transform: translate3d(calc(-50% - 2rem), 0, 0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .marquee {
                        animation: none;
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="text-3xl text-center font-bold text-gray-900 font-urbanist">
                    Our Trusted Partners
                    <div className="border-b-4 border-primary w-full my-4"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="marquee-viewport">
                    <div className="marquee">
                        {track.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="relative h-14 w-[150px] flex-shrink-0"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    fill
                                    sizes="150px"
                                    className="object-contain"
                                    aria-hidden={index >= partners.length}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}