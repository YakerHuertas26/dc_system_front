import { authUser } from "../../auth/types/auth.types";
import MobileListUser from "./MobileListUser";
import DesktopListUser from "./DesktopListUser";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columnsUsers } from "./Columns";

interface ListUserProps {
    users: authUser[];
}

export default function ListUser({ users }: ListUserProps) {

    const table = useReactTable({
        data: users,
        columns: columnsUsers,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <>
        {/* Mobile */}
            <div className="flex gap-5 flex-col h-fit text-sm py-2 md:hidden">
                <MobileListUser table={table} />
            </div>

        {/* Desktop */}
        <div className="hidden md:block">
            <DesktopListUser table = {table}/>
        </div>
        </>
    );
}