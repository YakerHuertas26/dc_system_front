import { create } from "zustand";
import { menuSidebarState, menuUserState } from "@src/feature/dashboard/types/dashboard.types";


export const sidebarMenuStore = create<menuSidebarState>((set)=>({
    sidebarMenu: false,
    openSidebarMenu: () => set({sidebarMenu: true}),
    closeSidebarMenu: () => set({sidebarMenu: false})
    })
);
export const userMenuStore = create<menuUserState>((set)=>({
    userMenu: false,
    openUserMenu: () => set({userMenu: true}),
    closeUserMenu: () => set({userMenu: false})
    })
);