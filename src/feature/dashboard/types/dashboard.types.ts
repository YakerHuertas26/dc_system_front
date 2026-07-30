/* SIDEBAR TYPES */

import { LucideIcon } from "lucide-react";
import { RoleName } from "@src/feature/auth/types/auth.types";

// sidebar item
export interface sidebarItem {
    label: string,
    url: string,
    icon: LucideIcon, 
    rol: RoleName[]
}

// barra del sidebar
export interface menuSidebarState {
    sidebarMenu: boolean;
    openSidebarMenu: ()=> void;
    closeSidebarMenu: ()=> void;
}

// barra del menu del user 
export interface menuUserState {
    userMenu: boolean;
    openUserMenu: ()=> void;
    closeUserMenu: ()=> void;
}