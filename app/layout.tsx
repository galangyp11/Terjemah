import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KABBAR",
  description: "Kamus Bahasa Bekasi Anak Al Biruni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
