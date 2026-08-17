'use client'
import { columnsCategories } from "@/src/feature/categories/components/Columns";
import FormCategories from "@/src/feature/categories/components/FormCategories";
import CategoriesMobileListCard from "@/src/feature/categories/components/MobieleListCategories";
import { useCategories } from "@/src/feature/categories/hooks/categories.hooks";
import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";
import DataTable from "@/src/shared/components/modules/table/DataTable";
import { Spinner } from "@/src/shared/components/shadcn/components";

export default function Categorias() {
    const {data, isLoading, isError} = useCategories();
    
    if (isLoading) return (
        <div className="flex items-center justify-center h-screen ">
            <Spinner />
        </div>
    );

    if (isError) 
    return  (
        <div className="flex items-center justify-center h-screen ">
        Error al cargar los usuarios
        </div>
    )
    
    return (
        <div className="px-2 py-3">
            <HeaderModule name= "Categorías">
                <FormCategories action="Crear" />
            </HeaderModule>

            <div className="px-1">
                <FilterModule/>
                <DataTable
                    data={data.categories} 
                    columns={columnsCategories} 
                    mobileComponent={CategoriesMobileListCard}
                />
            </div>
        </div>
    );
}