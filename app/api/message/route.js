import { DBconnect } from "@/libs/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";

export async function POST(req) {
  DBconnect();
  try {
    const { name, email, suggestion, note } = await req.json();
    let name1, email1;
    if (name) name1 = name;
    else name1 = "none";
    if (email) email1 = email;
    else email1 = "none";
    Message.create({ name: name1, email: email1, suggestion, note });
    return NextResponse.json({ message: "Message Created" }, { status: 201 });
  } catch (error) {
    console.log("error while uploading", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
