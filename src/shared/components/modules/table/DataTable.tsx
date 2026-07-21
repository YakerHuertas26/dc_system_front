import {  flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableHead, TableHeader, TableRow } from "../../shadcn/components";
import DataTableProps from "./table.types";




export default function DataTable<TData>({ data, columns }: DataTableProps<TData>) {

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup)=>(
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header)=>(
                            <TableHead key={header.id}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
        </Table>
    );
}