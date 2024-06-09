import bcryptjs from 'bcryptjs'
import { db } from "@/Config/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

db() //db connection

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { username, email, password } = await req.json()

        const user = await userModel.findOne({ email })
        if (user) {
            return NextResponse.json({ msg: 'user already exists', success: false, }, { status: 400 })
        }

        const _SALT = 10
        const hashedPassword = await bcryptjs.hash(password, _SALT)

        const result = await userModel.create({ username, email, password: hashedPassword })

        return NextResponse.json({
            message: 'User registered successfully',
            success: true,
            id: result._id
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message, success: false, }, { status: 500 })
    }
}