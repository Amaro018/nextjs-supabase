import { User } from "@/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  const user = await User.findAll();

  return NextResponse.json({ user: user });
};

interface NewUser {
  name: string;
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const body: NewUser = await req.json();

  const newUser = await User.create({ ...body, role: "user" });
  return NextResponse.json({ user: newUser });
};
