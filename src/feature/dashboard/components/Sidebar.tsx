'use client'
import { userAuthStore } from "@/src/store/authStore";
import { sidebarItemsConfig } from "@src/feature/dashboard/constants/sidebar.config";
import ItemSidebar from "./ItemSidebar";

export default function Sidebar() {
    const user = userAuthStore((state) => state.user);
    if (!user) return null 
    console.log(user);
    
    const sidebarItems = sidebarItemsConfig.filter(item => item.rol.includes(user.role.name));

    return (
        <nav>
            {sidebarItems.map(item => (
                <ItemSidebar
                    key={item.url}
                    item={item}
                />
            ))}
        </nav>
    );
}