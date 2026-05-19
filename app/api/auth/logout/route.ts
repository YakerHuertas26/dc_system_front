import { NextResponse } from 'next/server'

export async function POST() {
    const response = NextResponse.json({ ok: true })

    // Borra la cookie desde el servidor
    response.cookies.set('auth_token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 0,   // 0 = elimina inmediatamente
        path: '/',
    })

    return response
}