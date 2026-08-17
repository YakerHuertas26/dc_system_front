
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

export default function DialogModule({children}:{children: React.ReactNode}) {
    return (
        <Dialog>
            <DialogTrigger render={
                <Button variant="outline" className="h-10 bg-dc-item-btn-add-300 rounded-lg shadow-lg hover:bg-dc-item-btn-add hover:cursor-pointer">
                    <Plus/>
                </Button>} />
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    {children}
                </DialogHeader>
                <DialogFooter>
                    <DialogClose render={<Button variant="outline">Cancel</Button>} />
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}