import { cn } from "@src/shared/utils/cn.utils";

interface stateElementProp {
    state: number,
    className?: string
}

export default function StateElement({state, className} : stateElementProp) {
    return (
        <div className= {cn("flex items-center gap-2 justify-center", className)}>
            <span className={cn(
                "h-2 w-2 rounded-full",
                state === 1 || true ? "bg-green-500" : "bg-red-500"
            )}></span>

            <span className={cn(
                "font-semibold text-sm",
                state === 1 || true ? "text-green-700" : "text-red-500"
            )}>
                {state === 1 || true ? 'Activo' : 'Inactivo'}
            </span>
        </div>
    );
}