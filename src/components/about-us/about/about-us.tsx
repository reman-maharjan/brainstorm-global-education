"use client";

import React, { useState} from "react";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Mock data structure to match the template requirements until real data is available
const defaultAboutData = {
  subHeading: "WHY CHOOSE US",
  heading: "Experiencing Traditions Cultural Immersion",
  image: {
    url: "https://picsum.photos/seed/happycolleagues/800/1000",
    alt: "Happy team members"
  },
  experienceBadge: {
    count: "25",
    text: "Years Of experience"
  },
  features: [
    {
      id: 1,
      title: "Marketing Services",
      description: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa loren ipsum."
    },
    {
      id: 2,
      title: "IT Maintenance",
      description: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa loren ipsum."
    }
  ],
  buttons: [
    {
      text: "Read More",
      href: "#"
    }
  ],
  contact: {
    label: "Need Help?",
    phone: "(808) 555-0111"
  }
};

export const AboutUs: React.FC = () => {
  const [data] = useState(defaultAboutData);

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content (Swapped order to match original AboutUs layout preference if needed, but keeping template structure) */}
          {/* Actually, the requested template has Image on Left, Content on Right. 
             The original AboutUs had Content on Left, Image on Right.
             I will follow the REQUESTED TEMPLATE structure (Image Left, Content Right) as "it should look like this ui".
          */}

          {/* Left Column: Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
                <div className="h-[600px] w-full relative">
                    <Image
                    src={data.image.url}
                    alt={data.image.alt}
                    fill
                    className="object-cover"
                    />
                </div>
              </div>

              {/* Decorative Border/Frame */}
              <div
                className="absolute -top-6 -right-6 -bottom-6 -left-6 -z-10 rounded-[2.5rem] border-4 border-primary/20"
              />

              {/* Experience Badge */}
              <div
                className="absolute right-8 bottom-8 flex flex-col items-center justify-center rounded-2xl px-6 py-4 shadow-lg bg-primary text-white"
              >
                <span className="text-4xl leading-none font-bold">{data.experienceBadge.count}</span>
                <span className="mt-1 text-center text-sm leading-tight font-medium">{data.experienceBadge.text}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            {/* Subheading */}
            <div className="mb-4 flex items-center">
              <span className="text-sm font-bold tracking-wider uppercase text-primary">
                {data.subHeading}
              </span>
              <svg
                className="ml-2 h-4 w-12 text-primary"
                viewBox="0 0 50 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5C10 5 10 1 25 1C40 1 40 9 49 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="mb-8 text-4xl leading-tight font-bold md:text-5xl text-primary">
              {data.heading}
            </h2>

            {/* Features List */}
            <div className="mb-10 space-y-8">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <div className="shrink-0">
                    <CheckCircle2
                      className="h-6 w-6 text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions & Contact */}
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              {/* Primary Button */}
              <Button 
                className="inline-flex items-center justify-center rounded-full px-8 py-6 text-base font-semibold transition-transform hover:scale-105 bg-primary text-white hover:bg-primary/90"
              >
                {data.buttons[0].text} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Contact Info */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
                >
                  <Phone
                    className="h-5 w-5 text-primary"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    {data.contact.label}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {data.contact.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};