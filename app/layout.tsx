import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sugarblooms.co.uk"),
  title:
    "Sugar Blooms | Handcrafted Cupcakes London – Boutique Pink Cupcake Bakery",
  description:
    "Sugar Blooms is a London-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
  keywords: [
    "London cupcakes",
    "handcrafted cupcakes",
    "bakery London",
    "custom cupcakes",
    "Sugar Blooms",
    "order cupcakes online",
    "birthday cupcakes",
    "wedding cupcakes",
    "cupcake delivery London",
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
        url: "/sb-logo.png",
        width: 512,
        height: 512,
        alt: "Sugar Blooms Bakery Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sugar Blooms | Handcrafted Cupcakes London – Boutique Pink Cupcake Bakery",
    description:
      "Sugar Blooms is a London-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
    images: ["/sb-logo.png"],
  },
  icons: {
    icon: [
      { url: "/sb-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/sb-logo.png", sizes: "16x16", type: "image/png" },
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
