'use client';

import UserCard from "@/src/feature/user/components/UserCard";
import { useUsers } from "@/src/feature/user/hooks/users.hooks";
import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";

export default function Users() {
    const { data, isLoading, isError } = useUsers();
    if (isLoading) return <div>Cargando...</div>;

    if (isError) return <div>Error al cargar los usuarios</div>;
    console.log(data);
    
    return (
        <div className="px-2 py-3">
            <HeaderModule
                name = "Usuarios"
            />
            <main>
                <FilterModule/>
                <div className="border border-red-600 flex gap-2 flex-col h-fit lg:hidden">
                    <UserCard/>
                </div>

                <div className="hidden lg:block">
                    lista
                </div>
            </main>
        </div>
    );
}