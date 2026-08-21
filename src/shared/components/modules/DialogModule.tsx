
import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@src/shared/components/shadcn/components"
import { Plus } from "lucide-react";
import { BtnForm } from "../forms";
import BtnSecundaryForm from "../forms/BtnSecundaryForm";

export default function DialogModule({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger render={
                <Button variant="outline" className="h-10 bg-dc-item-btn-add-300 rounded-lg shadow-lg hover:bg-dc-item-btn-add hover:cursor-pointer">
                    <Plus />
                </Button>} />
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    {children}
                </DialogHeader>
                <DialogFooter className="">
                    <DialogClose className="sm:w-1/2" render={
                        <Button  variant="outline" 
                            className=" font-bold h-9 rounded-md border border-pink-400 transition-colors hover:border-pink-600 cursor-pointer">
                            Cancelar
                        </Button>} />
                        <BtnForm value="Guardar" className="text-black mb-2 flex-1" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}