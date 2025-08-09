"use client"

import Image from "next/image"
import { Star, MapPin, Heart, Mail, Instagram, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import PostcodeDistanceChecker from "@/components/postcode-distance-checker"

export default function Component() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-32 overflow-hidden">
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div
              className="transform transition-all duration-700 ease-out"
              style={{ transform: `translateY(${scrollY * -0.3}px)` }}
            >
              <div className="mb-6">
                <span className="inline-block text-sm text-pink-500 font-medium tracking-wider uppercase mb-4 opacity-80">
                  handcrafted in london
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
              
              <p className="text-xl md:text-2xl text-pink-700/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                delicate cupcakes crafted with intention, decorated with dreams
              </p>
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
                <a href="/contact">order cupcakes</a>
              </Button>
            </div>

            <div
              className="relative transform transition-all duration-700 ease-out"
              style={{ 
                transform: `translateY(${scrollY * -0.1}px) scale(${Math.max(0.8, 1 - scrollY * 0.0003)})`,
                opacity: Math.max(0.3, 1 - scrollY * 0.001)
              }}
            >
              <div className="relative inline-block">
                <Image
                  src="/cupcakes-box.jpeg"
                  alt="handcrafted sugar blooms cupcakes"
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



      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
              <h3 className="text-4xl md:text-5xl font-bold text-pink-600 font-serif">about sugar blooms</h3>
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
                  alt="Anime style illustration of a baker decorating cupcakes"
                  width={400}
                  height={400}
                  className="rounded-3xl shadow-2xl border-4 border-white mx-auto relative z-0"
                />
              </div>
              <div className="text-left space-y-6">
                <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                  <h4 className="text-2xl font-bold text-pink-600 mb-4 font-serif">our story</h4>
                  <p className="text-lg text-pink-700 leading-relaxed">
                    what began as a simple hobby in my cozy london kitchen quickly became a passion for creating joy, one cupcake at a time. every swirl of buttercream and delicate bow is placed with intention and love.
                  </p>
                </div>
                <div className="bg-rose-50 rounded-2xl p-6 border-2 border-rose-200">
                  <h4 className="text-2xl font-bold text-rose-600 mb-4 font-serif">our mission</h4>
                  <p className="text-lg text-rose-700 leading-relaxed">
                    to turn everyday moments into celebrations and make your day a little brighter, a lot sweeter. every order is crafted start to finish by one pair of hands.
                  </p>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  <span className="text-pink-600 font-medium">made with love</span>
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
