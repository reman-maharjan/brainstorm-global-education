"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronUp, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useFAQs } from '@/hooks/pages/use-faq';

const FAQ: React.FC = () => {
  const { data: faqs, isLoading, isError } = useFAQs();
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

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Images */}
          <div className="relative flex flex-col gap-4">
            {/* Main Large Image - Top */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="FAQ Image 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Two Images in a Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop"
                  alt="FAQ Image 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                  alt="FAQ Image 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-bold tracking-wider uppercase text-primary">
                  ASK QUESTIONS
                </span>
                {/* Squiggly Arrow SVG */}
                <svg
                  width="40"
                  height="10"
                  viewBox="0 0 40 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M1 5C5 1 10 9 14 5C18 1 23 9 27 5C31 1 36 9 40 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 1L40 5L36 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="text-4xl leading-tight font-bold text-primary md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map(faq => {
                const isOpen = openIndex === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-gray-200 bg-white shadow-sm"
                        : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <span
                        className={`text-lg font-medium ${isOpen ? 'text-primary' : 'text-gray-800'}`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          !isOpen
                            ? "bg-transparent text-gray-400 group-hover:text-gray-600"
                            : "bg-primary text-white"
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
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
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;