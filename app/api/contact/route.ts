import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required fields." },
        { status: 400 }
      );
    }

    // Staging API ke format ke mutabik subject create kar rahe hain
    const subject = `Inquiry for ${service || "General"} service in ${location || "Not Specified"} (Phone: ${phone || "N/A"})`;

    // Mapping fields to staging API payload structure
    const payload = {
      "your-name": name,
      "your-email": email,
      "your-subject": subject,
      "your-message": message,
    };

    // External Staging API Call
    const response = await fetch("https://envirocleanuae.com/apistaging/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Staging API responded with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}