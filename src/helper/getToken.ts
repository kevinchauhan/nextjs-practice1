import { Config } from '@/Config'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const getToken = (request: NextRequest) => {
    const token = request.cookies.get('token')?.value
    if (!token) {
        return null
    }
    const payload = jwt.verify(token, Config.ACCESS_TOKEN_SECRET!)
    return payload
}

export default getToken