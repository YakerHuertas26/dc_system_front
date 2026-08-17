import { MobileListProps } from "./table.types";

export default function MobileList<TData>({table, mobileComponent}: MobileListProps<TData>) {
    const MobileComponent = mobileComponent;
    const rows = table.getRowModel().rows;

    if (rows.length===0) {
        return (
            <div className="py-10 text-center text-gray-500">
                No hay registros
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 ">
            {rows.map((row) => (
                <MobileComponent
                    key={row.id}
                    data={row.original}
                />
            ))}
        </div>
    );
}