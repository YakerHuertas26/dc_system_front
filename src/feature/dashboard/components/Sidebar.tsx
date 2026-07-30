'use client'
import { userAuthStore } from "@/src/store/auth.store";
import { sidebarItemsConfig } from "@src/feature/dashboard/constants/sidebar.config";
import ItemSidebar from "./ItemSidebar";
import { sidebarMenuStore } from "@/src/store/dashboard.store";
import { cn } from "@/src/shared/utils/cn.utils";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const user = userAuthStore((state) => state.user);
    const sidebarMenuRef = useRef<HTMLButtonElement>(null);

    // estodos del sidebar
    const sidebar = sidebarMenuStore((state) => state.sidebarMenu);
    const openSidebar = sidebarMenuStore((state) => state.openSidebarMenu);
    const closeSidebar = sidebarMenuStore((state) => state.closeSidebarMenu);
    const pathname = usePathname();

    // par mobile se cierra cuando cambia de ruta 
    useEffect(()=>{
        closeSidebar()
    },[pathname]);

     // useEffect para cerrar el menu del sidebar
    useEffect(()=>{
        if (!sidebar) return
        function handleClick(e: MouseEvent){
            if (sidebarMenuRef.current && !sidebarMenuRef.current.contains(e.target as Node)) {
                closeSidebar();
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [sidebar])

    // para no hacer scroll de fondo cuando el menu esta abierto
    useEffect(() => {
        document.body.style.overflow = sidebar? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [sidebar]);

    if (!user) return null 
    const sidebarItems = sidebarItemsConfig.filter(item => item.rol.includes(user.role.name));

    return (
        <aside className={cn(
            "hidden h-screen bg-dc-sidebar p-1 min-w-35 md:block absolute md:relative z-50", 
            sidebar && "block"
        )}
        ref={sidebarMenuRef}
        >
            {sidebarItems.map(item => (
                <ItemSidebar
                    key={item.label}
                    item={item}
                />
            ))}
        </aside>
    );
}