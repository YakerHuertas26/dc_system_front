'use client'
import { useQuery } from "@tanstack/react-query"
import { userService } from "../services/user.services"

export const userKey = {
    all:['users'] as const,
    detail: (id: string) => ['users', id] as const
}

// get all users
export function useUsers(){
    return useQuery({
        queryKey: userKey.all,
        queryFn: userService.getAll
    })
}