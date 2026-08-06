'use client'
import { useCategories } from "@/src/feature/categories/hooks/categories.hooks";
import FilterModule from "@/src/shared/components/modules/FilterModule";
import HeaderModule from "@/src/shared/components/modules/HeaderModule";
import DataTable from "@/src/shared/components/modules/table/DataTable";
import { Spinner } from "@/src/shared/components/shadcn/components";

export default function Categorias() {
    const {data, isLoading, isError} = useCategories();
    console.log(data);
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
            <HeaderModule name= "Categorías"/>
            <div className="px-1">
                <FilterModule/>
                {/* <DataTable
                    data={[]},
                    columns ={[]},
                    mobileComponent={null}
                /> */}
            </div>
        </div>
    );
}