"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Menu, X, Instagram } from "lucide-react";
import { BowBackground } from "@/components/BowBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <html lang="en">
      <head>
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <BowBackground />
        <div className="min-h-screen relative z-10">
          {/* Navigation */}
          <header className={`fixed left-6 right-6 z-50 transition-all duration-300 ${
              isVisible ? 'top-8 opacity-100' : '-top-24 opacity-0'
            }`}>
            <nav className="bg-white/90 backdrop-blur-md border-2 border-pink-200 rounded-full px-10 py-1 shadow-2xl relative max-w-7xl mx-auto">
              <div className="flex items-center justify-between relative w-full">
                <button
                  onClick={toggleMenu}
                  className="p-2 text-pink-600 hover:text-pink-800 transition-colors rounded-full hover:bg-pink-50"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
                <div className="flex items-center justify-center flex-1">
                  <a href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/sugarblooms.png"
                      alt="Sugar Blooms Logo"
                      width={400}
                      height={400}
                      className="py-4"
                    />
                  </a>
                </div>
                <div className="w-10" /> {/* Spacer */}
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border-2 border-pink-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="py-2 flex flex-col items-center">
                    <a
                      href="/"
                      className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="/cupcakes"
                      className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cupcakes
                    </a>
                    <a
                      href="/about"
                      className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                    <a
                      href="/recipes"
                      className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Recipes
                    </a>
                    <a
                      href="/contact"
                      className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                    <div className="w-full mt-2 pb-2">
                      <div className="flex justify-center space-x-4">
                        <a
                          href="https://instagram.com/sugarbloomsco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-pink-600 hover:text-pink-800 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="https://tiktok.com/@sugarbloomsco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-pink-600 hover:text-pink-800 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61578928634971"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-pink-600 hover:text-pink-800 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </header>
          {children}
          <footer className="bg-pink-100/90 backdrop-blur-sm py-12 px-4 border-t-2 border-pink-200">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left Section */}
                <div className="flex flex-col">
                  <h3 className="text-3xl font-serif font-bold text-pink-600 mb-4">Sugar Blooms</h3>
                  <p className="text-pink-700 text-lg mb-4">
                    See our socials below, we'd love if you could leave a review!
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/sugarbloomsco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://tiktok.com/@sugarbloomsco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61578928634971"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Section - Quick Links */}
                <div>
                  <h3 className="text-3xl font-serif font-bold text-pink-600 mb-4">Quick Links</h3>
                  <nav className="flex flex-col space-y-3">
                    <a href="/" className="text-pink-700 hover:text-pink-800 transition-colors text-lg">Home</a>
                    <a href="/cupcakes" className="text-pink-700 hover:text-pink-800 transition-colors text-lg">Cupcakes</a>
                    <a href="/about" className="text-pink-700 hover:text-pink-800 transition-colors text-lg">About</a>
                    <a href="/recipes" className="text-pink-700 hover:text-pink-800 transition-colors text-lg">Recipes</a>
                    <a href="/contact" className="text-pink-700 hover:text-pink-800 transition-colors text-lg">Contact</a>
                  </nav>
                </div>
              </div>

              {/* Bottom Section - Existing Content */}
              <div className="border-t border-pink-200 pt-8 text-center">
                <p className="text-pink-600 mb-4 text-xl font-medium">
                  Made with Love and Lots of Sugar
                </p>
                <p className="text-pink-700 text-base">
                  © 2025 Sugar Blooms Co.
                </p>
              </div>
            </div>
          </footer>
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
