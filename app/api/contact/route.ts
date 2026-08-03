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

    const response = await fetch(`${api_base_url}/wp-json/cim/v1/inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        location,
        service,
        message
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || `API responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}