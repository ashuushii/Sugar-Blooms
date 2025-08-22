"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Star, Heart, Sparkles, Hand, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PostcodeDistanceChecker from "@/components/postcode-distance-checker";

function MobileImageSlider() {
  const [currentPair, setCurrentPair] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalPairs = Math.ceil(3 / 2);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only run auto-switching if mobile
    if (!isMobile) return;

    const timer = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % totalPairs);
    }, 3000);

    return () => clearInterval(timer);
  }, [isMobile, totalPairs]);

  const handleNext = () => {
    setCurrentPair((prev) => (prev + 1) % totalPairs);
  };

  const handlePrev = () => {
    setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  return (
    <>
      {/* Desktop Grid */}
      <div className="hidden md:block relative">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[1, 2].map((index) => (
            <div key={index} className="group relative transform transition-all duration-300 hover:scale-105">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={`/carousel${index + currentPair * 2}.png`}
                  alt={`Sugar Blooms cupcakes showcase ${index + currentPair * 2}`}
                  fill
                  priority={index === 1}
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 backdrop-blur-sm border-2 border-pink-200 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
          aria-label="Previous images"
        >
          <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 backdrop-blur-sm border-2 border-pink-200 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
          aria-label="Next images"
        >
          <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Slideshow */}
      <div className="md:hidden relative max-w-md mx-auto">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                (index - 1) === currentPair ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={`/carousel${index}.png`}
                alt={`Sugar Blooms cupcakes showcase ${index}`}
                fill
                priority={index === 1}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPair === index ? "bg-pink-500 w-4" : "bg-pink-200"
              }`}
              onClick={() => setCurrentPair(index)}
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
          className="min-h-screen flex items-center justify-center px-4 relative pt-48 overflow-hidden"
        >
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 transform transition-all duration-700 ease-out">
                <div
                  className="inline-block bg-yellow-100 border-2 border-yellow-400 rounded-xl px-12 py-3 shadow-lg animate-pulse cursor-pointer w-[500px]"
                  tabIndex={0}
                  onMouseEnter={() => setShowPopup(true)}
                  onMouseLeave={() => setShowPopup(false)}
                  onFocus={() => setShowPopup(true)}
                  onBlur={() => setShowPopup(false)}
                >
                  <span className="text-lg font-bold text-yellow-700 tracking-wide inline-block w-full">
                    {showPopup
                      ? "🎉 20% off for your first order!"
                      : "Grand Opening: September 1st, 2025!"}
                  </span>
                </div>
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

              <div className="py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                  {[
                    {
                      icon: <Hand className="w-8 h-8 text-pink-400" />,
                      title: "Handcrafted with Love",
                      description: "Every order is prepared from scratch by one pair of hands with care and attention to detail"
                    },
                    {
                      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
                      title: "Quality Ingredients",
                      description: "Made with British-sourced ingredients, organic British flour, and free-range eggs for the perfect taste"
                    },
                    {
                      icon: <Coffee className="w-8 h-8 text-pink-400" />,
                      title: "Made Fresh Daily",
                      description: "Baked to order, in our kitchen for maximum flavor and freshness"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-pink-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                      title: "Locally Based",
                      description: "Proudly serving our community from our North London bakery"
                    }
                  ].map((feature, index) => (
                    <Card key={index} className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                      <CardContent className="p-4 lg:p-8 text-center">
                        <div className="bg-pink-50 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          {feature.icon}
                        </div>
                        <h3 className="text-base lg:text-xl font-bold text-pink-600 mb-2 lg:mb-3 font-serif">{feature.title}</h3>
                        <p className="text-sm lg:text-base text-pink-700 leading-relaxed">{feature.description}</p>
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

                  <p className="text-xl md:text-xl text-pink-700/80 mb-6 font-light leading-relaxed max-w-2xl mx-auto text-center">
                    Delicate cupcakes crafted with intention, decorated with
                    dreams.
                  </p>

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
            <h2 className="text-4xl font-bold text-pink-600 mb-4 font-serif">Customer Reviews</h2>
            <p className="text-xl text-pink-700/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              See What Our Happy Customers Have to Say
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
              <span className="text-pink-500 text-sm font-medium">
                Sweet Reviews
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
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
