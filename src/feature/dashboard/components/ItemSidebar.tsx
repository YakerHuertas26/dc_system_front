'use client'
import Link from "next/link";
import { sidebarItem } from "@/src/feature/dashboard/types/dashboard.types";
import { userAuthStore } from "@/src/store/auth.store";
import { usePathname } from "next/navigation";
import { cn } from "@/src/shared/utils/cn.utils";

interface ItemSidebarProps {
    item: sidebarItem
}

export default function ItemSidebar({ item }: ItemSidebarProps) {
    const pathname = usePathname();
    const isActive = item.url === '/dashboard' 
        ? pathname === '/dashboard'
        : pathname.startsWith(item.url);
    
    return (
        <div className={cn("px-1 py-1 flex items-center gap-4 rounded-lg hover:cursor-pointer hover:bg-dc-item-select transition-colors", isActive ? "bg-dc-item-select": "")}>
            <Link href={`${item.url}`} className="flex w-full items-center gap-2">
                <item.icon size={16} />
                <span>{item.label}</span>
            </Link>
        </div>
    );
}