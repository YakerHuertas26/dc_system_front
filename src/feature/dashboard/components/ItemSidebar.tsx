'use client'
import Link from "next/link";
import { sidebarItem } from "@/src/feature/dashboard/types/dashboard.types";
import { userAuthStore } from "@/src/store/auth.store";

interface ItemSidebarProps {
    item: sidebarItem
}

export default function ItemSidebar({ item }: ItemSidebarProps) {
    const userRole = userAuthStore((state) => state.user?.role.name);
    const roleRute = userRole?.toLowerCase()
    
    return (
        <div className="px-2 py-1 flex items-center gap-4 rounded-lg hover:bg-dc-item-select transition-colors">
            <Link href={`/${item.url}`} className="flex items-center gap-2">
                <item.icon size={16} />
                <span>{item.label}</span>
            </Link>
        </div>
    );
}