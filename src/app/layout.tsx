import { NextUIProvider } from "@nextui-org/system";

import type { Metadata }  from "next";
import { Inter }          from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Haruhime',
    description: 'Haruhime osu!',
    keywords: 'Haruhime, osu!',
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://haruhime.website" />
                <meta name="theme-color" content="#303446" />
            </head>
            <body className={`${inter.className} mocha bg-base text-text`}>
                <NextUIProvider>
                    <main className="flex-grow">{children}</main>
                </NextUIProvider>
            </body>
        </html>
    );
}

// path: src/app/layout.tsx
