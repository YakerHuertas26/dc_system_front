import {create} from 'zustand';
import { authUser } from '../feature/auth/types/auth.types';


interface AuthState {
    user: authUser | null
    setAuth: (user: authUser) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set)=>({
    user: null,
    setAuth: (user) => set({user}),
    logout: () => set({user: null })  
    })
)

