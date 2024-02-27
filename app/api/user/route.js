import { connectMongoDB } from "@/lib/Mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  try {
    await connectMongoDB();
    await User.create({ name, email });
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: error.status });
  }

}