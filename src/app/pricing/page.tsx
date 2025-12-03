import React from "react";
import { PricingCard } from "@/components/pricing/PricingCard";
import { pricingData } from "@/components/pricing/pricingData";

export default function PricingSection() {
  return (
    <div className="flex flex-wrap gap-6">
      {pricingData.map((pricing, i) => (
        <div
          key={i}
          className="w-full sm:w-[48%] lg:w-[32%]"
        >
          <PricingCard pricing={pricing} />
        </div>
      ))}
    </div>
  );
}
