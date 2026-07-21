import Image, { StaticImageData } from "next/image";
import { cn } from "../../../shared/utils/cn.utils";
import { Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/src/shared/components/shadcn/components";
import BtnEdit from "@/src/shared/components/modules/btnEdit";
import StateElement from "@/src/shared/components/modules/StateElement";
import BtnDelet from "@/src/shared/components/modules/BtnDelet";

interface UserProps {
    name: string;
    roleName: string;
    email: string;
    state: number;
}

export default function MobileListUser({ name, roleName, email, state }: UserProps) {
    function handleEdit() {
        console.log('editar');
    }

    function handleDelete() {
        console.log('cambio el state');
    }
    return (
        <>
            <div className=" flex md:gap-4 rounded-lg p-4 items-center justify-between bg-white shadow-md">
                <Avatar className=" bg-red-300" size="lg">
                    <AvatarFallback className="bg-emerald-100 font-bold">{name.slice(0,2)}</AvatarFallback>
                </Avatar>

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
                    <StateElement state={state} />
                </div>

                <div className="flex gap-2">
                    <BtnEdit onClick={handleEdit}/>
                    <BtnDelet onClick={handleDelete}/>
                </div>
            </div>
            
        </>
    );
}