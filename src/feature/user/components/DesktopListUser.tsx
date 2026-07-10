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
                    <tr key={user.userId}>
                        <td>{user.name}</td>
                        <td>{user.role.name}</td>
                        <td>{user.state}</td>
                        <td>
                            <button>Editar</button>
                            <button>Borrar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}