import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"
import React from "react";
//import { Analytics } from "@/components/analytics"
//import { TailwindIndicator } from "@/components/tailwind-indicator"
//import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
//import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
//import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

const fontSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const fontMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    //metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
    ],
    authors: [
        {
            name: "Rey Wijaya",
            url: "https://linkedin.com/in/reywjaya",
        },
    ],
    creator: "shadcn",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@shadcn",
    },
    // icons: {
    //     icon: "/favicon.ico",
    //     shortcut: "/favicon-16x16.png",
    //     apple: "/apple-touch-icon.png",
    // },
    manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
    themeColor: META_THEME_COLORS.light,
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/app-icon.png" sizes="16x16"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
                    }}
                />
            </head>
            <body
                className={cn(
                    "min-h-svh bg-background font-sans antialiased",
                    fontSans.variable,
                    fontMono.variable
                )}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                enableColorScheme
            >
                <div vaul-drawer-wrapper="">
                    <div className="relative flex min-h-svh flex-col bg-background">
                        {children}
                    </div>
                </div>
                <ThemeSwitcher />
                {/*<TailwindIndicator />*/}
                {/*<Analytics />*/}
                {/*<NewYorkToaster />*/}
                {/*<DefaultToaster />*/}
                {/*<NewYorkSonner />*/}
            </ThemeProvider>
            </body>
            </html>
        </>
    )
}