import { authUser } from "../../auth/types/auth.types";
import Datatable from "@src/shared/components/modules/table/DataTable";
import { Table } from "@tanstack/react-table";

interface Props {
    table: Table<authUser>
}


export default function DesktopListUser({ table}: Props) {
    return (
        <Datatable table = {table}/>
    );
}
