import { Avatar, AvatarFallback } from "@/src/shared/components/shadcn/components";
import BtnEdit from "@/src/shared/components/modules/btnEdit";
import StateElement from "@/src/shared/components/modules/StateElement";
import BtnDelet from "@/src/shared/components/modules/BtnDelet";
import PropertyElement from "@/src/shared/components/modules/PropertyElement";
import { Table } from "@tanstack/react-table";
import { authUser } from "../../auth/types/auth.types";

interface Props {
    table: Table<authUser>;
}

export default function MobileListUser({ table }: Props) {

    function handleEdit(user: authUser) {
        console.log(user);
    }

    function handleDelete(user: authUser) {
        console.log(user);
    }
    return (
        <>
            {table.getRowModel().rows.map((row) => {
                const user = row.original;
                return (
                    <div
                        key={row.id}
                        className="rounded-lg bg-white shadow-md p-4 flex justify-between items-center"
                    >
                        <Avatar size="lg">
                            <AvatarFallback className="bg-emerald-100 font-bold">
                                {user.name.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                            <span className="font-bold">
                                {user.name}
                            </span>

                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <PropertyElement roleName={user.role.name}/>
                            <StateElement state={user.state}/>
                        </div>

                        <div className="flex gap-2">
                            <BtnEdit onClick={() => handleEdit(user)} />

                            <BtnDelet onClick={() => handleDelete(user)}/>
                        </div>
                    </div>
                );
            })}
        </>
    );
}