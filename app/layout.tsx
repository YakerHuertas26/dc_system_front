import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "DC_SYSTEM",
  description: "Sistema de inventario y ventas DC CASA DE NOVEDADES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html
      lang="es"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-outfit">
          <ReactQueryProvider>
              {children}
          </ReactQueryProvider>
        <Toaster position="top-center" richColors expand={true}/>
      </body>
    </html>
  );
}
