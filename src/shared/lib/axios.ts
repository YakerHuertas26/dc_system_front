import axios from 'axios';

const api = axios.create({
    baseURL: "/",
    withCredentials: true,
    timeout: 10000,
});

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const isLoginRequest = error.config?.url?.includes('/api/auth/login')

        if (error.response?.status === 401 && !isLoginRequest) {
            // Token expirado en una ruta protegida → cierra sesión y redirige
            await fetch('/api/auth/logout', { method: 'POST' })
            window.location.href = '/login'
        }

        // Si es el login con credenciales incorrectas → deja pasar el error
        // para que el catch del formulario lo maneje con el toast
        return Promise.reject(error)
    }
)

export default api;