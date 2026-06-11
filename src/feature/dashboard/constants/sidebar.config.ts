
import { Apple, Blocks, House, Palette, Truck, User } from "lucide-react";
import { sidebarItem } from "@/src/feature/dashboard/types/dashboard.types";

export const  sidebarItemsConfig : sidebarItem[] = [
    {
        label: 'Home',
        url: 'dashboard/',
        icon: House,
        rol: ['Admin']
    },
    {
        label: 'Users',
        url: 'dashboard/users',
        icon: User,
        rol: ['Admin']
    },
    {
        label: 'Proveedores',
        url: 'dashboard/proveedores',
        icon: Truck,
        rol: ['Admin']
    },
    {
        label: 'Categories',
        url: 'dashboard/categories',
        icon: Blocks,
        rol: ['Admin']
    },
    {
        label: 'Colores',
        url: 'dashboard/colores',
        icon: Palette,
        rol: ['Admin']
    },
    {
        label: 'Productos',
        url: 'dashboard/productos',
        icon: Apple,
        rol: ['Admin']
    },
    {
        label: 'Home2',
        url: 'dashboard/home2',
        icon: House,
        rol: ['Vendedor']
    },
    
];