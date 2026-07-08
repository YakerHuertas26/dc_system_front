import { NextRequest, NextResponse } from "next/server";

// Obteber el token de la cookie
export function getToken(request: NextRequest){
    return request.cookies.get("auth_token")?.value?? null;
}

// error al usuarios no autorizado
export function unauthorizedToken() {
    return NextResponse.json(
        {error: "No autorizado"},
        {status:401}
    );
}

// respuesta de error del servidor (catch)
export function serverError() {
    return NextResponse.json(
        {error: "Error del servidor"},
        {status:500}
    );
}

// / gestionar respuesta del back
export async function handleResponse(response: Response){
    const data = await response.json();
    if (!response.ok) {
        return NextResponse.json(
            {error: data.message ?? 'Error del servidor'}, 
            {status: response.status}
        )
    }
    return NextResponse.json(data);
}