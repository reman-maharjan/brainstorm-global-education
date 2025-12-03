"use client";

import React, { useState } from "react";
import Image from "next/image"; // Ensure you have next/image configured
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// 1. Simple Data Structure
const TESTIMONIALS = [
  {
    id: 1,
    name: "Albert Flores",
    designation: "Web Designer",
    comment:
      "We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Jane Cooper",
    designation: "Product Manager",
    comment:
      "The team exceeded our expectations. The attention to detail and creative solutions provided were exactly what we needed for our launch.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop",
  },
  
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Large Portrait Image */}
        <div className="relative h-[400px] lg:h-auto lg:min-h-[500px] lg:col-span-5 overflow-hidden rounded-[40px]">
          <Image
            src={activeTestimonial.image}
            alt={activeTestimonial.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Content Card */}
        <div className="relative flex flex-col justify-between rounded-[40px] bg-[#10947e] p-8 md:p-14 lg:col-span-7 text-white overflow-hidden">
          
          {/* Decorative Circle (Top Right) */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-sm pointer-events-none"></div>

          {/* Quote Content */}
          <div className="relative z-10">
            <Quote className="mb-8 h-12 w-12 fill-white text-white opacity-90" />
            <p className="text-xl md:text-3xl font-medium leading-relaxed tracking-wide">
              {activeTestimonial.comment}
            </p>
          </div>

          {/* Bottom Section: Author & Navigation */}
          <div className="relative z-10 mt-12 flex items-center justify-between gap-4">
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/20">
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold">{activeTestimonial.name}</h4>
                <p className="text-sm text-white/80">{activeTestimonial.designation}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-900 transition-transform hover:scale-105 active:scale-95"
                aria-label="Previous"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-900 transition-transform hover:scale-105 active:scale-95"
                aria-label="Next"
              >
                <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}