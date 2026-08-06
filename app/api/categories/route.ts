
import { getToken, handleResponse, serverError, unauthorizedToken } from "@/src/shared/helpers/routes.helper";
import { NextRequest } from "next/server";

// obtengo la url base del backend /API
const API_URL= process.env.API_URL;

export async function GET (request: NextRequest) {
    try {
        // obtengo el token de la cookies
        const token = getToken(request);
    
        // si no hay token retorno un error de autorizacion
        if (!token) return unauthorizedToken();
    
        // obtengo las respuestas
        const response = await fetch(`${API_URL}/v1/categories`,{
            method: "GET",
            headers: {'Authorization': `Bearer ${token}`}
        }) 
        // trat la respuesta y la retorno
        return handleResponse(response);
    } catch (error) {
        return serverError();
    }

}
