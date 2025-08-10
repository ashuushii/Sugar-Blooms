import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sugar Blooms｜London",
  description: "Handcrafted cupcakes made with love, sprinkles, and a touch of magic!",
  openGraph: {
    title: "Sugar Blooms｜London",
    description: "Handcrafted cupcakes made with love, sprinkles, and a touch of magic!",
    url: "https://sugarblooms.co.uk",
    siteName: "Sugar Blooms",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugar Blooms｜London",
    description: "Handcrafted cupcakes made with love, sprinkles, and a touch of magic!"
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/manifest.json"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
