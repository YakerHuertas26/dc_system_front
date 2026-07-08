
import CardListModule from "@/src/shared/components/modules/CardListModule";
import Image from "@/public/usuario.png";
import { authUser } from "../../auth/types/auth.types";

interface UserCardProps {
    users: authUser[];
}

export default function UserCard({ users }: UserCardProps) {
 
    return (
        <>
            {users.map((element,key)=>
                <CardListModule
                    key={key}
                    imageSrc={Image}
                    name={element.name}
                    email={element.email}
                    roleName={element.role.name}
                    state={element.state}
                />
            )}
        </>     
    );
}