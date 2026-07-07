import { user } from "@/src/data/users";
import CardListModule from "@/src/shared/components/modules/CardListModule";
import Image from "@/public/usuario.png";
export default function UserCard() {

    const userData = user;
    
    return (
        <>
            {userData.map((element,key)=>
                <CardListModule
                key={key}
                imageSrc={Image}
                />
            )}
        </>     
    );
}