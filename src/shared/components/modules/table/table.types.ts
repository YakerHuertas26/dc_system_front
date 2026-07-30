import { ColumnDef, Table } from '@tanstack/react-table';
import { ComponentType } from 'react';

export interface DataTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[];
    mobileComponent: ComponentType<MobileComponentProps<TData>>;
}

export interface MobileComponentProps<TData> {
    data: TData;
}

export interface DesktopTableProps<TData> {
    table: Table<TData>;
}

export interface MobileTableProps<TData> {
    table: Table<TData>;
    mobileComponent: ComponentType<MobileComponentProps<TData>>;
}