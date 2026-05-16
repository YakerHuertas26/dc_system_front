import FormLogin from "@/src/feature/auth/components/LoginForm";
import Image from "next/image";

export default function Login() {
    return (
        <div className="min-h-screen p-8 bg-dc-sky-blue-200">
            <header className="flex flex-col">
                <h1 className="font-black font-outfit text-center text-3xl text-dc-sky-blue-800">
                    DC CASA DE NOVEDADES
                </h1>
                <Image
                    className="mx-auto mb-2"
                    src="/logo.jpg"
                    alt="logo tienda"
                    width={150}
                    height={70}
                />
            </header>

            <main className=" mt-8">
                <div className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-gray-50">
                    <p className="text-center font-semibold text-indigo-800 pt-2 text-lg">
                        Iniciar sesión 
                    </p>
                    <FormLogin/>
                </div>
            </main>
        </div>
    );
}