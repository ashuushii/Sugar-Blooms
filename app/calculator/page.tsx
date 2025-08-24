"use client";

import { useState } from "react";
import { BowBackground } from "@/components/BowBackground";
import Head from "next/head";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleConvert = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ingredientElement = document.getElementById(
      "ingredient"
    ) as HTMLSelectElement;
    const unit1Element = document.getElementById("unit1") as HTMLSelectElement;
    const unit2Element = document.getElementById("unit2") as HTMLSelectElement;
    const valueElement = document.getElementById("value") as HTMLInputElement;

    if (!ingredientElement || !unit1Element || !unit2Element || !valueElement) {
      setResult("Please fill out all fields.");
      return;
    }

    const ingredient = ingredientElement.value;
    const unit1 = unit1Element.value;
    const unit2 = unit2Element.value;
    const value = parseFloat(valueElement.value);

    if (isNaN(value)) {
      setResult("Please enter a valid number.");
      return;
    }

    const universalConversions: Record<string, number> = {
      cup_to_tablespoon: 16,
      three_fourth_cup_to_tablespoon: 12,
      two_third_cup_to_tablespoon: 10 + 2 / 3,
      half_cup_to_tablespoon: 8,
      one_third_cup_to_tablespoon: 5 + 1 / 3,
      one_fourth_cup_to_tablespoon: 4,
      teaspoon_to_tablespoon: 1 / 3,
    };

    const conversionRates: Record<string, Record<string, number>> = {
      plain_flour: {
        grams: 1,
        teaspoon: 2.6,
        tablespoon: 7.8,
        cup: 125,
        kilograms: 1000,
      },
      caster_sugar: {
        grams: 1,
        teaspoon: 4,
        tablespoon: 12,
        cup: 200,
        kilograms: 1000,
      },
      icing_sugar: {
        grams: 1,
        teaspoon: 3.8,
        tablespoon: 11.4,
        cup: 190,
        kilograms: 1000,
      },
      salt: {
        grams: 1,
        teaspoon: 5.9,
        tablespoon: 17.7,
        cup: 288,
        kilograms: 1000,
      },
      baking_powder: {
        grams: 1,
        teaspoon: 4.6,
        tablespoon: 13.8,
        cup: 220,
        kilograms: 1000,
      },
      large_eggs: {
        grams: 50,
        unit: 1,
      },
      medium_eggs: {
        grams: 44,
        unit: 1,
      },
      milk: {
        grams: 1,
        teaspoon: 5,
        tablespoon: 15,
        cup: 240,
        kilograms: 1000,
      },
      vanilla_extract: {
        grams: 1,
        teaspoon: 4.2,
        tablespoon: 12.6,
        cup: 200,
        kilograms: 1000,
      },
    };

    const ingredientRates = conversionRates[ingredient];
    if (!ingredientRates) {
      setResult("Invalid ingredient selected.");
      return;
    }

    const valueInGrams = value * ingredientRates[unit1];
    const convertedValue = valueInGrams / ingredientRates[unit2];

    const formatUnit = (unit: string) => {
      if (unit === "teaspoon") return "tsp";
      if (unit === "tablespoon") return "tbsp";
      if (unit === "grams") return "g";
      if (unit === "kilograms") return "kg";
      return unit;
    };

    const formatIngredient = (ingredient: string) => {
      return ingredient
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const formatResult = (value: number, unit: string) => {
      if (unit === "grams") return value.toFixed(2);
      if (unit === "kilograms") return value.toFixed(3);
      return value.toFixed(2);
    };

    const formattedUnit1 = formatUnit(unit1);
    const formattedUnit2 = formatUnit(unit2);
    const formattedIngredient = formatIngredient(ingredient);
    const formattedValue = formatResult(convertedValue, unit2);

    setResult(
      `${value} ${formattedUnit1} of ${formattedIngredient} is approximately ${formattedValue} ${formattedUnit2}.`
    );
  };

  return (
    <main className="relative z-10 min-h-screen pt-40 pb-20 flex items-center justify-center">
      <Head>
        <title>Baking Calculator | Sugar Blooms</title>
        <meta
          name="description"
          content="Easily convert baking measurements for ingredients like flour, sugar, and more. Simplify your baking process with our precise calculator."
        />
        <meta
          name="keywords"
          content="baking calculator, ingredient conversions, flour conversions, sugar conversions, baking measurements, Sugar Blooms"
        />
        <meta name="author" content="Sugar Blooms" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Baking Calculator | Sugar Blooms" />
        <meta
          property="og:description"
          content="Easily convert baking measurements for ingredients like flour, sugar, and more. Simplify your baking process with our precise calculator."
        />
        <meta property="og:image" content="/calculator-preview.png" />
        <meta
          property="og:url"
          content="https://sugarblooms.co.uk/calculator"
        />
        <meta property="og:type" content="website" />
      </Head>
      <BowBackground />
      <div className="container mx-auto text-center max-w-xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 font-serif mb-6">
          My Baking Calculator
        </h1>
        <p className="text-base md:text-lg text-pink-700/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          Convert units for your favorite baking ingredients with precision and
          ease.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
          <span className="text-pink-500 text-sm font-medium">
            Simplify Your Baking Measurements
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent flex-1 max-w-20" />
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-pink-200">
          <form className="space-y-6" onSubmit={handleConvert}>
            <div className="mb-4">
              <label
                htmlFor="ingredient"
                className="block text-pink-600 font-medium mb-2"
              >
                Select Ingredient
              </label>
              <select
                id="ingredient"
                className="w-full border border-pink-300 rounded-lg p-3 bg-pink-100 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="plain_flour">Plain Flour</option>
                <option value="caster_sugar">Caster Sugar</option>
                <option value="icing_sugar">Icing Sugar</option>
                <option value="salt">Salt</option>
                <option value="baking_powder">Baking Powder</option>
                <option value="large_eggs">Large Eggs</option>
                <option value="medium_eggs">Medium Eggs</option>
                <option value="milk">Milk</option>
                <option value="vanilla_extract">Vanilla Extract</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="unit1"
                  className="block text-pink-600 font-medium mb-2"
                >
                  From
                </label>
                <select
                  id="unit1"
                  className="w-full border border-pink-300 rounded-lg p-3 bg-pink-100 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  defaultValue="cup"
                >
                  <option value="cup">Cup</option>
                  <option value="tablespoon">Tablespoon</option>
                  <option value="teaspoon">Teaspoon</option>
                  <option value="grams">Grams (g)</option>
                  <option value="kilograms">Kilograms (kg)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="unit2"
                  className="block text-pink-600 font-medium mb-2"
                >
                  To
                </label>
                <select
                  id="unit2"
                  className="w-full border border-pink-300 rounded-lg p-3 bg-pink-100 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  defaultValue="grams"
                >
                  <option value="cup">Cup</option>
                  <option value="tablespoon">Tablespoon</option>
                  <option value="teaspoon">Teaspoon</option>
                  <option value="grams">Grams (g)</option>
                  <option value="kilograms">Kilograms (kg)</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="value"
                className="block text-pink-600 font-medium mb-2"
              >
                Enter Value to Convert
              </label>
              <input
                type="number"
                id="value"
                placeholder="e.g., 1"
                className="w-full border border-pink-300 rounded-lg p-3 bg-pink-100 text-pink-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all"
            >
              Convert
            </button>
          </form>
          <div className="mt-6 p-4 bg-pink-50 border border-pink-300 rounded-lg shadow-md">
            <p className="text-pink-700 font-medium text-md">
              {result || "Waiting for input..."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
