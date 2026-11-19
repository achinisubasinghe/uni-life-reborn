import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are UniBot, a campus assistant for university students in Sri Lanka. You help students find and use essential services near campus.

You help with:
- Finding nearby hostels, restaurants, supermarkets, pharmacies, salons, and other services
- Answering questions about university life in Sri Lanka
- Sharing practical tips on budgeting, accommodation, and daily student needs
- Explaining how to use the UniLife platform

Universities currently served: NSBM Green University, University of Colombo, and University of Sri Jayewardenepura.

Keep answers direct, brief, and clear. Use plain language without filler phrases, em dashes, or parentheses. If you do not know real-time details such as current prices, state that clearly and direct the student to check the platform listings.`;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "qwen/qwen3.8-27b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 768,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "Could not generate a response.";
    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: "Failed to get a response. Try again." },
      { status: 500 }
    );
  }
}
