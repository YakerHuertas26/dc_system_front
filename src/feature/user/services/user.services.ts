import api from "@/src/lib/axios";

export const userService = {
    async getAll() {
        const {data} = await api.get('/api/users');
        return data;
    }
}