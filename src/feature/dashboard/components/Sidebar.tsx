'use client'
import { userAuthStore } from "@/src/store/auth.store";
import { sidebarItemsConfig } from "@src/feature/dashboard/constants/sidebar.config";
import ItemSidebar from "./ItemSidebar";
import { sidebarMenuStore } from "@/src/store/dashboard.store";
import { cn } from "@/src/shared/utils/cn.utils";

export default function Sidebar() {
    const user = userAuthStore((state) => state.user);
    const sidebar = sidebarMenuStore((state) => state.sidebarMenu);
    if (!user) return null 
    const sidebarItems = sidebarItemsConfig.filter(item => item.rol.includes(user.role.name));

    return (
        <aside className={cn(
            "hidden h-screen bg-dc-sidebar p-1 min-w-35 lg:block", 
            sidebar && "block"
        )}>
            {sidebarItems.map(item => (
                <ItemSidebar
                    key={item.label}
                    item={item}
                />
            ))}
        </aside>
    );
}