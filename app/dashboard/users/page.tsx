import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";

export default function Users() {
    return (
        <div className="px-2 py-3">
            <HeaderModule
                name = "Usuarios"
            />
            <main>
                <FilterModule/>
            </main>
        </div>
    );
}