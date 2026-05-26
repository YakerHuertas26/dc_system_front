import {create} from 'zustand';
import { authUser } from '../feature/auth/types/auth.types';
import { persist } from 'zustand/middleware';


interface AuthState {
    user: authUser | null
    setAuth: (user: authUser) => void
    logout: () => void
}

export const userAuthStore = create<AuthState>()(
    persist((set)=>({
    user: null,
    setAuth: (user) => set({user}),
    logout: () => set({user: null })  
    }),{
        name: "userAuth"
    }
))

