import { ColumnDef, Table } from '@tanstack/react-table';
import { ComponentType } from 'react';

/**
 * Props principales del DataTable.
 */
export interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[];
    mobileComponent: ComponentType<MobileComponentProps<TData>>;
}

/**
 * Props que recibirá cualquier componente
 * utilizado para representar un elemento
 * en la vista mobile.
*/
export interface MobileComponentProps<TData> {
    data: TData;
}

/**
 * Props utilizadas por la lista Mobile.
 */
export interface MobileListProps<TData> {
    table: Table<TData>;
    mobileComponent: ComponentType<MobileComponentProps<TData>>;
}

/**
 * Props utilizadas por la tabla Desktop.
 */
export interface DesktopTableProps<TData> {
    table: Table<TData>;
}
