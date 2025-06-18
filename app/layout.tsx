import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "./globals.css";
import { googleSansText } from "./lib/fonts";

export const metadata: Metadata = {
  title: "🚀 Loft Secret",
  description: "Une application web pour réserver des places pour des événements",
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
        <main className="py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
