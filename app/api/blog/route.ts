import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") || "1";

        // External staging API ko server-side hit karein
        const res = await fetch(`https://envirocleanuae.com/apistaging/api/posts?page=${page}`, {
            cache: "no-store", // Taki hamesha latest posts milein
        });

        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch from external API" }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Server API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}