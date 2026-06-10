
import { Apple, Blocks, House, Palette, Truck, User } from "lucide-react";
import { sidebarItem } from "@/src/feature/dashboard/types/dashboard.types";

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
        label: 'Proveedores',
        url: '/proveedores',
        icon: Truck,
        rol: ['Admin']
    },
    {
        label: 'Categories',
        url: '/categories',
        icon: Blocks,
        rol: ['Admin']
    },
    {
        label: 'Colores',
        url: '/colores',
        icon: Palette,
        rol: ['Admin']
    },
    {
        label: 'Productos',
        url: '/productos',
        icon: Apple,
        rol: ['Admin']
    },
    {
        label: 'Home2',
        url: '/home2',
        icon: House,
        rol: ['Vendedor']
    },
    
];