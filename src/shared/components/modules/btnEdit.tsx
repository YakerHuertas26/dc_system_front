import { Pencil } from "lucide-react";
import { cn } from "../../utils/cn.utils";
import { ButtonHTMLAttributes } from "react";

type BtnEditProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function BtnEdit(prompt: BtnEditProps) {
    return (
        <button 
            {...prompt}
            className={cn("bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer")}
        >
                <Pencil size={18} />
        </button>
    );
}