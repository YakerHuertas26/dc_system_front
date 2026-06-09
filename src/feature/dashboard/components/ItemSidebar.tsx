'use client'
import Link from "next/link";
import { sidebarItem } from "@src/feature/dashboard/types/sidebar.types";




interface ItemSidebarProps {
    item: sidebarItem
}
export default function ItemSidebar({ item }: ItemSidebarProps) {
    
    return (
        <div>
            <Link href={`${item.url}`}>
                <item.icon size={20} />
                <span>{item.label}</span>
            </Link>
        </div>
    );
}