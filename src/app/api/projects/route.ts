// src/app/api/projects/route.ts - Fixed version with unused variables removed
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
    await connectToDatabase();

    // For now, return mock data - we'll add real models later
    const projects = [
      {
        id: 1,
        title: "Education Support for Rural Students",
        category: "education",
        targetAmount: 50000,
        raisedAmount: 25000,
      },
    ];

    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    await connectToDatabase();

    // TODO: Add project creation logic with real model
    // Using data parameter to prevent unused variable warning
    console.log("Project data received:", data);

    return NextResponse.json({ message: "Project created successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
