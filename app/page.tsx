"use client";

import Image from "next/image";
import Head from "next/head";
import { Star, MapPin, Heart, Mail, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRef } from "react";
import PostcodeDistanceChecker from "@/components/postcode-distance-checker";

export default function Component() {
  const [scrollY, setScrollY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Head>
        <title>Sugar Blooms Cupcake Bakery | London</title>
        <meta
          name="description"
          content="Sugar Blooms is a London-based bakery specializing in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic."
        />
        <meta
          name="keywords"
          content="London cupcakes, bakery, handcrafted cupcakes, custom cupcakes, Sugar Blooms, order cupcakes online, sweet treats"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Sugar Blooms",
              image: "https://sugarblooms.co.uk/sb-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressCountry: "UK",
              },
              url: "https://sugarblooms.co.uk",
              description:
                "Handcrafted cupcakes and sweet treats made with love in London.",
            }),
          }}
        />
      </Head>
      <header>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 relative pt-32 overflow-hidden"
        >
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div
                className="transform transition-all duration-700 ease-out"
                style={{ transform: `translateY(${scrollY * -0.3}px)` }}
              >
                <div className="mb-6">
                  <span className="inline-block text-sm text-pink-500 font-medium tracking-wider uppercase mb-4 opacity-80">
                    cupcake bakery
                  </span>
                </div>

                <h1 className="text-7xl md:text-9xl font-light text-pink-600 mb-4 font-serif leading-none tracking-tight">
                  Sugar Blooms
                </h1>

                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                  <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                </div>

                <p className="text-xl md:text-xl text-pink-700/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                  delicate cupcakes crafted with intention, decorated with
                  dreams
                </p>
                {/* Opening sign for September 1st, 2025 with hover text change */}
                <div
                  className="inline-block bg-yellow-100 border-2 border-yellow-400 rounded-xl px-6 py-3 mb-8 shadow-lg animate-pulse cursor-pointer"
                  tabIndex={0}
                  onMouseEnter={() => setShowPopup(true)}
                  onMouseLeave={() => setShowPopup(false)}
                  onFocus={() => setShowPopup(true)}
                  onBlur={() => setShowPopup(false)}
                >
                  <span className="text-lg font-bold text-yellow-700 tracking-wide">
                    {showPopup
                      ? "🎉 20% off for your first order!"
                      : "Grand Opening: September 1st, 2025!"}
                  </span>
                </div>
              </div>

              <div
                className="transform transition-all duration-700 ease-out mb-16"
                style={{ transform: `translateY(${scrollY * -0.2}px)` }}
              >
                <Button
                  size="lg"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                  asChild
                >
                  <a href="/contact">how to order</a>
                </Button>
              </div>

              <div
                className="relative transform transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${scrollY * -0.1}px) scale(${Math.max(
                    0.8,
                    1 - scrollY * 0.0003
                  )})`,
                  opacity: Math.max(0.3, 1 - scrollY * 0.001),
                }}
              >
                <div className="relative inline-block">
                  <Image
                    src="/cupcakes-box.jpeg"
                    alt="Handcrafted Sugar Blooms cupcakes in a box, London bakery"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent" />
                </div>

                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-90">
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-50">
            <div className="flex flex-col items-center gap-2 text-pink-400">
              <span className="text-xs font-light tracking-wider">scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-pink-400 to-transparent" />
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 relative"
          aria-labelledby="about-title"
        >
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
                <h1
                  id="about-title"
                  className="text-4xl md:text-5xl font-bold text-pink-600 font-serif"
                >
                  About Sugar Blooms
                </h1>
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center shadow-xl animate-bounce z-10">
                    <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center shadow-xl animate-pulse z-10">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <Image
                    src="/baking.png"
                    alt="Anime style illustration of a baker decorating cupcakes, Sugar Blooms London"
                    width={400}
                    height={400}
                    className="rounded-3xl shadow-2xl border-4 border-white mx-auto relative z-0"
                  />
                </div>
                <div className="text-left space-y-6">
                  <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                    <h4 className="text-2xl font-bold text-pink-600 mb-4 font-serif">
                      our story
                    </h4>
                    <p className="text-lg text-pink-700 leading-relaxed">
                      what began as a simple hobby in my cozy london kitchen
                      quickly became a passion for creating joy, one cupcake at
                      a time. every swirl of buttercream and delicate bow is
                      placed with intention and love.
                    </p>
                  </div>
                  <div className="bg-rose-50 rounded-2xl p-6 border-2 border-rose-200">
                    <h4 className="text-2xl font-bold text-rose-600 mb-4 font-serif">
                      our mission
                    </h4>
                    <p className="text-lg text-rose-700 leading-relaxed">
                      to turn everyday moments into celebrations and make your
                      day a little brighter, a lot sweeter. every order is
                      crafted start to finish by one pair of hands.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 justify-center">
                    <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                    <span className="text-pink-600 font-medium">
                      made with love
                    </span>
                    <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
