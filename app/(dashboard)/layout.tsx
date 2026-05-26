import Header from "@/src/shared/components/dashboard/Header";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Header/>
            {children}
        </div>
    );
}