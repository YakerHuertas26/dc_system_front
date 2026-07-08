import { authUser } from "../../auth/types/auth.types";

interface UserTableProps {
    users: authUser[];
}

export default function DesktopListUser({ users }: UserTableProps) {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <div
                        key={user.userId}
                        // user={user}
                    />
                ))}
            </tbody>
        </table>
    );
}