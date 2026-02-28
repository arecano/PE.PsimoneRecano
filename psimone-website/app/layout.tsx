import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dott. Simone Recano - Psicologo",
  description: "Psicologo clinico. Percorsi di supporto psicologico e psicoterapia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-slate-800 antialiased`}>{children}</body>
    </html>
  );
}
