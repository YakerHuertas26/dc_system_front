import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

import {
    jwtPayload,
    RoleName
} from '@/src/feature/auth/types/auth.types'

const jwtSecret = process.env.JWT_SECRET

if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined')
}

const SECRET =
    new TextEncoder().encode(jwtSecret)

const ROLE_ROUTES: Record<RoleName, string[]> = {
    Admin: ['/admin/dashboard'],
    Supervisor: ['/supervisor/dashboard'],
    Vendedor: ['/vendedor/dashboard'],
}

export async function middleware(
    request: NextRequest
) {

    const { pathname } = request.nextUrl

    // =========================
    // COOKIE
    // =========================

    const token =
        request.cookies.get('auth_token')?.value

    // =========================
    // LOGIN
    // =========================

    if (pathname.startsWith('/login')) {

        // no token → mostrar login
        if (!token) {
            return NextResponse.next()
        }

        try {

            const { payload } =
                await jwtVerify<jwtPayload>(
                    token,
                    SECRET
                )

            const roleName = payload.roleName

            const redirectTo =
                ROLE_ROUTES[roleName]?.[0]
                ?? '/dashboard'

            // ya autenticado → dashboard
            return NextResponse.redirect(
                new URL(redirectTo, request.url)
            )

        } catch {

            // token inválido → mostrar login
            return NextResponse.next()
        }
    }

    // =========================
    // RUTAS PROTEGIDAS
    // =========================

    // sin token → login
    if (!token) {

        return NextResponse.redirect(
            new URL('/login', request.url)
        )
    }

    try {

        const { payload } =
            await jwtVerify<jwtPayload>(
                token,
                SECRET
            )

        const allowed =
            ROLE_ROUTES[payload.roleName] ?? []

        const ok = allowed.some((route) =>
            pathname.startsWith(route)
        )

        // rol sin acceso
        if (!ok) {

            return NextResponse.redirect(
                new URL(
                    allowed[0] ?? '/login',
                    request.url
                )
            )
        }

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
        '/((?!_next/static|_next/image|favicon.ico|api/).*)',
    ],
}