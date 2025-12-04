"use client";

import React from "react";
import { usePricings } from "@/hooks/pages/use-pricing";
import { PricingCard } from "./PricingCard";
import { Loader2 } from "lucide-react";

export const PricingList: React.FC = () => {
  const { data, isLoading, isError } = usePricings();

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
        Failed to load pricing plans. Please try again later.
      </div>
    );
  }

  const pricings = data?.results || [];

  if (pricings.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No pricing plans available at the moment.
      </div>
    );
  }

  return (
    <div className="flex justify-center p-4 sm:p-10 gap-6">
      {pricings.map((pricing) => (
        <div key={pricing.id} className="w-full sm:w-[48%] lg:w-[32%]">
          <PricingCard pricing={pricing} />
        </div>
      ))}
    </div>
  );
};
