import api from '../shared/lib/axios';
import { authInput } from '../shared/schema/baseSchema';

export const authServices = {
    async login( payload : authInput) {
        const {data} = await api.post('/api/auth/login',payload);
        console.log(data);
        
    },

    async logout() {
    await api.post('/api/auth/logout')
    window.location.href = '/login'
    },
}