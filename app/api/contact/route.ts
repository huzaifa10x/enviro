/* eslint-disable @typescript-eslint/no-explicit-any */
import { api_base_url } from "@/app/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required fields." },
        { status: 400 }
      );
    }

    if (!api_base_url) {
      console.error("Contact API Error: api_base_url is not defined");
      return NextResponse.json(
        { error: "Server is misconfigured. Please contact us directly." },
        { status: 500 }
      );
    }

    // Strip any trailing slash so we never build `//wp-json/...`
    const base = String(api_base_url).replace(/\/+$/, "");
    const endpoint = `${base}/wp-json/cim/v1/inquiry`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, phone, location, service, message }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    // WP (or a WAF, or a maintenance page) may answer with HTML, not JSON.
    const raw = await response.text();
    let data: any = null;

    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      console.error(
        `Contact API Error: non-JSON response (${response.status}) from ${endpoint}`,
        raw.slice(0, 500)
      );
      return NextResponse.json(
        { error: "Unexpected response from the server. Please try again." },
        { status: 502 }
      );
    }

    if (!response.ok) {
      console.error(
        `Contact API Error: WP responded ${response.status}`,
        data
      );

      // Pass through the real status and message instead of masking it as 500.
      return NextResponse.json(
        {
          error:
            data?.message ||
            `Submission failed (status ${response.status}).`,
          code: data?.code ?? null,
        },
        { status: response.status === 429 ? 429 : response.status || 502 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}