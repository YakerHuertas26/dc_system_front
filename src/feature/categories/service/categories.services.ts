import api from "@/src/lib/axios"

export const catergoriesService = {
    getAll: async () =>{
        const {data} = await api.get('api/categories');
        return data
    }
}