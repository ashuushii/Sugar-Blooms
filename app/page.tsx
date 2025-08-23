"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import "../styles/welcome-animation.css";
import { Star, Heart, Sparkles, Hand, Coffee, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PostcodeDistanceChecker from "@/components/postcode-distance-checker";

function MobileImageSlider() {
  const [currentPair, setCurrentPair] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lastInteraction, setLastInteraction] = useState<number | null>(null);
  const totalImages = 2; // Total number of images
  const totalPairs = totalImages;
  const normalInterval = 5000; // Normal slide interval
  const extendedInterval = 10000; // Extended interval after user interaction

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Only run auto-switching if mobile and component is mounted
    let mounted = true;

    if (!isMobile) return;

    const timer = setInterval(() => {
      if (mounted) {
        // Check if we need to honor the extended pause
        const now = Date.now();
        if (lastInteraction && now - lastInteraction < extendedInterval) {
          return; // Skip this interval
        }
        setCurrentPair((prev) => (prev + 1) % totalPairs);
      }
    }, normalInterval);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [isMobile, totalPairs, lastInteraction]);

  const handleNext = () => {
    setCurrentPair((prev) => (prev + 1) % totalPairs);
    setLastInteraction(Date.now());
  };

  const handlePrev = () => {
    setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
    setLastInteraction(Date.now());
  };

  return (
    <>
      {/* Desktop Grid */}
      <div className="hidden md:block relative">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={`/carousel${index}.png`}
                  alt={`Sugar Blooms cupcakes showcase ${index}`}
                  fill
                  priority={index === 1}
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slideshow */}
      <div className="md:hidden relative max-w-[95vw] mx-auto">
        {!isLoaded && (
          <div className="absolute inset-0 bg-pink-50 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <div
          className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl cursor-grab active:cursor-grabbing"
          onTouchStart={(e) => {
            const touch = e.touches[0];
            const startX = touch.clientX;

            const handleTouchMove = (e: TouchEvent) => {
              const touch = e.touches[0];
              const diffX = touch.clientX - startX;

              if (Math.abs(diffX) > 50) {
                // Threshold for swipe
                if (diffX > 0) {
                  handlePrev();
                } else {
                  handleNext();
                }
                document.removeEventListener("touchmove", handleTouchMove);
                document.removeEventListener("touchend", handleTouchEnd);
              }
            };

            const handleTouchEnd = () => {
              document.removeEventListener("touchmove", handleTouchMove);
              document.removeEventListener("touchend", handleTouchEnd);
            };

            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleTouchEnd);
          }}
        >
          {[1, 2].map((index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentPair === index - 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/carousel${index}.png`}
                alt={`Sugar Blooms cupcakes showcase ${index}`}
                fill
                priority={index === 1}
                loading={index === 1 ? "eager" : "lazy"}
                onLoad={() => index === 1 && setIsLoaded(true)}
                className={`object-cover transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full">
          {[0, 1].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPair === index ? "bg-pink-500 w-4" : "bg-pink-200"
              }`}
              onClick={() => {
                setCurrentPair(index);
                setLastInteraction(Date.now());
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

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
          className="min-h-screen flex items-center justify-center px-2 md:px-4 relative pt-40 md:pt-48 overflow-hidden"
        >
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Welcome Sign */}
              <div className="pt-0 mb-8">
                <h1
                  className="text-4xl md:text-5xl font-extrabold text-pink-600 font-serif tracking-wide animate-welcome"
                  
                >
                  Welcome to Sugar Blooms!
                </h1>
                <p className="text-base md:text-lg text-pink-700/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto pt-8">
                  Freshly baked happiness, just for you
                </p>
              </div>
              <div
                className="transform transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                  opacity: Math.max(0.3, 1 - scrollY * 0.001),
                }}
              >
                <MobileImageSlider />
              </div>
              <div className="py-6 md:py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
                  {[
                    {
                      icon: <Hand className="w-8 h-8 text-pink-400" />,
                      title: "Handcrafted with Love",
                      description:
                        "Every order is prepared from scratch by one pair of hands with care and attention to detail",
                    },
                    {
                      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
                      title: "Quality Ingredients",
                      description:
                        "Made with British-sourced ingredients, organic British flour, and free-range eggs for the perfect taste",
                    },
                    {
                      icon: <Check className="w-8 h-8 text-pink-400" />,
                      title: "Made Fresh Daily",
                      description:
                        "Baked to order, in our kitchen for maximum flavor and freshness",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-8 h-8 text-pink-400"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      title: "North London Based",
                      description:
                        "Collection available from Colindale, Barnet NW9",
                    },
                  ].map((feature, index) => (
                    <Card
                      key={index}
                      className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                    >
                      <CardContent className="p-2 md:p-4 lg:p-8 text-center">
                        <div className="bg-pink-50 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                          {feature.icon}
                        </div>
                        <h3 className="font-bold text-pink-600 mb-1 md:mb-2 lg:mb-3 font-serif text-sm md:text-base">
                          {feature.title}
                        </h3>
                        <p className="text-pink-700 leading-relaxed text-xs md:text-sm lg:text-base">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 mb-4">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                    <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                  </div>
                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                      asChild
                    >
                      <a href="/contact">How to Order</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Customer Reviews Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-pink-50/50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-pink-600 mb-8 font-serif">
              Customer Reviews
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1" />
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "Absolutely loved these cupcakes! Super fresh, fluffy, and
                  full of flavor. You can tell a lot of care went into baking
                  them. Definitely coming back for more."
                </p>
                <p className="text-pink-600 font-medium">- Josh H.</p>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
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
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "The cupcakes had the cutest ribbon designs, and the icing was
                  just the right kind of sweet. The cake stayed super soft even
                  after hours! I'm definitely ordering more in the future!"
                </p>
                <p className="text-pink-600 font-medium">- Elvina L.</p>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-pink-700 mb-6 italic">
                  "I treated myself to these gorgeous cupcakes and they exceeded
                  all expectations! The rose flavoring is so unique and
                  delicate. Pure perfection!"
                </p>
                <p className="text-pink-600 font-medium">- Charlotte W.</p>
              </Card>
            </div>

            <div className="mt-12 flex items-center justify-center">
              <a
                href="https://g.page/r/CRNbbUdMowAzEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 font-medium transition-colors hover:underline underline-offset-4 flex items-center gap-2"
              >
                Leave us a review on Google
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
