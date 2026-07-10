import { cn } from "@src/shared/utils/cn.utils";


export default function StateElement({state}: {state: number}) {
    return (
        <div className="flex items-center gap-2 justify-center">
            <span className={cn(
                "h-2 w-2 rounded-full",
                state === 1 ? "bg-green-500" : "bg-red-500"
            )}></span>

            <span className={cn(
                "font-semibold text-sm",
                state === 1 ? "text-green-700" : "text-red-500"
            )}>
                {state === 1 ? 'Activo' : 'Inactivo'}
            </span>
        </div>
    );
}