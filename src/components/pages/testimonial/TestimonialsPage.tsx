"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/pages/use-testimonial";

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: testimonials, isLoading, error } = useTestimonials();

  const handlePrev = () => {
    if (!testimonials || testimonials.length === 0) return;
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!testimonials || testimonials.length === 0) return;
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="text-center">
          <p className="text-gray-500">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="text-center">
          <p className="text-red-500">Failed to load testimonials. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="text-center">
          <p className="text-gray-500">No testimonials available.</p>
        </div>
      </div>
    );
  }

  const activeTestimonial = testimonials[currentIndex];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Large Portrait Image */}
        {activeTestimonial.image && (
          <div className="relative h-[350px] sm:h-[400px] lg:h-auto lg:min-h-[500px] lg:col-span-5 overflow-hidden rounded-3xl sm:rounded-[40px]">
            <Image
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Right Column: Content Card */}
        <div className={`relative flex flex-col justify-between rounded-3xl sm:rounded-[40px] bg-primary p-6 sm:p-8 md:p-14 ${activeTestimonial.image ? 'lg:col-span-7' : 'lg:col-span-12'} text-white overflow-hidden`}>
          
          {/* Decorative Circle (Top Right) */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-sm pointer-events-none"></div>

          {/* Quote Content */}
          <div className="relative z-10">
            <Quote className="mb-8 h-12 w-12 fill-white text-white opacity-90" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-wide">
              {activeTestimonial.comment}
            </p>
          </div>

          {/* Bottom Section: Author & Navigation */}
          <div className="relative z-10 mt-12 flex items-center justify-between gap-4">
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              {activeTestimonial.image && (
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/20">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h4 className="text-lg font-bold">{activeTestimonial.name}</h4>
                <p className="text-sm text-white/80">{activeTestimonial.designation}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={handlePrev}
                className="flex h-14 w-14 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-secondary transition-transform hover:scale-105 active:scale-95"
                aria-label="Previous"
                disabled={testimonials.length <= 1}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="flex h-14 w-14 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-secondary transition-transform hover:scale-105 active:scale-95"
                aria-label="Next"
                disabled={testimonials.length <= 1}
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