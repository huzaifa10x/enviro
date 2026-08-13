import { api_base_url } from "@/app/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page") || "1";

        const res = await fetch(`${api_base_url}/api/posts?page=${page}`, {
            cache: "no-store",
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