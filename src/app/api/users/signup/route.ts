import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.models";
import { Award } from "lucide-react";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
connect();




export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exist " },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    console.log(savedUser);
    // send Email verification ;
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    return NextResponse.json({ message: "User registered Succsessfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
