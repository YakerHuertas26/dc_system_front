'use client';

import { columnsUsers } from "@/src/feature/user/components/Columns";
import UserMobileListCard from "@/src/feature/user/components/MobileListUser";
import { useUsers } from "@/src/feature/user/hooks/users.hooks";
import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";
import DataTable from "@/src/shared/components/modules/table/DataTable";
import { Spinner } from "@/src/shared/components/shadcn/components";

export default function Users() {
    const { data, isLoading, isError } = useUsers();

    if (isLoading) return (
        <div className="flex items-center justify-center h-screen ">
            <Spinner />
        </div>
    );

    if (isError)
        return <div className="flex items-center justify-center h-screen ">
            Error al cargar los usuarios
        </div>;

    return (
        <div className="px-2 py-3">
            <HeaderModule name="Usuarios"
            >
            </HeaderModule>
            <div className="px-1">
                <FilterModule />
                <DataTable
                    data={data.users}
                    columns={columnsUsers}
                    mobileComponent={UserMobileListCard}
                />
            </div>
        </div>
    );
}