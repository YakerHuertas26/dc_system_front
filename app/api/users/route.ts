import { getToken, handleResponse, serverError, unauthorizedToken } from "@/src/shared/helpers/routes.helper";
import { NextRequest } from "next/server";    

const API_URL = process.env.API_URL;

export async function GET(request: NextRequest) {
    try {
        const token = getToken(request);
        if (!token) return unauthorizedToken();

        const response = await fetch(`${API_URL}/v1/users`,{
            method: "GET",
            headers:{'Authorization': `Bearer ${token}`}
        })

    return handleResponse(response);
    } catch (error) {
        return serverError();
    }
}