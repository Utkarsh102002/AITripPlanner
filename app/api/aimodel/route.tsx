export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY!,
});

const PROMPT = `
You are an AI Trip Planner Agent.

Ask ONE question at a time to help plan a trip in this order:
1. Starting location
2. Destination
3. Group size
4. Budget
5. Trip duration
6. Travel interests
When all info is collected, respond with the final trip itinerary including "Day 1", "Day 2", etc.
Important output rule:
Always respond ONLY as valid JSON object like this:
{"resp": "<your text>", "ui": "<one of: triporigin, destination, groupsize, budget, tripduration, interests, final>"}
Do NOT include markdown, explanations, extra quotes, or code fences.
Return plain JSON only.
`;
export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "tngtech/deepseek-r1t2-chimera:free",
      messages: [{ role: "system", content: PROMPT }, ...messages],
    });

    const message = completion.choices?.[0]?.message;
    const raw = message?.content?.trim();

    if (!raw) {
      return NextResponse.json({
        resp: "Model returned empty response.",
        ui: "none",
      });
    }

    console.log("🧠 Raw AI Output:", raw);

    let parsed;

    try {
      
      parsed = JSON.parse(raw);

    
      if (typeof parsed === "string") {
        parsed = JSON.parse(parsed);
      }
    } catch (err) {
      console.warn("JSON parse failed, using fallback.", err);

      const cleaned = raw.replace(/```json|```/g, "").trim();
      try {
        parsed = JSON.parse(cleaned);
      } catch {
        parsed = { resp: cleaned, ui: "none" };
      }
    }

    console.log("Final Parsed:", parsed);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("🚨 API Error:", error);
    return NextResponse.json({ resp: "Server error. Try again.", ui: "none" });
  }
}

