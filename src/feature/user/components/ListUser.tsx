import Image from "@/public/usuario.png";
import { authUser } from "../../auth/types/auth.types";
import MobileListUser from "./MobileListUser";
import DesktopListUser from "./DesktopListUser";

interface ListUserProps {
    users: authUser[];
}

export default function ListUser({ users }: ListUserProps) {

    return (
        <>
        {/* Mobile */}
            <div className="flex gap-5 flex-col h-fit py-2 md:hidden">
                {users.map((element, key) =>
                    <MobileListUser
                        key={key}
                        imageSrc={Image}
                        name={element.name}
                        email={element.email}
                        roleName={element.role.name}
                        state={element.state}
                    />
                )}
            </div>

        {/* Desktop */}
        <div className="hidden md:block">
            <DesktopListUser users = {users}/>
        </div>
        </>
    );
}