import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Chatbot from "@/app/components/chatbot";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${googleSansText.className} font-medium antialiased bg-gray-100 text-gray-800 min-h-screen **:scroll-smooth **:transition-all **:duration-300 **:transition-discrete`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
