"use client"

import Image from "next/image"
import { Heart, Star, Sparkles, Coffee, Cake, Crown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="py-16 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-[#da2877] fill-[#da2877] animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold text-[#da2877] font-serif">              About Us</h1>
              <Heart className="w-8 h-8 text-[#da2877] fill-[#da2877] animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-pink-700/80 mb-8 font-light leading-relaxed">
              Where Dreams Meet Frosting and Every Bite Tells a Story
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#ffabbf] to-transparent flex-1 max-w-20" />
              <span className="text-[#ffabbf] text-sm font-medium">
                Handcrafted with Love
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-[#ffabbf] to-transparent flex-1 max-w-20" />
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <Image
              src="/baking.png"
              alt="anime style illustration of a baker decorating cupcakes"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl border-4 border-white relative z-0"
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#ffabbf]/10 rounded-2xl p-6 border-2 border-[#ffabbf]">
              <h2 className="text-3xl font-bold text-[#ffabbf] mb-4 font-serif">              Our Story</h2>
              <p className="text-lg text-pink-700 leading-relaxed mb-4">
                What began as a simple hobby in my cozy London kitchen quickly became a passion for creating joy, one cupcake at a time.
              </p>
              <p className="text-lg text-pink-700 leading-relaxed">
                Every swirl of buttercream, every delicate bow, and every sprinkle is placed with intention and love.
              </p>
            </div>

            <div className="bg-[#ffabbf]/10 rounded-2xl p-6 border-2 border-[#ffabbf]">
              <h3 className="text-2xl font-bold text-[#ffabbf] mb-4 font-serif">              Our Mission</h3>
              <p className="text-lg text-rose-700 leading-relaxed">
                To turn everyday moments into celebrations and make your day a little brighter, a lot sweeter.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Cake className="w-8 h-8 text-[#ffabbf]" />,
              title: "Handcrafted with Love",
              description: "Every order is prepared from scratch by one pair of hands with care and attention to detail"
            },
            {
              icon: <Sparkles className="w-8 h-8 text-[#ffabbf]" />,
              title: "Premium Ingredients",
              description: "We use only the finest ingredients to ensure each bite is as delicious as it is beautiful"
            },
            {
              icon: <Coffee className="w-8 h-8 text-[#ffabbf]" />,
              title: "Made Fresh Daily",
              description: "Baked fresh in our London kitchen every morning for maximum flavor and freshness"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-2 border-[#ffabbf] rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-[#ffabbf]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#ffabbf] mb-3 font-serif">{feature.title}</h3>
                <p className="text-pink-700 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#ffabbf]/10 rounded-3xl p-12 border-3 border-[#ffabbf] shadow-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <h2 className="text-4xl font-bold text-pink-600 font-serif">              Why Sugar Blooms?</h2>
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif flex items-center gap-2">
                  <Heart className="w-6 h-6 fill-pink-600" />
                  Our Values
                </h3>
                <ul className="space-y-3 text-pink-700">
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Quality ingredients sourced with care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Attention to every little detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Creating moments of pure joy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>Supporting your celebrations big and small</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif flex items-center gap-2">
                  <Crown className="w-6 h-6 text-pink-600" />
                  What Makes Us Special
                </h3>
                <p className="text-pink-700 leading-relaxed mb-4">
                  In a world of mass production, we believe in the magic of the handmade. Each cupcake is a tiny work of art, crafted with the same care you'd put into a gift for someone you love.
                </p>
                <p className="text-pink-700 leading-relaxed">
                  Because that's exactly what it is - a little gift of sweetness to brighten your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}