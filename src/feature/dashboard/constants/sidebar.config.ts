
import { Blocks, House, User } from "lucide-react";
import { sidebarItem } from "@src/feature/dashboard/types/sidebar.types";

export const  sidebarItemsConfig : sidebarItem[] = [
    {
        label: 'Home',
        url: '/',
        icon: House,
        rol: ['Admin']
    },
    {
        label: 'Users',
        url: '/users',
        icon: User,
        rol: ['Admin']
    },
    {
        label: 'Categories',
        url: '/categories',
        icon: Blocks,
        rol: ['Admin','Vendedor']
    },
    {
        label: 'Home2',
        url: '/home2',
        icon: House,
        rol: ['Vendedor']
    },
    
];