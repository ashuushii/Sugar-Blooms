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
import { useState } from "react";

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [notificationPosition, setNotificationPosition] = useState({ x: 0, y: 0 });

  const handleEmailCopy = (event: React.MouseEvent<HTMLAnchorElement>) => {
    navigator.clipboard.writeText("hello@sugarblooms.co.uk");
    setNotificationPosition({ x: event.clientX, y: event.clientY });
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="py-16 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-pink-600 font-serif">
                Let's Get Sweet
              </h1>
            </div>
            <p className="text-base md:text-lg text-pink-700/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Ready to add some sweetness to your day? We'd love to hear from
              you!
            </p>
            <div className="flex items-center justify-center gap-4 mb-4"></div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
              <span className="text-pink-500 text-sm font-medium">
                Orders require 24-48 hours notice
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white/90 backdrop-blur-sm border-3 border-pink-200 rounded-3xl shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-white text-center">
                <h2 className="text-3xl font-bold font-serif mb-2">
                  Get in Touch
                </h2>
                <p className="text-pink-100">
                  We're here to make your day sweeter
                </p>
              </div>

              <div className="p-8 space-y-6">
                <a
                  onClick={handleEmailCopy}
                  className="block bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center space-x-4 p-4">
                    <div className="bg-pink-200 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-pink-600">Email Us</h3>
                      <p className="text-pink-700">hello@sugarblooms.co.uk</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/m5DiwzKhFmfDiVMm7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 p-4">
                    <div className="bg-pink-200 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-pink-600">Location</h3>
                      <p className="text-pink-700">London, UK (Collection Only)</p>
                    </div>
                  </div>
                </a>

                <div
                  className="block bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 p-4">
                    <div className="bg-pink-200 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-pink-600">Order Notice</h3>
                      <p className="text-pink-700">
                        24-48 hours advance notice required
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-pink-600 mb-4 font-serif text-center">
                    Follow Our Socials
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
            <Card className="bg-pink-50 border-3 border-pink-200 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                  <h2 className="text-2xl font-bold text-pink-600 font-serif">
                    Ready to Order?
                  </h2>
                </div>
                <p className="text-pink-700 mb-6 leading-relaxed">
                  Message me on WhatsApp with your dream order! Tell us about
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
                    Order / Enquire Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-3 border-pink-200 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-pink-400" />
                  <h2 className="text-2xl font-bold text-pink-600 font-serif">
                    Order Details
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">
                      Minimum Order: 4 Cupcakes
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700"> Collection Only</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">
                      Custom Designs Welcome for Special Occasions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-pink-700">
                      Not Recommended if You Have Allergies
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-pink-50 rounded-3xl p-12 border-3 border-pink-200 shadow-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
            <h2 className="text-4xl font-bold text-pink-600 font-serif">
              We Can't Wait to Hear from You
            </h2>
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
          </div>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether it's for a birthday party, wedding, baby shower, or just
            because you deserve something sweet, we're here to make it magical.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-600 font-medium italic">
              Whisked with Joy, Baked with Love
            </span>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </div>
        </div>
      </div>

      {emailCopied && (
        <div
          className="fixed bg-pink-600 text-white py-2 px-4 rounded-lg shadow-lg"
          style={{ top: notificationPosition.y, left: notificationPosition.x, transform: "translate(-50%, -100%)" }}
        >
          Email copied to clipboard!
        </div>
      )}
    </div>
  );
}
