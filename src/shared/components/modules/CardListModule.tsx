import Image, { StaticImageData } from "next/image";
import { cn } from "../../utils/cn.utils";
import { Pencil, Trash2 } from "lucide-react";

interface CardUserProps {
    imageSrc: StaticImageData;
    name: string;
    roleName: string;
    email: string;
    state: number;
}

export default function CardListModule({ imageSrc, name, roleName, email, state }: CardUserProps) {
    return (
        <div className=" flex md:gap-4 rounded-lg p-2 items-center justify-between bg-white shadow-md">
            <Image src={imageSrc}
            alt="User Image" 
            width={52} height={52} />

            <div className="flex flex-col">
                <span className="font-bold">{name}</span>
                <span className="text-sm text-gray-600">{email}</span>
            </div>

            <div className="flex flex-col text-center gap-1">
                <span className={cn(
                    "font-semibold px-4 rounded-lg", 
                    roleName === "Admin" ? "text-blue-500 bg-emerald-100" : "text-green-500 bg-green-100")}>
                    {roleName}
                </span>
                <div className="flex items-center gap-2 justify-center">
                    <span className={cn(
                        "h-2 w-2 rounded-full",
                        state === 1 ? "bg-green-500" : "bg-red-500"
                    )}></span>
                    
                    <span className={cn(
                        "font-semibold text-sm",
                        state === 1 ? "text-green-700" : "text-red-500"
                    )}>
                        {state===1 ? 'Activo' : 'Inactivo'}
                    </span>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                    <Pencil size={18} />
                </button>
                <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 cursor-pointer">
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
}