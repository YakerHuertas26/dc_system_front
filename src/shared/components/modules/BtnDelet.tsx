import { Trash2 } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type BtnDeletProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function BtnDelet(prompt: BtnDeletProps) {
    return (
        <div>
            <button {...prompt} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 cursor-pointer">
                <Trash2 size={18} />
            </button>
        </div>
    );
}