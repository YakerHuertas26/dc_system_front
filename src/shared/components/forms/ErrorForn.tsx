export default function ErrorForm({children}: {children: React.ReactNode}) {
    return (
        <p className="text-red-500 bg-red-100 mt-2 font-bold">
            {children}
        </p>
    );
}