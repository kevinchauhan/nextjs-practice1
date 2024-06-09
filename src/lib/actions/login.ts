'use server'
import cookie from 'cookie'
import { cookies } from 'next/headers'

export default async function login(prevSate: any, formData: FormData) {
    // todo : data validation
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/users/login`, {
            method: 'post',
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            const error = await response.json()
            console.log(error)
            return {
                type: 'error',
                message: error
            }
        }

        const c = response.headers.getSetCookie()
        const token = c.find((cookie) => cookie.includes('token'))
        if (!token) {
            return {
                type: 'error',
                message: 'token not found'
            }
        }
        const parsedToken = cookie.parse(token)
        console.log(parsedToken)
        cookies().set({
            name: 'token',
            value: parsedToken.token,
            expires: new Date(parsedToken.Expires),
            path: parsedToken.path
        })

        return {
            type: 'success',
            message: 'login successful'
        }
    } catch (error) {
        console.log(error)
    }
}