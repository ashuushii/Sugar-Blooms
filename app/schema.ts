export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Sugar Blooms",
  "image": "https://sugarblooms.co.uk/sugarbloomsbakery.png",
  "description": "Sugar Blooms is a London-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
  "url": "https://sugarblooms.co.uk",
  "telephone": "+44 790 716 9798",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "24 Aerodrome Road, Colindale",
    "addressLocality": "London",
    "postalCode": "NW9 5UZ",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5948,
    "longitude": -0.2414
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/sugarbloomsco",
    "https://tiktok.com/@sugarbloomsco",
    "https://www.facebook.com/profile.php?id=61578928634971"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sugar Blooms",
  "url": "https://sugarblooms.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sugarblooms.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://sugarblooms.co.uk${item.item}`
  }))
});
