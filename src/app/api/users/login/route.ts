import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = NextResponse.json({ message: body }, { status: 200 });
  response.cookies.set("token", "dwidiwhdiw", { httpOnly: true });
  return response;
}
