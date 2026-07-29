import { ColumnDef } from "@tanstack/react-table";
import { authUser } from "../../auth/types/auth.types";
import PropertyElement from "@/src/shared/components/modules/PropertyElement";

export const columnsUsers: ColumnDef<authUser>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "email",
        header: "Correo",
    },
    {
        id: "role",
        header: "Rol",
        accessorFn: (row) => row.role.name,
        cell: ({ row }) => {
            const rol = row.original.role.name;
            return (
                <PropertyElement roleName={rol}/>
            )
        },
    }
];