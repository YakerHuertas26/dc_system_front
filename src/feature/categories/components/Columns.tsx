import BtnDelet from "@/src/shared/components/modules/BtnDelet";
import BtnEdit from "@/src/shared/components/modules/btnEdit";
import StateElement from "@/src/shared/components/modules/StateElement";
import { CategoryType } from "@/src/shared/types/general.types";
import { ColumnDef } from "@tanstack/react-table";
 
export const columnsCategories: ColumnDef<CategoryType>[] = [
    {
        id: "Id",
        header: "Id",
        cell: ({row}) =>{
            return (
                <span>{row.index + 1}</span>
            )
        }
    },
    {
        accessorKey: "code",
        header: "Código",
    },
    {
        accessorKey: "name",
        header: "Nombre",
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
            const category = row.original;
            return (
                <div className="flex justify-evenly">
                    <BtnEdit />
                    <BtnDelet />
                </div>
            )
        }
    }
]