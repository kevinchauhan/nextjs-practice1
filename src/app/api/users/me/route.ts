import { db } from "@/Config/db";
import getToken from "@/helper/getToken";
import userModel from "@/models/userModel";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

db()

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const payload = getToken(req)
        const user = await userModel.findById(payload?.sub).select('-password -__v')
        return NextResponse.json({ msg: 'self', success: true, user })
    } catch (error: any) {
        return NextResponse.json({ error: error.message, success: false }, { status: 500 })
    }

}