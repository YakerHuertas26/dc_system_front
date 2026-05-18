import axios from 'axios';

const api = axios.create({
    baseURL: "/",
    withCredentials: true,
    timeout: 10000,
});

api.interceptors.response.use(
    (res)=> res,
    async (error) =>{
        if (error.response?.status === 401) {
            await fetch('/api/auth/logout', { method: 'POST' });
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export default api;