import { db } from "@/Config/db";
import { NextRequest, NextResponse } from "next/server";

db()

export const GET = (req: NextRequest, res: NextResponse) => {
    try {
        const response = NextResponse.json({ msg: 'logout', success: true })
        response.cookies.delete('token')
        return response
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}