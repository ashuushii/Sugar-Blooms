"use client"

import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PostcodeDistanceChecker() {
  const [customerPostcode, setCustomerPostcode] = useState("")
  const [distanceResult, setDistanceResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const bakeryPostcode = "NW9 5UZ" // Internal use only, not displayed

  const calculateDistance = () => {
    setError(null)
    setDistanceResult(null)

    if (!customerPostcode.trim()) {
      setError("Please enter a postcode.")
      return
    }

    // Simulate distance calculation from NW9 5UZ
    // In a real application, you would use a postcode API here.
    let distance: number
    const normalizedCustomerPostcode = customerPostcode.trim().toUpperCase()

    // Simple logic to simulate distance based on common London postcodes
    if (
      normalizedCustomerPostcode.startsWith("NW") ||
      normalizedCustomerPostcode.startsWith("N") ||
      normalizedCustomerPostcode.startsWith("HA") ||
      normalizedCustomerPostcode.startsWith("UB")
    ) {
      // Assume closer for North/North West London areas
      distance = Math.floor(Math.random() * 5) + 1 // 1-5 miles
      setDistanceResult(`You are approximately ${distance} miles away!`)
    } else if (
      normalizedCustomerPostcode.startsWith("SW") ||
      normalizedCustomerPostcode.startsWith("SE") ||
      normalizedCustomerPostcode.startsWith("W") ||
      normalizedCustomerPostcode.startsWith("E") ||
      normalizedCustomerPostcode.startsWith("WC") ||
      normalizedCustomerPostcode.startsWith("EC")
    ) {
      // Assume moderate distance for other London areas
      distance = Math.floor(Math.random() * 8) + 3 // 3-10 miles
      setDistanceResult(`You are approximately ${distance} miles away!`)
    } else if (normalizedCustomerPostcode.length > 3) {
      // Assume further for non-London UK postcodes
      distance = Math.floor(Math.random() * 20) + 10 // 10-30 miles
      setDistanceResult(`You are approximately ${distance} miles away!`)
    } else {
      setError("Please enter a valid UK postcode format.")
      return
    }
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-3xl shadow-xl">
      <CardContent className="p-8">
        <h4 className="text-2xl font-bold text-pink-600 mb-6 font-serif">See How Close We Are!</h4>
        <p className="text-pink-700 mb-6">Enter your postcode to see the approximate distance from our bakery.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            type="text"
            placeholder="Your Postcode (e.g., SW1A 0AA)"
            value={customerPostcode}
            onChange={(e) => setCustomerPostcode(e.target.value)}
            className="flex-grow border-pink-300 focus:border-pink-500 focus:ring-pink-500 rounded-full px-4 py-2 text-pink-800 placeholder-pink-400"
          />
          <Button
            onClick={calculateDistance}
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-full py-2 px-6 shadow-lg"
          >
            Check Distance
          </Button>
        </div>
        {distanceResult && (
          <div className="mt-4 p-3 bg-pink-50 rounded-xl border border-pink-200 text-pink-700 text-center">
            <p className="font-medium">{distanceResult}</p>
            <p className="text-xs mt-1 text-pink-500">
              {"(This is an approximate distance for demonstration purposes.)"}
            </p>
          </div>
        )}
        {error && (
          <div className="mt-4 p-3 bg-red-50 rounded-xl border border-red-200 text-red-700 text-center">
            <p className="font-medium">{error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
