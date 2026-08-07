import { Avatar, AvatarFallback } from "@/src/shared/components/shadcn/components";
import BtnEdit from "@/src/shared/components/modules/btnEdit";
import StateElement from "@/src/shared/components/modules/StateElement";
import BtnDelet from "@/src/shared/components/modules/BtnDelet";
import PropertyElement from "@/src/shared/components/modules/PropertyElement";
import { authUser, CategoryType } from "../../../shared/types/general.types";
import { MobileComponentProps } from "@/src/shared/components/modules/table/table.types";

export default function CategoriesMobileListCard({ data }: MobileComponentProps<CategoryType>) {

    const category = data;
    console.log(category);
    
    function handleEdit(category: CategoryType) {
        console.log(category);
    }

    function handleDelete(category: CategoryType) {
        console.log(category);
    }
    return (
        <div  className="text-sm flex md:gap-4 rounded-lg px-2  py-4 items-center justify-between bg-white shadow-md">
            <Avatar size="lg">
                <AvatarFallback className="bg-emerald-100 font-bold">
                    {category.name.slice(0, 2)}
                </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
                <span className="font-bold">
                    {category.name}
                </span>

                <span className="text-sm text-gray-500">
                    {category.code}
                </span>
            </div>

            <div className="flex flex-col gap-1">
                {/* <PropertyElement roleName={category.role.name} /> */}
                <StateElement state={category.state} />
            </div>

            <div className="flex gap-2">
                <BtnEdit onClick={() => handleEdit(category)} />

                <BtnDelet onClick={() => handleDelete(category)} />
            </div>

        </div>
    );
}