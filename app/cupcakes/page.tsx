"use client"

import Image from "next/image"
import { Star, Heart, Sparkles, Cherry } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CupcakesPage() {
  const cupcakeCategories = [
    {
      title: "Signature Collection",
      description: "our most beloved creations",
      cupcakes: [
        {
          name: "Bow Tie Elegance",
          description: "vanilla cupcake with smooth buttercream and handcrafted pink fondant bow",
          price: "£12 for 6 | £18 for 12",
          image: "/cupcakes-bows.jpeg",
          popular: true,
          flavors: ["vanilla", "strawberry"]
        },
        {
          name: "Rose Garden Dreams",
          description: "delicate vanilla cupcake with pink rose buttercream swirls and pearl decorations",
          price: "£12 for 6 | £18 for 12",
          image: "/cupcakes-roses.jpeg",
          popular: false,
          flavors: ["vanilla", "rose"]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-pink-600 font-serif">our cupcakes</h1>
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            each little cake is handcrafted with love, premium ingredients, and a sprinkle of magic
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="text-pink-500 text-sm font-medium">made fresh daily in our london kitchen</span>
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          </div>
        </div>

        {cupcakeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-600 font-serif mb-2">{category.title}</h2>
              <p className="text-pink-500 italic">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.cupcakes.map((cupcake, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-3 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-3 relative overflow-hidden"
                >
                  {cupcake.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        popular
                      </Badge>
                    </div>
                  )}

                  
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={cupcake.image}
                        alt={cupcake.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-50/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                      <div className="absolute top-3 right-3 bg-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {cupcake.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-pink-600 mb-2 font-serif">{cupcake.name}</h3>
                      <p className="text-pink-700 text-sm mb-4 leading-relaxed">{cupcake.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cupcake.flavors.map((flavor, flavorIndex) => (
                          <span 
                            key={flavorIndex}
                            className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full border border-pink-200"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full py-3 shadow-lg transform hover:scale-105 transition-all" asChild>
                        <a href="https://wa.me/447907169798" target="_blank" rel="noopener noreferrer">
                          order these cuties
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-20 text-center bg-pink-50 rounded-3xl p-8 border-2 border-pink-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            <h3 className="text-2xl font-bold text-pink-600 font-serif">custom orders</h3>
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
          </div>
          <p className="text-pink-700 mb-6 leading-relaxed">
            have something special in mind? we love creating bespoke cupcakes for your celebrations!
          </p>
          <Button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all" asChild>
            <a href="https://wa.me/447907169798" target="_blank" rel="noopener noreferrer">
              discuss custom order
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}