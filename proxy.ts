import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { jwtPayload, RoleName } from '@/src/feature/auth/types/auth.types'

const jwtSecret = process.env.JWT_SECRET

if (!jwtSecret) {
    throw new Error('SECRET no definido')
}

const SECRET = new TextEncoder().encode(jwtSecret)

export async function proxy(request: NextRequest) {
    // Obtenemos la ruta a la que se intenta acceder
    const { pathname } = request.nextUrl

    // COOKIE: obtenemos el token de la cookie (si existe)
    const token = request.cookies.get('auth_token')?.value

    // ** 2 casos de verificación de token: LOGIN y RUTAS PROTEGIDAS **

    // ==LOGIN: si es la ruta de login, solo la mostramos a usuarios NO autenticados
    if (pathname.startsWith('/login')) {
        // cuando no hay token → mostrar login
        if (!token) return NextResponse.next()  
        // Cundo ya hay un token 
        try {
            // verifico con jose y si no hay manda una exepción 
            await jwtVerify(token, SECRET)
            const redirectTo = "/dashboard"

            // ya autenticado redirreciona al dashboard
            return NextResponse.redirect(new URL(redirectTo, request.url))

        } catch {
            // token inválido → mostrar login
            return NextResponse.next()
        }
    }

    // ===RUTAS PROTEGIDAS

    // sin token → lo devuelve al login
    if (!token) return NextResponse.redirect(new URL('/login', request.url))

    // Con token → verifica si es válido y si el rol tiene acceso a la ruta
    try {
        await jwtVerify<jwtPayload>(token, SECRET)
        return NextResponse.next()

    } catch {
        // token expirado/inválido
        const res = NextResponse.redirect(
            new URL('/login', request.url)
        )

        res.cookies.delete('auth_token')
        return res
    }
}

export const config = {
    matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)',
    ],
}