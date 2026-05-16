'use client'
import { useForm } from "react-hook-form";
import {BtnForm, InputForm, LabelForm, Form} from "@/src/shared/components/forms";
import { authInput, authSchema } from "@/src/shared/schema/baseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorForm from "@/src/shared/components/forms/ErrorForn";

export default function FormLogin() {
    const {register, handleSubmit, formState: { errors }  } = useForm({
        resolver: zodResolver(authSchema),
        mode: 'all'
    })

    const onsubmit = (data:authInput) => {
        console.log(data);
        
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