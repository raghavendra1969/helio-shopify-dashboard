import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: "You are Helio, an AI concierge for a Shopify store. Answer questions about the store's products, orders, revenue, and inventory in 2-3 concise sentences. Be data-driven and actionable.",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await res.json();
  const reply = data?.content?.[0]?.text || "No response.";
  return NextResponse.json({ reply });
}
