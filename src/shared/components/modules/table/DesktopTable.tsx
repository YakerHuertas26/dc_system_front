import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@src/shared/components/shadcn/components";
import { DesktopTableProps } from "./table.types";
import { flexRender } from "@tanstack/react-table";

export default function DesktopTable<TData>({table}:DesktopTableProps<TData>) {
    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup)=>(
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header)=>(
                            <TableHead key={header.id}>
                                {
                                    header.isPlaceholder? null : 
                                    flexRender(header.column.columnDef.header, header.getContext())
                                }
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>

            <TableBody>
                {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row)=>(
                        <TableRow key={row.id}>
                            {row.getLeftVisibleCells().map((cell)=>(
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ): (
                    <TableCell colSpan={table.getAllColumns().length} className="text-center mx-0">
                        No hay registros
                    </TableCell>
                )
                
                }
            </TableBody>
        </Table>
    );
}