"use client"

import Image from "next/image"
import { Heart, Star, Sparkles, Coffee, Cake, Crown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-pink-600 font-serif">about us</h1>
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
          </div>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            where dreams meet frosting and every bite tells a story
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center shadow-xl animate-bounce z-10">
              <Star className="w-10 h-10 text-yellow-600 fill-yellow-600" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center shadow-xl animate-pulse z-10">
              <Crown className="w-8 h-8 text-pink-600" />
            </div>
            <Image
              src="/baking.png"
              alt="anime style illustration of a baker decorating cupcakes"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl border-4 border-white relative z-0"
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
              <h2 className="text-3xl font-bold text-pink-600 mb-4 font-serif">our story</h2>
              <p className="text-lg text-pink-700 leading-relaxed mb-4">
                what began as a simple hobby in my cozy london kitchen quickly became a passion for creating joy, one cupcake at a time.
              </p>
              <p className="text-lg text-pink-700 leading-relaxed">
                every swirl of buttercream, every delicate bow, and every sprinkle is placed with intention and love.
              </p>
            </div>

            <div className="bg-rose-50 rounded-2xl p-6 border-2 border-rose-200">
              <h3 className="text-2xl font-bold text-rose-600 mb-4 font-serif">our mission</h3>
              <p className="text-lg text-rose-700 leading-relaxed">
                to turn everyday moments into celebrations and make your day a little brighter, a lot sweeter.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Cake className="w-8 h-8 text-pink-500" />,
              title: "handcrafted with love",
              description: "every order is prepared from scratch by one pair of hands with care and attention to detail"
            },
            {
              icon: <Sparkles className="w-8 h-8 text-pink-500" />,
              title: "premium ingredients",
              description: "we use only the finest ingredients to ensure each bite is as delicious as it is beautiful"
            },
            {
              icon: <Coffee className="w-8 h-8 text-pink-500" />,
              title: "made fresh daily",
              description: "baked fresh in our london kitchen every morning for maximum flavor and freshness"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-600 mb-3 font-serif">{feature.title}</h3>
                <p className="text-pink-700 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl p-12 border-3 border-pink-200 shadow-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <h2 className="text-4xl font-bold text-pink-600 font-serif">why sugar blooms?</h2>
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif flex items-center gap-2">
                  <Heart className="w-6 h-6 fill-pink-600" />
                  our values
                </h3>
                <ul className="space-y-3 text-pink-700">
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>quality ingredients sourced with care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>attention to every little detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>creating moments of pure joy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span>supporting your celebrations big and small</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif flex items-center gap-2">
                  <Crown className="w-6 h-6 text-pink-600" />
                  what makes us special
                </h3>
                <p className="text-pink-700 leading-relaxed mb-4">
                  in a world of mass production, we believe in the magic of the handmade. each cupcake is a tiny work of art, crafted with the same care you'd put into a gift for someone you love.
                </p>
                <p className="text-pink-700 leading-relaxed">
                  because that's exactly what it is - a little gift of sweetness to brighten your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}