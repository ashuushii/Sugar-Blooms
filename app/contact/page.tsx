"use client";

import Image from "next/image";
import {
  Mail,
  Instagram,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-pink-400 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-pink-600 font-serif">
              let's get sweet
            </h1>
            <MessageCircle className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed">
            ready to add some sweetness to your day? we'd love to hear from you!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="text-pink-500 text-sm font-medium">
              orders require 24-48 hours notice
            </span>
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white/90 backdrop-blur-sm border-3 border-pink-200 rounded-3xl shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-white text-center">
                <h2 className="text-3xl font-bold font-serif mb-2">
                  get in touch
                </h2>
                <p className="text-pink-100">
                  we're here to make your day sweeter
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl border border-pink-200">
                  <div className="bg-pink-200 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-600">email us</h3>
                    <p className="text-pink-700">contact@sugarblooms.co.uk</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl border border-pink-200">
                  <div className="bg-pink-200 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-600">location</h3>
                    <p className="text-pink-700">
                      london, uk (collection only)
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl border border-pink-200">
                  <div className="bg-pink-200 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-600">order notice</h3>
                    <p className="text-pink-700">
                      24-48 hours advance notice required
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-pink-600 mb-4 font-serif text-center">
                    follow our socials
                  </h3>
                  <div className="flex justify-center space-x-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 rounded-full shadow-lg flex items-center gap-2"
                      asChild
                    >
                      <a
                        href="https://instagram.com/sugarbloomsco"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5" />
                        {/* instagram */}
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 rounded-full shadow-lg flex items-center gap-2"
                      asChild
                    >
                      <a
                        href="https://tiktok.com/@sugarbloomsco"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                        {/* tiktok */}
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 rounded-full shadow-lg flex items-center gap-2"
                      asChild
                    >
                      <a
                        href="https://www.facebook.com/profile.php?id=61578928634971"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        {/* facebook */}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-3 border-pink-200 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  <h2 className="text-2xl font-bold text-pink-600 font-serif">
                    ready to order?
                  </h2>
                </div>
                <p className="text-pink-700 mb-6 leading-relaxed">
                  message me on whatsapp with your dream order! tell us about
                  your celebration, how many cupcakes you need, and any special
                  requests.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full py-4 shadow-lg transform hover:scale-105 transition-all text-lg"
                  asChild
                >
                  <a
                    href="https://wa.me/447907169798"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    order / enquire now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-3 border-pink-200 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                  <h2 className="text-2xl font-bold text-pink-600 font-serif">
                    order details
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">
                      minimum order: 4 cupcakes
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">collection only</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">
                      custom designs welcome for special occasions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">
                      not recommended if you have allergies
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 rounded-3xl p-12 border-3 border-pink-200 shadow-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
            <h2 className="text-4xl font-bold text-pink-600 font-serif">
              we can't wait to hear from you
            </h2>
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
          </div>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto leading-relaxed mb-8">
            whether it's for a birthday party, wedding, baby shower, or just
            because you deserve something sweet, we're here to make it magical.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-600 font-medium italic">
              whisked with joy, baked with love
            </span>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
