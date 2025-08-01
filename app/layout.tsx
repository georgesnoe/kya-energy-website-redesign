import type { Metadata } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Chatbot from "@/app/components/chatbot";
import "./globals.css";
import { googleSansText } from "./lib/fonts";
import Script from "next/script";

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
        {/* Google Tag Manager */}
        <Script src="/analytics.js" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6KJPJKDZTZ" />
        {/* End Google Tag Manager */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
      </head>
      <body
        className={`${googleSansText.className} font-medium antialiased bg-gray-100 text-gray-800 min-h-screen **:scroll-smooth **:transition-all **:duration-300 **:transition-discrete`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5JH3WM5"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
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
