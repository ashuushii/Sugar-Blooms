export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: "product" | "recipe" | "faq" | "general";
  tags?: string[];
}

export const searchData: SearchResult[] = [
  // Products
  {
    title: "Classic Vanilla Cupcakes",
    description:
      "Light and fluffy vanilla cupcakes topped with smooth vanilla buttercream",
    url: "/cupcakes#vanilla",
    category: "product",
    tags: ["vanilla", "classic", "buttercream", "bestseller"],
  },
  {
    title: "Double Chocolate Cupcakes",
    description:
      "Rich chocolate cupcakes with chocolate ganache filling and chocolate buttercream",
    url: "/cupcakes#chocolate",
    category: "product",
    tags: ["chocolate", "ganache", "rich", "indulgent"],
  },
  {
    title: "Strawberry Bliss Cupcakes",
    description:
      "Fresh strawberry cupcakes with strawberry buttercream and real fruit pieces",
    url: "/cupcakes#strawberry",
    category: "product",
    tags: ["strawberry", "fruit", "fresh", "summer"],
  },

  // Recipes
  {
    title: "Perfect Vanilla Frosting",
    description:
      "Learn how to make smooth, creamy vanilla buttercream frosting",
    url: "/recipes#vanilla-frosting",
    category: "recipe",
    tags: ["vanilla", "frosting", "buttercream", "tutorial"],
  },
  {
    title: "Swiss Meringue Buttercream",
    description:
      "Professional-grade silky smooth Swiss meringue buttercream recipe",
    url: "/recipes#swiss-meringue",
    category: "recipe",
    tags: ["swiss-meringue", "frosting", "professional", "advanced"],
  },
  {
    title: "Basic Piping Techniques",
    description: "Master the art of piping with our step-by-step guide",
    url: "/recipes#piping-guide",
    category: "recipe",
    tags: ["piping", "tutorial", "techniques", "beginner"],
  },

  // FAQs
  {
    title: "Ordering & Delivery",
    description: "Information about placing orders and collection details",
    url: "/faq#ordering",
    category: "faq",
    tags: ["orders", "delivery", "collection", "minimum-order"],
  },
  {
    title: "Storage Guidelines",
    description: "How to store and serve your cupcakes for best results",
    url: "/faq#storage",
    category: "faq",
    tags: ["storage", "freshness", "serving", "tips"],
  },
  {
    title: "Dietary Information",
    description: "Details about allergens and dietary requirements",
    url: "/faq#dietary",
    category: "faq",
    tags: ["allergens", "dietary", "nutrition", "ingredients"],
  },

  // General Pages
  {
    title: "About Sugar Blooms",
    description: "Our story and commitment to creating perfect cupcakes",
    url: "/about",
    category: "general",
    tags: ["about", "story", "mission"],
  },
  {
    title: "Contact Us",
    description: "Get in touch for orders, questions, or special requests",
    url: "/contact",
    category: "general",
    tags: ["contact", "orders", "support", "inquiries"],
  },
  {
    title: "Terms & Conditions",
    description: "Our terms of service and ordering conditions",
    url: "/faq#terms",
    category: "general",
    tags: ["terms", "conditions", "policies", "legal"],
  },
];
