import Form from "@/src/shared/forms/Form";

export default function FormLogin() {
    return (
        <Form >
            <div className="px-2 mx-auto mb-6">
                <label
                    htmlFor="name"
                    className="uppercase font-bold"
                >
                    Usuario:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="block border border-dc-pink-200 rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                />
            </div>

            <div className="px-2 mx-auto mb-6">
                <label
                    htmlFor="password"
                    className="uppercase font-bold "
                >
                    Contraseña:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="block border border-dc-pink-200 rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-dc-pink-400"
                />
            </div>
            <input
                type="submit"
                value="Iniciar Sesión"
                className="w-full uppercase bg-dc-pink-400 text-white font-bold py-2 rounded-md hover:bg-pink-400 transition-colors cursor-pointer"
            />
        </Form>
    );
}