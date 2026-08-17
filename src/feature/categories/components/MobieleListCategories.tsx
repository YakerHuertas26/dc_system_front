import { Avatar, AvatarFallback } from "@/src/shared/components/shadcn/components";
import BtnEdit from "@/src/shared/components/modules/btnEdit";
import StateElement from "@/src/shared/components/modules/StateElement";
import BtnDelet from "@/src/shared/components/modules/BtnDelet";
import PropertyElement from "@/src/shared/components/modules/PropertyElement";
import { authUser, CategoryType } from "../../../shared/types/general.types";
import { MobileComponentProps } from "@/src/shared/components/modules/table/table.types";
import ImageCategoria from '@/public/categoria.png';
import Image from "next/image";

export default function CategoriesMobileListCard({ data }: MobileComponentProps<CategoryType>) {

    const category = data;
    ;

    function handleEdit(category: CategoryType) {

    }

    function handleDelete(category: CategoryType) {

    }
    return (
        <div className="text-sm flex gap-3 rounded-lg items-center justify-between bg-white shadow-md pr-2 h-18">
            <Image className="w-16 h-full"
                src={ImageCategoria}
                alt="logo categoría"
            />
            <div className="flex w-full items-center justify-between gap-2">
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
        </div>
    );
}