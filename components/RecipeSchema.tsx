'use client';

import Script from 'next/script';

interface RecipeSchemaProps {
  name: string;
  description: string;
  image: string;
  prepTime: string; // Format: "PT30M" for 30 minutes
  cookTime: string;
  totalTime: string;
  recipeYield: string;
  recipeCategory: string;
  recipeCuisine: string;
  ingredients: string[];
  instructions: {
    name: string;
    text: string;
  }[];
  keywords: string[];
}

export function RecipeSchema({
  name,
  description,
  image,
  prepTime,
  cookTime,
  totalTime,
  recipeYield,
  recipeCategory,
  recipeCuisine,
  ingredients,
  instructions,
  keywords,
}: RecipeSchemaProps) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name,
    description,
    image: `https://sugarblooms.co.uk${image}`,
    author: {
      "@type": "Organization",
      name: "Sugar Blooms",
      url: "https://sugarblooms.co.uk"
    },
    datePublished: new Date().toISOString(),
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeCategory,
    recipeCuisine,
    keywords: keywords.join(", "),
    recipeIngredient: ingredients,
    recipeInstructions: instructions.map(instruction => ({
      "@type": "HowToStep",
      name: instruction.name,
      text: instruction.text
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1"
    }
  };

  return (
    <Script
      id={`recipe-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
