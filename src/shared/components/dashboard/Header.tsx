'use client';

import { userAuthStore } from '@/src/store/authStore';
import { CircleUserRound, Menu,ChevronDown } from 'lucide-react';

export default function Header() {
    const user = userAuthStore((state) => state.user)
    console.log(user);
    
    return (
        <header className="flex items-center justify-between h-14 px-4 bg-dc-pink-200 z-30 shrink-0">
            <div className="flex items-center gap-3">
                <button className="inline-flex items-center justify-center border rounded-lg w-9 h-9 hover:bg-gray-300 cursor-pointer transition-colors lg:hidden">
                    <Menu />
                </button>
                <div className="hidden lg:flex items-center gap-3 justify-center">
                    <span className="font-black text-2xl text-dc-tower-gray-500">DC</span>
                    <span className="font-semibold text-lg text-dc-chathams-blue-700">Casa de Novedades</span>
                </div>

            </div>
            <div className="lg:hidden flex items-center gap-3 justify-center">
                <span className="font-black text-2xl text-dc-tower-gray-500">DC</span>
                <span className="font-semibold text-lg text-dc-chathams-blue-700">Casa de Novedades</span>
            </div>
            <div className="relative">
                <button 
                    className="flex items-center justify-center p-1 gap-2 lg:border rounded-lg hover:bg-gray-300 cursor-pointer transition-colors "
                >
                    <CircleUserRound size={32}/>
                    <span className="hidden lg:block text-md font-medium"> {user?.name} </span>
                    <ChevronDown size={20} className="hidden lg:block"/>
                </button>
            </div>
        </header>
    );
}
