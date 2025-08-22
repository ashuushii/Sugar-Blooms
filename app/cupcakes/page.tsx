"use client";

import Image from "next/image";
import { Star, Heart, Sparkles, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CupcakesPage() {
  const cupcakeCategories = [
    {
      title: "Sweet Selection:",
      description: "our most popular cupcakes, loved by all",
      cupcakes: [
        {
          name: "Bow Tie Elegance",
          description:
            "Vanilla cupcake with smooth buttercream and handcrafted pink fondant bow",
          price: "£12 for 4 | £15 for 6 | £24 for 12",
          image: "/cupcakes-bows.jpeg",
          popular: true,
          flavors: ["vanilla"],
        },
        {
          name: "Rosé Swirl",
          description:
            "Delicate vanilla cupcake with rose pink buttercream swirls and pearl decorations",
          price: "£12 for 4 | £15 for 6 | £24 for 12",
          image: "/cupcakes-roses.jpeg",
          loved: true,
          flavors: ["vanilla"],
        },
        {
          name: "Custom Design",
          description:
            "Cupcakes with your custom buttercream design & decorations",
          price: "£16 for 4 | £21 for 6 | £36 for 12",
          image: "/vanillacupcakes.jpeg",
          flavors: ["chocolate", "vanilla", "strawberry"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="py-16 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold text-pink-600 font-serif">
                Our Cupcakes
              </h1>
              <Sparkles className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-pink-700/80 mb-8 font-light leading-relaxed">
              Each cupcake is handcrafted with love, premium ingredients, and a
              signature feminine touch. Pretty pink designs that are as elegant
              as they are delicious.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
              <span className="text-pink-500 text-sm font-medium">
                Made Fresh Daily in Our Home Kitchen
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        {cupcakeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-600 font-serif mb-4">
                {category.title}
              </h2>
              <p className="text-pink-500 italic mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.cupcakes.map((cupcake, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-3 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-3 relative overflow-hidden"
                >
                  {cupcake.popular && (
                    <div className="absolute bottom-64 left-4 z-10">
                      <Badge className="bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  {cupcake.loved && (
                    <div className="absolute bottom-64 left-4 z-10">
                      <Badge className="bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 mr-1 fill-white" />
                        Loved
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
                      <div className="absolute top-3 right-3 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-colors">
                        {cupcake.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-pink-600 mb-2 font-serif">
                        {cupcake.name}
                      </h3>
                      <p className="text-pink-700 text-sm mb-4 leading-relaxed">
                        {cupcake.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cupcake.flavors.map((flavor, flavorIndex) => (
                          <span
                            key={flavorIndex}
                            className="text-xs bg-pink-100 text-pink-600 px-3 py-1.5 rounded-full border border-pink-200 font-medium hover:bg-pink-200 transition-colors"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full py-3 shadow-lg transform hover:scale-105 transition-all"
                        asChild
                      >
                        <a
                          href={`https://wa.me/447907169798?text=Hi! I'd like to order ${cupcake.name} cupcakes.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order Now
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
          <h3 className="text-2xl font-bold text-pink-600 font-serif mb-4">
            Custom Orders
          </h3>
          <p className="text-pink-700 mb-6 leading-relaxed">
            Have something special in mind? We love creating bespoke cupcakes
            for your celebrations!
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
          </div>
          <Button
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition-all"
            asChild
          >
            <a
              href="https://wa.me/447907169798"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>
          </Button>
        </div>

        {/* Allergies Information Section */}
        <div className="mt-20 text-center bg-white rounded-3xl p-8 border-2 border-pink-200 shadow-lg">
          <h3 className="text-2xl font-bold text-pink-600 font-serif mb-4">
            Allergies Information
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
            <span className="text-pink-500 text-sm font-medium">Important Information</span>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-pink-700 mb-6 leading-relaxed">
              Our cupcakes are made in a kitchen that handles the following allergens:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                "Eggs",
                "Milk",
                "Wheat (Gluten)",
                "Nuts",
                "Soy",
                "Food Coloring"
              ].map((allergen, index) => (
                <div key={index} className="bg-pink-50/50 p-3 rounded-xl border border-pink-100">
                  <p className="text-pink-700 font-medium">{allergen}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 text-left">
              <p className="text-pink-700 text-sm leading-relaxed">
                <span className="font-semibold">⚠️ Cross-contamination:</span> While we take every precaution to prevent cross-contamination, 
                our products are made in a kitchen that handles these allergens.
              </p>
              <p className="text-pink-700 text-sm leading-relaxed">
                <span className="font-semibold">📝 Special Requirements:</span> Please inform us of any allergies when placing your order. 
                We'll do our best to accommodate your needs.
              </p>
              <p className="text-pink-700 text-sm leading-relaxed">
                <span className="font-semibold">🔍 Ingredients:</span> A full list of ingredients is available upon request. 
                Don't hesitate to ask if you have any questions about specific ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
