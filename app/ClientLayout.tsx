"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Menu, X, Instagram, Search } from "lucide-react";
import { BowBackground } from "@/components/BowBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SearchOverlay } from "@/components/ui/search-overlay";
import { useState, useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close menu on any scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > window.innerHeight * 0.25
      ) {
        // Scrolling down and past 25% of viewport height
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <style>
          {`
            * {
              -webkit-user-select: none;
              -ms-user-select: none;
              user-select: none;
              -webkit-touch-callout: none;
            }
            img {
              -webkit-user-drag: none;
              -khtml-user-drag: none;
              -moz-user-drag: none;
              -o-user-drag: none;
              user-drag: none;
              pointer-events: none;
            }
            a, button, input, .clickable {
              user-select: none !important;
              -webkit-user-select: none !important;
              -webkit-touch-callout: none !important;
              cursor: pointer !important;
            }
          `}
        </style>
      </head>
      <body
        className={inter.className}
        onContextMenu={(e) => e.preventDefault()}
      >
        <BowBackground />
        <div className="min-h-screen relative z-10">
          {/* Navigation */}
          <header
            className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
              isVisible ? "top-0 opacity-100" : "-top-24 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white text-center py-1 text-sm font-medium">
              Grand Opening: September 1st, 2025 ｜ 20% off first orders!
            </div>
            <nav className="bg-white border-b border-gray-200 px-2 md:px-10 py-1 shadow-sm relative">
              <div className="flex items-center relative w-full max-w-7xl mx-auto">
                <button
                  ref={menuButtonRef}
                  onClick={toggleMenu}
                  className="absolute left-0 p-2 md:p-3 -ml-1 text-pink-600 hover:text-pink-800 transition-colors rounded-full hover:bg-pink-50"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 md:w-7 md:h-7" />
                  ) : (
                    <Menu className="w-5 h-5 md:w-7 md:h-7" />
                  )}
                </button>
                <div className="flex items-center justify-center w-full">
                  <a href="/" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/sugarbloomsbakery.png"
                      alt="Sugar Blooms Logo"
                      width={270}
                      height={270}
                      className="py-1 w-[270px]"
                    />
                  </a>
                </div>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="absolute right-0 p-2 md:p-3 -mr-1 text-pink-600 hover:text-pink-800 transition-colors rounded-full hover:bg-pink-50"
                >
                  <Search className="w-5 h-5 md:w-7 md:h-7" />
                </button>
              </div>

              {/* Dropdown Menu */}
              <div
                ref={menuRef}
                className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-sm overflow-hidden transform transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div
                  className={`flex flex-col items-center ${
                    isMenuOpen ? "animate-[slideDown_0.2s_ease-out]" : ""
                  }`}
                >
                  <a
                    href="/"
                    className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/cupcakes"
                    className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cupcakes
                  </a>
                  <a
                    href="/about"
                    className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="/recipes"
                    className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Recipes
                  </a>
                  <a
                    href="/contact"
                    className="w-full text-center px-6 py-3 text-pink-600 hover:text-pink-800 hover:bg-pink-50 font-medium transition-colors"
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
            </nav>
          </header>
          {children}
          <footer className="bg-pink-100/90 backdrop-blur-sm py-12 px-4 border-t-2 border-pink-200">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left Section */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-pink-600 mb-4">
                    Sugar Blooms
                  </h3>
                  <p className="text-pink-700 text-lg mb-4">
                    See our socials below, we'd love if you could leave a
                    review!
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
                  <h3 className="text-2xl font-serif font-bold text-pink-600 mb-4">
                    Quick Links
                  </h3>
                  <nav className="flex flex-col space-y-3">
                    <a
                      href="/"
                      className="text-pink-700 hover:text-pink-800 transition-colors text-lg"
                    >
                      Home
                    </a>
                    <a
                      href="/cupcakes"
                      className="text-pink-700 hover:text-pink-800 transition-colors text-lg"
                    >
                      Cupcakes
                    </a>
                    <a
                      href="/about"
                      className="text-pink-700 hover:text-pink-800 transition-colors text-lg"
                    >
                      About
                    </a>
                    <a
                      href="/recipes"
                      className="text-pink-700 hover:text-pink-800 transition-colors text-lg"
                    >
                      Recipes
                    </a>
                    <a
                      href="/contact"
                      className="text-pink-700 hover:text-pink-800 transition-colors text-lg"
                    >
                      Contact
                    </a>
                    <a
                      href="/faq"
                      className="text-pink-700 hover:text-pink-800 transition-colors text-lg"
                    >
                      FAQs + T&Cs
                    </a>
                  </nav>
                </div>
              </div>

              {/* Newsletter Section */}
              {/* <div className="border-t border-pink-200 pt-8 pb-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-pink-600 mb-4">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-pink-700 text-lg mb-4">
                    Stay updated with our weekly discount codes, seasonal specials, and exclusive offers.
                  </p>
                  <div className="space-y-4">
                    <form>
                      <div className="flex gap-2 max-w-md">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-2 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none text-pink-700 placeholder:text-pink-300"
                        />
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}

              {/* Bottom Section - Existing Content */}
              <div className="border-t border-pink-200 pt-8 text-center">
                <p className="text-pink-600 mb-4 text-lg font-medium">
                  Made with Love and Lots of Sugar
                </p>
                <p className="text-pink-700 text-lg">© 2025 Sugar Blooms Co.</p>
              </div>
            </div>
          </footer>
          <SpeedInsights />
          <SearchOverlay
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      </body>
    </html>
  );
}
