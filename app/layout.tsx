import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { businessSchema, websiteSchema } from './schema';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sugarblooms.co.uk"),
  title:
    "Sugar Blooms | Handcrafted Cupcakes London – Boutique Pink Cupcake Bakery",
  description:
    "Sugar Blooms is a London-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic. Order freshly baked cupcakes for birthdays, weddings, and special occasions in London.",
  keywords: [
    "London cupcakes",
    "handcrafted cupcakes",
    "bakery London",
    "custom cupcakes London",
    "Sugar Blooms",
    "order cupcakes online London",
    "birthday cupcakes London",
    "wedding cupcakes London",
    "cupcake delivery London",
    "boutique cupcakes",
    "artisan cupcakes",
    "special occasion cupcakes",
    "best cupcakes London",
    "North London bakery",
    "custom cake orders London"
  ],
  alternates: {
    canonical: "https://sugarblooms.co.uk",
  },
  openGraph: {
    title:
      "Sugar Blooms | Handcrafted Cupcakes London – Boutique Pink Cupcake Bakery",
    description:
      "Sugar Blooms is a London-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
    url: "https://sugarblooms.co.uk",
    siteName: "Sugar Blooms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/website-banner.png",
        width: 1200,
        height: 630,
        alt: "Sugar Blooms - Handcrafted Cupcakes London",
      },
      {
        url: "/sugarblooms.png",
        width: 512,
        height: 512,
        alt: "Sugar Blooms Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sugar Blooms | Handcrafted Cupcakes London – Boutique Pink Cupcake Bakery",
    description:
      "Sugar Blooms is a London-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
    images: ["/website-banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
