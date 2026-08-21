import { Form, InputForm, LabelForm } from "@/src/shared/components/forms";
import {  DialogTitle } from "@/src/shared/components/shadcn/components";

export default function FormCategories({ action }: { action: String }) {
    return (
        <>
            <DialogTitle className="text-center font-bold">{action} Categoria </DialogTitle>
            <Form >
                <LabelForm htmlFor="name" className="">Nombre:</LabelForm>
                <InputForm id="name" type= "text" className="mt-2"/>
            </Form>
        </>

    );
}