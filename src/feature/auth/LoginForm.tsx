import BtnForm from "@/src/shared/forms/BtnForm";
import Form from "@/src/shared/forms/Form";
import InputForm from "@/src/shared/forms/InputForm";
import LabelForm from "@/src/shared/forms/LabelForm";

export default function FormLogin() {
    return (
        <Form>
            <div className="mb-6">
                <LabelForm htmlFor="name"> Usuario: </LabelForm>
                <InputForm
                    type="text"
                    id="name"
                    name="name"
                    className=" border-dc-pink-200 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                />
            </div>

            <div className="mb-6">
                <LabelForm htmlFor="password"> Contraseña: </LabelForm>
                <InputForm
                    type="password"
                    id="password"
                    name="password"
                    className="border-dc-pink-200 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                />
            </div>
            <BtnForm
                value="Iniciar Sesión"
                className=" bg-dc-pink-400  hover:bg-pink-400 transition-colors cursor-pointer"
            />
        </Form>
    );
}