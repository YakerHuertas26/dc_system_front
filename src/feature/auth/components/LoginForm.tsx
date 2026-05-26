'use client'
import { useForm } from "react-hook-form";
import { BtnForm, InputForm, LabelForm, Form } from "@/src/shared/components/forms";
import { authInput, authSchema } from "@/src/shared/schema/baseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorForm from "@/src/shared/components/forms/ErrorForn";
import { authServices } from "@/src/services/authServices";
import { userAuthStore } from "@/src/store/authStore";
import { RoleName } from "../types/auth.types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from 'sonner'

export default function FormLogin() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: zodResolver(authSchema),
        mode: 'all'
    })
    const router = useRouter();
    const setAuth = userAuthStore((state) => state.setAuth);

    const onsubmit = async (data: authInput) => {        
        try {
            // authService llama a /api/auth/login (Next.js)
            const { userAutorised } = await authServices.login(data);
            // token ya está en cookie httpOnly — invisible aquí
            // Guarda usuario en Zustand
            setAuth(userAutorised)

            const rutas: Record<RoleName, string> = {
                Admin: '/admin/dashboard',
                Supervisor: '/supervisor/dashboard',
                Vendedor: '/vendedor/dashboard',
            }

            router.push(rutas[userAutorised.role.name])
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const msg = err.response?.data?.message ?? 'Error'
                
                if (msg.includes('registrado')) {
                    setError('name', { message: msg })
                    toast.error(msg);
                }
                else if (msg.includes('Contraseña')) {
                    setError('password', { message: msg })
                    toast.error(msg);
                }
                else {
                    setError('root', { message: msg })
                    toast.error(msg);
                }
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-6">
                <LabelForm htmlFor="name"> Usuario: </LabelForm>
                <InputForm
                    type="text"
                    id="name"
                    className=" border-dc-pink-200 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                    {...register('name')}
                />
                {errors.name && <ErrorForm> {errors.name?.message} </ErrorForm>}
            </div>

            <div className="mb-6">
                <LabelForm htmlFor="password"> Contraseña: </LabelForm>
                <InputForm
                    type="password"
                    id="password"
                    className="border-dc-pink-200 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                    {...register('password')}
                />
                {errors.password && <ErrorForm> {errors.password?.message} </ErrorForm>}
            </div>
            <BtnForm
                value="Iniciar Sesión"
                className=" bg-dc-pink-400  hover:bg-pink-400 transition-colors cursor-pointer"
            />
        </Form>
    );
}