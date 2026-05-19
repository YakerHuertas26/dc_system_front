import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { jwtPayload, RoleName } from '@/src/feature/auth/types/auth.types'

const jwtSecret = process.env.JWT_SECRET
if (!jwtSecret) throw new Error('JWT_SECRET is not defined')
const SECRET = new TextEncoder().encode(jwtSecret)

const ROLE_ROUTES: Record<RoleName, string[]> = {
    Admin: ['/admin', '/dashboard'],
    Supervisor: ['/supervisor', '/dashboard'],
    Vendedor: ['/vendedor', '/dashboard'],
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    if (pathname.startsWith('/login')) return NextResponse.next()

    // Lee la cookie httpOnly — solo posible desde el servidor
    const token = request.cookies.get('auth_token')?.value
    if (!token) return NextResponse.redirect(new URL('/login', request.url))

    try {
        const { payload } = await jwtVerify<jwtPayload>(token, SECRET)
        const allowed = ROLE_ROUTES[payload.roleName] ?? []
        const ok = allowed.some(p => pathname.startsWith(p))
        if (!ok) return NextResponse.redirect(new URL(allowed[0] ?? '/login', request.url))
        return NextResponse.next()
    } catch {
        // Token expirado → borra cookie y al login
        const res = NextResponse.redirect(new URL('/login', request.url))
        res.cookies.delete('auth_token')
        return res
    }
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
}