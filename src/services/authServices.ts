import api from '../shared/lib/axios';
import { authInput } from '../shared/schema/baseSchema';
import { authResponse } from '../feature/auth/types/auth.types';

export const authServices = {
    async login(payload: authInput): Promise<authResponse> {
        const { data } = await api.post<authResponse>('/api/auth/login', payload);
        return data;
    },

    async logout() {
        await api.post('/api/auth/logout');
        window.location.href = '/login';
    },
};