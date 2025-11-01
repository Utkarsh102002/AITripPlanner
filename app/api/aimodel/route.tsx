// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// // Initialize OpenRouter client
// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY!,
// });

// // Trip planner system prompt
// const PROMPT = `You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by **asking one relevant trip-related question at a time**.

// Only ask questions about the following details in order, and wait for the user’s answer before asking the next: 

// 1. Starting location (source) 
// 2. Destination city or country 
// 3. Group size (Solo, Couple, Family, Friends) 
// 4. Budget (Low, Medium, High) 
// 5. Trip duration (number of days) 
// 6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation) 
// 7. Special requirements or preferences (if any)

// Do not ask multiple questions at once, and never ask irrelevant questions.
// If any answer is missing or unclear, politely ask the user to clarify before proceeding.
// Always maintain a conversational, interactive style while asking questions.
// Along with response also send which UI component to display for generative UI (for example 'budget', 'groupSize', 'TripDuration', or 'Final'), where Final means AI generating complete final output.

// Once all required information is collected, generate and return a **strict JSON response only** (no explanations or extra text) with the following JSON schema:

// {
//   "resp": "Text Resp",
//   "ui": "budget/groupSize/TripDuration/Final"
// }
// `;
// export async function POST(req: NextRequest) {
//   const { messages } = await req.json();
//   try {
//     const completion = await openai.chat.completions.create({
//       model: "minimax/minimax-m2:free",
//       response_format: { type: "json_object" },
//       messages: [{ role: "system", content: PROMPT }, ...messages],
//     });
//     console.log(completion.choices[0].message);
//     const message = completion.choices[0].message;
    
//     return NextResponse.json(JSON.parse(message.content ?? ""));
//   } catch (e) {
//     return NextResponse.json(e);
//   }
// }
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
7. Special requirements

❗ Important output rule:
Always respond **only as valid JSON** in this exact format:

{"resp": "question or response text", "ui": "groupsize" }

Valid "ui" values:
- "triporigin"
- "destination"
- "groupsize"
- "budget"
- "tripduration"
- "interests"
- "final"

Do not include explanations, markdown, or extra text.
`;
 

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "minimax/minimax-m2:free",
      // ❌ remove response_format, because this model often fails with it
      messages: [{ role: "system", content: PROMPT }, ...messages],
    });

    const message = completion.choices[0].message;
    const raw = message.content?.trim();

    if (!raw) {
      return NextResponse.json({
        resp: "Model returned empty response.",
        ui: "none",
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      // sometimes model returns plain text → wrap it
      parsed = { resp: raw, ui: "none" };
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ resp: "Server error. Try again.", ui: "none" });
  }
}
