import { DialogDescription, DialogTitle } from "@/src/shared/components/shadcn/components";

export default function FormCategories({ action }: { action: String }) {
    return (
        <>
            <DialogTitle>{action} Categoria </DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
            </DialogDescription>
        </>

    );
}