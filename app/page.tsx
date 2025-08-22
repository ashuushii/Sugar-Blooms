"use client";

import Image from "next/image";
import Head from "next/head";
import { Star, MapPin, Heart, Mail, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                  <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                </div>

                <p className="text-xl md:text-xl text-pink-700/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                  Delicate cupcakes crafted with intention, decorated with
                  dreams.
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
                  <a href="/contact">How to Order</a>
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
                  <Carousel className="w-[600px] rounded-2xl shadow-2xl">
                    <CarouselContent>
                      {[1, 2, 3].map((index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-square w-full">
                            <Image
                              src={`/carousel${index}.png`}
                              alt={`Sugar Blooms cupcakes showcase ${index}`}
                              fill
                              priority={index === 1}
                              className="rounded-2xl object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white/80 backdrop-blur-sm border-pink-200" />
                    <CarouselNext className="bg-white/80 backdrop-blur-sm border-pink-200" />
                  </Carousel>
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

      {/* Customer Reviews Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-pink-50/50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-pink-600 font-serif">Customer Reviews</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "Absolutely loved these cupcakes! Super fresh, fluffy, and full of flavor. You can tell a lot of care went into baking them. Definitely coming back for more."
                </p>
                <p className="text-pink-600 font-medium">- josh h.</p>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "Thanks for the cakes! 10/10, I will definitely order again."
                </p>
                <p className="text-pink-600 font-medium">- Shahan P.</p>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "The cupcakes had the cutest ribbon designs, and the icing was just the right kind of sweet. The cake stayed super soft even after hours! I'm definitely ordering more in the future!"
                </p>
                <p className="text-pink-600 font-medium">- Elvina L.</p>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "I treated myself to these gorgeous cupcakes and they exceeded all expectations! The rose flavoring is so unique and delicate. Pure perfection!"
                </p>
                <p className="text-pink-600 font-medium">- Charlotte W.</p>
              </Card>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-pink-600 font-medium italic">
                Join Our Happy Customers
              </span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
