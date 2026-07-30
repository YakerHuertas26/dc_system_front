import Header from "@/src/feature/dashboard/components/Header";
import Sidebar from "@/src/feature/dashboard/components/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen bg-dc-sky-blue-200">
            <Header/>
            {/* Body */}
            <div className="flex-1 flex overflow-hidden relative">
                <Sidebar/>
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
            
        </div>
    );
}