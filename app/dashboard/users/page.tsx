'use client';

import ListUser from "@/src/feature/user/components/ListUser";
import { useUsers } from "@/src/feature/user/hooks/users.hooks";
import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";
import { Spinner } from "@/src/shared/components/shadcn/components";

export default function Users() {
    const { data, isLoading, isError } = useUsers();
    if (isLoading) return (
        <div className="flex items-center justify-center h-screen ">
            <Spinner />
        </div>
    );

    if (isError) return <div>Error al cargar los usuarios</div>;

    return (
        <div className="px-2 py-3">
            <HeaderModule
                name="Usuarios"
            />
            <div className="px-2">
                <FilterModule />
                <ListUser users={data.users} />
            </div>
        </div>
    );
}