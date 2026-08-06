
import { useQuery } from "@tanstack/react-query"
import { catergoriesService } from "../service/categories.services"

export const categoriesKey = {
    all: ['categories'] as const,
    detail: (id: number) => ['categories', id] as const
}

export function useCategories(){
    return useQuery({
        queryKey:categoriesKey.all,
        queryFn: catergoriesService.getAll,
        staleTime: Infinity, // los datos nunca se vuelven obsoletos
    })
}