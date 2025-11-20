export const runtime = "edge";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyi8jJQXTw86mltwD0yZ6oBddh9edJuzYBi4cYXhkHyZXJujxwuJxuq1zW2b29ZlD-cnw/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // Use application/json
      },
    });

    // You can optionally read text to make sure the fetch resolved
    const text = await response.text();

    return NextResponse.json({ status: "success", message: "Data sent", text });
  } catch (error) {
    console.error("Google Sheet Error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to send data" },
      { status: 500 }
    );
  }
}
