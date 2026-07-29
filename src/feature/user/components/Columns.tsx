import { ColumnDef } from "@tanstack/react-table";
import { authUser } from "../../auth/types/auth.types";

export const columnsUsers : ColumnDef<authUser>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
        // cell: ({ row }) => {
        //     return (
        //         <span>{row.original.name}</span>
        //     )
        // }
    },
    {
        accessorKey: "email",
        header: "Correo",
    },
];