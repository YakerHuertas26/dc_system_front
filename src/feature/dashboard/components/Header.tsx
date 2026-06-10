'use client';

import { userAuthStore } from '@/src/store/auth.store';
import { sidebarMenuStore, userMenuStore } from '@/src/store/dashboard.store';
import { CircleUserRound, Menu,ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import MenuUser from './MenuUser';

export default function Header() {
    const userMenuRef = useRef<HTMLButtonElement>(null);
    const user = userAuthStore((state) => state.user);
    
    // estodos del sidebar
    const sidebar = sidebarMenuStore((state) => state.sidebarMenu);
    const openSidebar = sidebarMenuStore((state) => state.openSidebarMenu);
    const closeSidebar = sidebarMenuStore((state) => state.closeSidebarMenu);
    
    // estos del menu de usuarios
    const menuUser =  userMenuStore((state) => state.userMenu);
    const openUserMenu = userMenuStore((state) => state.openUserMenu);
    const closeUserMenu = userMenuStore((state) => state.closeUserMenu);
    
    // useEffect para el menu de usuario
    useEffect(()=>{
        if (!menuUser) return
        function handleClick(e: MouseEvent){
            if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
                closeUserMenu();
            }
            
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuUser])

    const stateButtonSidebar = (state: boolean): void => {
        state? closeSidebar(): openSidebar();
    }
    
    return (
        <>
        <header className="flex items-center justify-between h-14 px-2 bg-dc-pink-200 z-30 shrink-0">
            <div className="flex items-center gap-3">
                <button 
                    className="inline-flex items-center justify-center rounded-lg w-9 h-9 hover:bg-gray-300 cursor-pointer transition-colors lg:hidden"
                    onClick={()=> stateButtonSidebar(sidebar)}
                >
                    <Menu />
                </button>
                <div className="hidden lg:flex items-center gap-3 justify-center">
                    <span className="font-black text-2xl text-dc-sky-blue-500">DC</span>
                    <span className="font-semibold text-lg text-dc-chathams-blue-700">Casa de Novedades</span>
                </div>

            </div>
            <div className="lg:hidden flex items-center gap-3 justify-center">
                <span className="font-black text-2xl text-dc-sky-blue-500">DC</span>
                <span className="font-semibold text-lg text-dc-chathams-blue-700">Casa de Novedades</span>
            </div>
            <div className="relative">
                <button 
                    className="flex items-center justify-center p-1 gap-2 lg:border rounded-lg hover:bg-gray-300 cursor-pointer transition-colors "
                    ref={userMenuRef}
                    onClick={openUserMenu}
                >
                    <CircleUserRound size={32}/>
                    <span className="hidden lg:block text-md font-medium"> {user?.name} </span>
                    <ChevronDown size={20} className="hidden lg:block"/>
                </button>
                <MenuUser/>
            </div>
        </header>
        </>
    );
}
