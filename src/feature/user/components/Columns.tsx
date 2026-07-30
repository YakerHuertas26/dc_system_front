import { ColumnDef } from "@tanstack/react-table";
import { authUser } from "../../auth/types/auth.types";
import PropertyElement from "@/src/shared/components/modules/PropertyElement";
import StateElement from "@/src/shared/components/modules/StateElement";
import BtnEdit from "@/src/shared/components/modules/btnEdit";
import BtnDelet from "@/src/shared/components/modules/BtnDelet";

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
                <PropertyElement roleName={rol} />
            )
        },
    },
    {
        accessorKey: "state",
        header: "Estado",
        cell: ({ row }) => {
            const state = row.original.state;
            return (
                <StateElement state={state} />
            )
        }
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
            const user = row.original;
            return (
                <div className="flex justify-evenly">
                    <BtnEdit/>
                    <BtnDelet/>
                </div>
            )
        }
    }
];