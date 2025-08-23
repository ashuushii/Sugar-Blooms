"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const ClickableAccordionContent = ({ children }: { children: React.ReactNode }) => (
  <div 
    onClick={(e) => {
      const trigger = e.currentTarget.closest('[data-state]');
      if (trigger) {
        (trigger as HTMLElement).click();
      }
    }}
    className="cursor-pointer"
  >
    <AccordionContent>
      {children}
    </AccordionContent>
  </div>
);

interface FAQSubmission {
  name: string;
  email: string;
  question: string;
}

// Initial FAQ data - later this will come from your database
interface ClickableAccordionProps {
  children: React.ReactNode;
  value: string;
  onToggle: (value: string) => void;
}

const ClickableAccordion: React.FC<ClickableAccordionProps> = ({ children, value, onToggle }) => {
  return (
    <div 
      className="cursor-pointer"
      onClick={() => onToggle(value)}
    >
      {children}
    </div>
  );
};

const initialFaqs = [
  {
    question: "How far in advance should I place my order?",
    answer:
      "We recommend placing your order at least 24-48 hours in advance. For large orders or special occasions, please order 3-5 days ahead.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "We currently offer collection only from our location in Colindale, Barnet NW9. We ensure your treats are carefully packaged for safe transport.",
  },
  {
    question: "What's your minimum order quantity?",
    answer:
      "Our minimum order is 4 cupcakes. This ensures we can maintain our high quality standards while making it accessible for smaller celebrations.",
  },
  {
    question: "Do you cater for dietary requirements?",
    answer:
      "While we can accommodate some preferences, our kitchen handles common allergens like nuts, dairy, and gluten. We currently don't offer vegan or gluten-free options.",
  },
  {
    question: "How should I store my cupcakes?",
    answer:
      "For best results, store your cupcakes in an airtight container at room temperature and enjoy within 48 hours. Avoid refrigeration as this can dry them out.",
  },
];

export default function FAQPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [formData, setFormData] = useState<FAQSubmission>({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send this to your API
      // await fetch('/api/faq-submissions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setShowSuccess(true);
      setFormData({ name: "", email: "", question: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting question:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-48 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-8 font-serif">
            Frequently Asked Questions
          </h1>

          {/* FAQ Section */}
          <section className="mb-16">
            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full space-y-4">
              {initialFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl px-4 cursor-pointer"
                  onClick={(e) => {
                    const newValue = `item-${index}`;
                    if (openItems.includes(newValue)) {
                      setOpenItems(openItems.filter(item => item !== newValue));
                    } else {
                      setOpenItems([...openItems, newValue]);
                    }
                  }}
                >
                  <AccordionTrigger className="text-pink-600 hover:text-pink-700 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-pink-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Terms and Conditions Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-pink-600 mb-6 font-serif text-center">
              Terms and Conditions
            </h2>
            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full space-y-4">
              <AccordionItem
                value="orders"
                className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl px-4 cursor-pointer"
                onClick={() => {
                  const value = "orders";
                  if (openItems.includes(value)) {
                    setOpenItems(openItems.filter(item => item !== value));
                  } else {
                    setOpenItems([...openItems, value]);
                  }
                }}
              >
                <AccordionTrigger className="text-pink-600 hover:text-pink-700 text-left">
                  1. Orders and Collection
                </AccordionTrigger>
                <AccordionContent className="text-pink-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Minimum order of 4 cupcakes required</li>
                    <li>24-48 hours notice required for all orders</li>
                    <li>Collection only from our Colindale, Barnet NW9 location</li>
                    <li>Order confirmation is subject to availability</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="payment"
                className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl px-4 cursor-pointer"
                onClick={() => {
                  const value = "payment";
                  if (openItems.includes(value)) {
                    setOpenItems(openItems.filter(item => item !== value));
                  } else {
                    setOpenItems([...openItems, value]);
                  }
                }}
              >
                <AccordionTrigger className="text-pink-600 hover:text-pink-700 text-left">
                  2. Payment and Cancellations
                </AccordionTrigger>
                <AccordionContent className="text-pink-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Full payment required to confirm orders</li>
                    <li>Cancellations accepted up to 24 hours before collection time</li>
                    <li>Refunds will be processed within 3-5 working days</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="allergens"
                className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl px-4 cursor-pointer"
                onClick={() => {
                  const value = "allergens";
                  if (openItems.includes(value)) {
                    setOpenItems(openItems.filter(item => item !== value));
                  } else {
                    setOpenItems([...openItems, value]);
                  }
                }}
              >
                <AccordionTrigger className="text-pink-600 hover:text-pink-700 text-left">
                  3. Allergen Information
                </AccordionTrigger>
                <AccordionContent className="text-pink-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Our kitchen handles common allergens including nuts, dairy, eggs, and gluten</li>
                    <li>We cannot guarantee allergen-free products</li>
                    <li>Please inform us of any allergies when ordering</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="products"
                className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl px-4 cursor-pointer"
                onClick={() => {
                  const value = "products";
                  if (openItems.includes(value)) {
                    setOpenItems(openItems.filter(item => item !== value));
                  } else {
                    setOpenItems([...openItems, value]);
                  }
                }}
              >
                <AccordionTrigger className="text-pink-600 hover:text-pink-700 text-left">
                  4. Product Information
                </AccordionTrigger>
                <AccordionContent className="text-pink-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All products are freshly baked to order</li>
                    <li>Best consumed within 48 hours of collection</li>
                    <li>Store at room temperature in an airtight container</li>
                    <li>Product appearance may vary slightly from images</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="quality"
                className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl px-4 cursor-pointer"
                onClick={() => {
                  const value = "quality";
                  if (openItems.includes(value)) {
                    setOpenItems(openItems.filter(item => item !== value));
                  } else {
                    setOpenItems([...openItems, value]);
                  }
                }}
              >
                <AccordionTrigger className="text-pink-600 hover:text-pink-700 text-left">
                  5. Quality Commitment
                </AccordionTrigger>
                <AccordionContent className="text-pink-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All products are made with high-quality ingredients</li>
                    <li>Please check your order upon collection</li>
                    <li>Any quality concerns must be reported within 2 hours of collection</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6 text-sm text-pink-600 italic text-center">
              By placing an order with Sugar Blooms, you agree to these terms and conditions.
              These terms are subject to change without notice.
            </div>
          </section>

          {/* Question Submission Form */}
          <section className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-pink-600 mb-6 font-serif">
              Ask a Question
            </h2>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                Thank you for your question! We'll review it and add it to our FAQs if it can help others.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-pink-600"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-pink-200 focus:border-pink-400 text-pink-700 placeholder:text-pink-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-pink-600"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-pink-200 focus:border-pink-400 text-pink-700 placeholder:text-pink-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="question"
                  className="block text-sm font-medium text-pink-600"
                >
                  Your Question
                </label>
                <Textarea
                  id="question"
                  required
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  className="min-h-[100px] border-pink-200 focus:border-pink-400 text-pink-700 placeholder:text-pink-300"
                  placeholder="What would you like to know?"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium px-8"
              >
                {isSubmitting ? "Submitting..." : "Submit Question"}
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
