import React from "react";
import { Check } from "lucide-react";
import { PricingData } from "./pricingData";

interface PricingCardProps {
  pricing: PricingData;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pricing }) => {
  return (
    <div className=" flex  h-full flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md bg-white duration-300">

      {/* Header Section */}
      <div
        className="w-full flex items-center justify-center py-16 bg-primary/10"
      >
        <h3 className="text-4xl font-semibold text-black tracking-tight">
          {pricing.name}
        </h3>
      </div>

      {/* Body */}
      <div className="flex flex-col px-10 pb-10 pt-12 h-full">

        {/* Price */}
        <div className="mb-10 text-center">
          <span
            className="text-5xl font-bold text-primary"
          >
            Rs.{pricing.price}.00
          </span>
          <span
            className="ml-1 text-xl font-semibold text-primary"
          >
            /mo
          </span>
        </div>

        {/* Divider */}
        <div className="border-b mb-10 border-gray-200" />

        {/* Feature List */}
        <ul className="space-y-6">
          {pricing.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                className="h-5 w-5 mt-1 shrink-0 text-primary"
                strokeWidth={3}
              />
              <span className="text-[16px] text-gray-700 leading-snug">
                {feature.feature}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
