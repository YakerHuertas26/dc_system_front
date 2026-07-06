import { Search } from "lucide-react";
import { InputForm } from "../forms";

export default function FilterModule() {
    return (
        <div className="flex justify-between items-center gap-1 mt-4 mb-4 px-1 border border-gray-400 rounded-lg bg-white lg:w-1/2">
            <Search color="gray"/>
            <InputForm placeholder="Buscar por nombre o rol" className="p-1 mt-0 outline-none focus:outline-none border-none"/>
        </div>
    );
}