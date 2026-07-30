import { cn } from "../../utils/cn.utils";

interface PropertyElementProp {
    roleName: string,
    className?: string
}

export default function PropertyElement({roleName, className}:PropertyElementProp) {
    return (
        <span className={cn(
            "font-semibold px-4 rounded-lg",
            roleName === "Admin" ? "text-blue-500 bg-emerald-100" : "text-green-500 bg-green-100",
            className)}>
            {roleName}
        </span>
    );
}