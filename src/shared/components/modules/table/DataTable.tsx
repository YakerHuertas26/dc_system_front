import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DataTableProps from "./table.types";


export default function DataTable<TData>({ data, columns }: DataTableProps<TData>) {

    const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()});

    return (
        <div>
            tabla
        </div>
    );
}