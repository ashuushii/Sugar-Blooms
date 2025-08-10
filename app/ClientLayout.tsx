"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Head from "next/head";
import { ExternalLink, Menu, X } from "lucide-react";
import { BowBackground } from "@/components/BowBackground";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/sugar.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <BowBackground />
        <div className="min-h-screen relative z-10">
          {/* Desktop Navigation */}
          <header className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="bg-white/90 backdrop-blur-md border-2 border-pink-200 rounded-full px-8 py-3 shadow-2xl">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo.png"
                    alt="Sugar Blooms Bakery Logo"
                    width={40}
                    height={40}
                    className="rounded-full shadow-md"
                  />
                  <h1 className="text-sm font-bold text-pink-600 font-serif whitespace-nowrap">
                    Sugar Blooms
                  </h1>
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href="/"
                    className="text-pink-600 hover:text-pink-800 font-medium transition-colors text-sm px-3 py-1 rounded-full hover:bg-pink-50"
                  >
                    Home
                  </a>
                  <a
                    href="/cupcakes"
                    className="text-pink-600 hover:text-pink-800 font-medium transition-colors text-sm px-3 py-1 rounded-full hover:bg-pink-50"
                  >
                    Cupcakes
                  </a>
                  <a
                    href="/contact"
                    className="text-pink-600 hover:text-pink-800 font-medium transition-colors text-sm px-3 py-1 rounded-full hover:bg-pink-50"
                  >
                    Contact
                  </a>
                  <a
                    href="/recipes"
                    className="text-pink-600 hover:text-pink-800 font-medium transition-colors text-sm px-3 py-1 rounded-full hover:bg-pink-50"
                  >
                    Recipes
                  </a>
                </div>
              </div>
            </nav>
          </header>

          {/* Mobile Navigation */}
          <header className="md:hidden fixed top-4 left-4 right-4 z-50">
            <nav className="bg-white/90 backdrop-blur-md border-2 border-pink-200 rounded-full px-4 py-4 shadow-2xl relative">
              <div className="flex items-center justify-center relative">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo.png"
                    alt="Sugar Blooms Bakery Logo"
                    width={40}
                    height={40}
                    className="rounded-full shadow-md"
                  />
                  <h1 className="text-base font-bold text-pink-600 font-serif whitespace-nowrap">
                    Sugar Blooms
                  </h1>
                </div>

                <button
                  onClick={toggleMenu}
                  className="absolute right-0 p-2 text-pink-600 hover:text-pink-800 transition-colors rounded-full hover:bg-pink-50"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Mobile Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border-2 border-pink-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="py-2">
                    <a
                      href="/"
                      className="block px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="/cupcakes"
                      className="block px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cupcakes
                    </a>
                    <a
                      href="/contact"
                      className="block px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                    <a
                      href="/recipes"
                      className="block px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Recipes
                    </a>
                  </div>
                </div>
              )}
            </nav>
          </header>
          {children}
          <footer className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-pink-300/60"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('/bow.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "100px",
              }}
            />
            <div className="container mx-auto text-center relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Image
                  src="/logo.png"
                  alt="Sugar Blooms Bakery Logo"
                  width={80}
                  height={80}
                  className="rounded-full bg-white shadow-lg"
                />
                <h4 className="text-3xl font-bold font-serif text-pink-700">
                  Sugar Blooms
                </h4>
              </div>
              <p className="text-pink-600 mb-6 text-lg font-medium">
                {"made with love and lots of sugar"}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-6 max-w-xs mx-auto"></div>
              <p className="text-pink-500 text-sm">
                {"© 2025 sugar blooms co."}
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
