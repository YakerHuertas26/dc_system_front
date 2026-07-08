'use client';

import ListUser from "@/src/feature/user/components/ListUser";
import { useUsers } from "@/src/feature/user/hooks/users.hooks";
import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";

export default function Users() {
    const { data, isLoading, isError } = useUsers();
    if (isLoading) return <div>Cargando...</div>;

    if (isError) return <div>Error al cargar los usuarios</div>;
    
    return (
        <div className="px-2 py-3">
            <HeaderModule
                name = "Usuarios"
            />
            <main>
                <FilterModule/>
                <ListUser users={data.users}/>
            </main>
        </div>
    );
}