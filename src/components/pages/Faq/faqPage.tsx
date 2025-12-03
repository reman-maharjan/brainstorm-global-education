"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronUp } from "lucide-react";

// 1. Define the data structure locally
interface FAQItem {
  question: string;
  answer: string;
}

// 2. Sample data matching your image
const faqData: FAQItem[] = [
  {
    question: "What services does your consultancy provide?",
    answer: "We offer educational counseling, course and university selection, application processing, documentation guidance, visa assistance, test preparation, and pre-departure support."
  },
  {
    question: "What documents are required to start the application process?",
    answer: "Typically, you will need your academic transcripts, a valid passport, English proficiency test scores (IELTS/TOEFL), recommendation letters, and a statement of purpose."
  },
  {
    question: "Which countries do you help students apply to?",
    answer: "We assist students in applying to universities in the USA, UK, Canada, Australia, and various European countries."
  },
  {
    question: "How long does the application and visa process usually take?",
    answer: "The process varies by country and university, but it generally takes 3 to 6 months from application submission to visa approval."
  },
  {
    question: "Is there a consultation fee?",
    answer: "Our initial counseling session is completely free. We do charge a nominal fee for processing applications and visa guidance depending on the destination."
  },
  {
    question: "Can I apply without English proficiency scores?",
    answer: "Some universities offer conditional admission or waivers depending on your academic background, but most top institutions require valid test scores."
  },
  {
    question: "Do you assist with scholarship opportunities?",
    answer: "Yes, we help identify scholarship opportunities based on your academic merit and assist you in drafting the scholarship application essays."
  },
  {
    question: "How can I book an appointment or counseling session?",
    answer: "You can book a session through our website's booking form, call our office directly, or visit us in person during business hours."
  }
];

export default function Faqs() {
  // State to track which item is open (defaulting to 0, the first one)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Split data into two columns
  const midPoint = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midPoint);
  const rightFaqs = faqData.slice(midPoint);

  // Helper to calculate the actual index based on column position
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqList = (items: FAQItem[], startIndex: number) => {
    return items.map((faq, i) => {
      const actualIndex = startIndex + i;
      const isOpen = openIndex === actualIndex;

      return (
        <div
          key={actualIndex}
          className={`group overflow-hidden rounded-2xl transition-all duration-300 ${
            isOpen ? "bg-gray-50" : "bg-white"
          }`}
        >
          <button
            onClick={() => toggleFAQ(actualIndex)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <span
              className={`text-lg font-medium transition-colors duration-300 ${
                isOpen ? "text-[#008f7a]" : "text-gray-900"
              }`}
            >
              {faq.question}
            </span>
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                isOpen
                  ? "bg-[#0f5132] text-white" // Dark Green bg, White Icon (Active)
                  : "bg-gray-100 text-gray-600 group-hover:bg-gray-200" // Gray bg, Gray Icon (Inactive)
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
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#008f7a] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-start">
          <div className="flex flex-col gap-4">
            {renderFaqList(leftFaqs, 0)}
          </div>
          <div className="flex flex-col gap-4">
            {renderFaqList(rightFaqs, midPoint)}
          </div>
        </div>
      </div>
    </section>
  );
}