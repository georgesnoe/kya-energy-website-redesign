import localFont from "next/font/local";

export const googleSansText = localFont({
    src: [
        {
            path: "../../public/fonts/GoogleSansText-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../public/fonts/GoogleSansText-Italic.ttf",
            weight: "400",
            style: "italic"
        },
        {
            path: "../../public/fonts/GoogleSansText-Medium.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "../../public/fonts/GoogleSansText-MediumItalic.ttf",
            weight: "500",
            style: "italic"
        },
        {
            path: "../../public/fonts/GoogleSansText-Bold.ttf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../../public/fonts/GoogleSansText-BoldItalic.ttf",
            weight: "700",
            style: "italic"
        }
    ],
    variable: "--font-google-sans-text"
})

