import { ColumnDef } from '@tanstack/react-table';

export default interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[];
}