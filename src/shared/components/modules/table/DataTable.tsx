import {getCoreRowModel, useReactTable,} from "@tanstack/react-table";
import { DataTableProps } from "./table.types";
import DesktopTable from "./DesktopTable";
import MobileList from "./MobileList";


export default function DataTable<TData>({data, columns, mobileComponent}:DataTableProps<TData>) {
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
    return (
        <>
            {/* desktop */}
            <div className="hidden md:block">
                <DesktopTable table= {table}/>
            </div>

            {/*  mobile */}
            <div className="md:hidden">
                <MobileList 
                    table= {table}
                    mobileComponent= {mobileComponent}
                />
            </div>
        </>
    );
}