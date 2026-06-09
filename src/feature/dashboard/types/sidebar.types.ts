/* SIDEBAR TYPES */

import { LucideIcon } from "lucide-react";
import { RoleName } from "@src/feature/auth/types/auth.types";

export interface sidebarItem {
    label: string,
    url: string,
    icon: LucideIcon, 
    rol: RoleName[]
}