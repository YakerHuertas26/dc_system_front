import { authUser } from "../../auth/types/auth.types";
import Datatable from "@src/shared/components/modules/table/DataTable";
import { columnsUsers } from "./Columns";

interface UserTableProps {
    users: authUser[];
}

export default function DesktopListUser({ users }: UserTableProps) {
    return (
        <Datatable
            data={users}
            columns={columnsUsers}
        />
    );
}
