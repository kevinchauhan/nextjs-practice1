import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { Config } from '@/Config';

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const { email, password } = await req.json()
        const user = await userModel.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password', success: false }, { status: 400 })
        }

        const isPasswordVerified = await bcryptjs.compare(password, user.password)

        if (!isPasswordVerified) {
            return NextResponse.json({ error: 'Invalid email or password', success: false }, { status: 400 })
        }

        const payload = {
            sub: user._id
        }

        const token = jwt.sign(payload, Config.ACCESS_TOKEN_SECRET!, {
            expiresIn: '1m'
        })

        const response = NextResponse.json({ msg: 'login', user: user._id, success: true })
        response.cookies.set('token', token, {
            maxAge: 1000 * 60 * 60 //1d
        })

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message, success: false }, { status: 500 })
    }
}