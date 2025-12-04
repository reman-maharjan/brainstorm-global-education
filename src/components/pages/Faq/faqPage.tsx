"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronUp, Loader2 } from "lucide-react";
import { useFAQs } from "@/hooks/pages/use-faq";
import { FAQ } from "@/types/pages/faq";

export default function Faqs() {
  const { data: faqs, isLoading, isError } = useFAQs();
  // State to track which item is open (defaulting to null initially)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const initializedRef = React.useRef(false);

  useEffect(() => {
    if (faqs && faqs.length > 0 && !initializedRef.current) {
      const timer = setTimeout(() => {
        setOpenIndex(faqs[0].id);
        initializedRef.current = true;
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [faqs]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load FAQs. Please try again later.
      </div>
    );
  }

  const faqList = faqs || [];

  if (faqList.length === 0) {
    return null;
  }

  // Split data into two columns
  const midPoint = Math.ceil(faqList.length / 2);
  const leftFaqs = faqList.slice(0, midPoint);
  const rightFaqs = faqList.slice(midPoint);

  // Helper to calculate the actual index based on column position
  const toggleFAQ = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const renderFaqList = (items: FAQ[]) => {
    return items.map((faq) => {
      const isOpen = openIndex === faq.id;

      return (
        <div
          key={faq.id}
          className={`group overflow-hidden rounded-2xl transition-all duration-300 ${
            isOpen ? "bg-gray-50" : "bg-white"
          }`}
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <span
              className={`text-lg font-medium transition-colors duration-300 ${
                isOpen ? "text-primary" : "text-gray-900"
              }`}
            >
              {faq.question}
            </span>
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                isOpen
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-600 group-hover:bg-gray-200" 
              }`}
            >
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </span>
          </button>
          
          {/* Animated Content Container */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 leading-relaxed text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-start">
          <div className="flex flex-col gap-4">
            {renderFaqList(leftFaqs)}
          </div>
          <div className="flex flex-col gap-4">
            {renderFaqList(rightFaqs)}
          </div>
        </div>
      </div>
    </section>
  );
}