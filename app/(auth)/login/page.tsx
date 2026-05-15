import Image from "next/image";

export default function Login() {
    return (
        <div className="h-screen p-8 bg-dc-sky-blue-200">
            <header className="flex flex-col mx-auto">
                <h1 className="font-black font-outfit text-center text-3xl text-dc-sky-blue-800">
                    DC CASA DE NOVEDADES
                <Image
                    className="mx-auto mb-2"
                    src="/logo.jpg"
                    alt="logo tienda"
                    width={150}
                    height={70}
                />
                </h1>
            </header>
        </div>
    );
}