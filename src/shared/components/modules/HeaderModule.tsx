import { Plus } from "lucide-react";

interface headerModule{
    name: string
}

export default function HeaderModule({name}: headerModule) {
    return (
        <div className="flex items-center justify-between gap-3 px-3 font-bold font-outfit text-lg">
            <span>Gestion de  {name} </span>
            <div className="bg-dc-item-btn-add-300 p-1 rounded-lg shadow-lg hover:bg-dc-item-btn-add hover:cursor-pointer">
                <Plus/>
            </div>
        </div>
    );
}