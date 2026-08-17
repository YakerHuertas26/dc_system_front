import DialogModule from "./DialogModule";


interface headerModuleProps {
    name: string
    children: React.ReactNode
}

export default function HeaderModule({ name, children }: headerModuleProps) {
    return (
        <div className="flex items-center justify-between gap-3 p-2 font-bold font-outfit text-lg">
            <span>Gestion de  {name} </span>
            <DialogModule>
                {children}
            </DialogModule>

        </div>
    );
}