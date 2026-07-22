import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Research from "@/models/Research";

export async function GET() {
  try {
    await connectDB();

    const researches = await Research.find()
      .sort({ createdAt: -1 });

    return NextResponse.json(researches);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch research" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { prompt } = await req.json();

    const fakeResponse = `
Company Overview:
This company operates in its market segment and serves a growing customer base.

Business Insights:
• Industry: Technology
• Employees: 50+
• Headquarters: India

Strengths:
• Strong online presence
• Growing customer demand

Weaknesses:
• Limited market reach

Opportunities:
• Expansion into new markets
• Strategic partnerships

Suggested Sales Approach:
Focus on solving scalability and growth challenges.
`;

    const research = await Research.create({
      title: prompt.slice(0, 30),
      prompt,
      response: fakeResponse,
    });

    return NextResponse.json(research);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create research" },
      { status: 500 }
    );
  }
}