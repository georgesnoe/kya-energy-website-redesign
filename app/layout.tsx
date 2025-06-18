import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "./globals.css";
import { googleSansText } from "./lib/fonts";

export const metadata: Metadata = {
  title: "KYA-Energy Group",
  description: "Le site web de KYA-Energy Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${googleSansText.className} font-medium antialiased bg-gray-100 text-gray-800 min-h-screen`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
