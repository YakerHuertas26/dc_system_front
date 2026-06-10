import { cn } from "@/src/shared/utils/cn.utils";
import { userMenuStore } from "@/src/store/dashboard.store";
import { LogOut } from "lucide-react"

export default function MenuUser() {
    const menuUser =  userMenuStore((state) => state.userMenu);
    return (
        <div className={cn(
            "hidden border w-35 absolute right-0 top-full mt-2 bg-dc-sidebar rounded-lg text-sm font-bold shadow-lg cursor-pointer overflow-hidden lg:w-40 lg:text-base",
            menuUser && "flex"
        )}>
            <button
                onClick={() => { /* handle sign out here */ }}
                className="w-full flex items-center justify-center gap-2 cursor-pointer p-2 hover:bg-dc-item-select"
            >
                <LogOut/>
                <span>Cerrar sesión</span>
            </button>
        </div>
    );
}