'use client'
import { useForm } from "react-hook-form";
import {BtnForm, InputForm, LabelForm, Form} from "@/src/shared/components/forms";

export default function FormLogin() {
    const {register, handleSubmit, formState: { errors }  } = useForm()
    return (
        <Form>
            <div className="mb-6">
                <LabelForm htmlFor="name"> Usuario: </LabelForm>
                <InputForm
                    type="text"
                    id="name"
                    className=" border-dc-pink-200 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                    {...register('name')}
                />
            </div>

            <div className="mb-6">
                <LabelForm htmlFor="password"> Contraseña: </LabelForm>
                <InputForm
                    type="password"
                    id="password"
                    className="border-dc-pink-200 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                    {...register('password')}
                />
            </div>
            <BtnForm
                value="Iniciar Sesión"
                className=" bg-dc-pink-400  hover:bg-pink-400 transition-colors cursor-pointer"
            />
        </Form>
    );
}