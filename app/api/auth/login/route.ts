import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Llama a NestJS de servidor a servidor
        //    Usa API_URL (privada, sin NEXT_PUBLIC_)
        const res = await fetch(`${process.env.API_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        const data = await res.json();
        
        // 2. Si NestJS devuelve error → lo propaga al formulario
        if (!res.ok) return NextResponse.json(data, { status: res.status });

        // 3. Solo devuelve userAutorised al browser
        //    El accessToken NO sale al cliente
        const response = NextResponse.json({
            userAutorised: data.userAutorised,
        });

        // 4. Crea la cookie httpOnly desde el servidor
        response.cookies.set('auth_token', data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 ,
            path: '/',
        })

        return response
    } catch (error) {
        return NextResponse.json(
            { message: 'Error del servidor' }, { status: 500 }
        )
    }
}