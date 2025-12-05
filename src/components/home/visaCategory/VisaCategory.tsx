'use client';
import React from "react";
import {
  Map,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { useCountries } from "@/hooks/use-country";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { truncateText } from "@/lib/text-utils";

const VisaCategory: React.FC = () => {
  const { data: countries, isLoading, error } = useCountries();
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-18 text-center max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-2 text-gray-500 font-semibold text-xs tracking-widest uppercase mb-4">
        <Map size={16} /> VISA CATEGORY
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-12 sm:mb-16">
        Seeking Adventure Thrills <br />
        and Excitement Await
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-[#F4F6F5] p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6"
            >
              <Skeleton className="w-20 h-20 md:w-24 md:h-24 rounded-xl shrink-0" />
              <div className="text-left flex-1 w-full">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))
        ) : error ? (
          // Error state
          <div className="col-span-full text-center py-12">
            <p className="text-red-500">Failed to load countries. Please try again later.</p>
          </div>
        ) : countries && countries.length > 0 ? (
          // Countries data
          countries.map((country) => (
            <Link
              key={country.id}
              href={`/country-details/${country.data.slug}`}
              className="bg-[#F4F6F5] p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 group hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-xl overflow-hidden shrink-0 relative">
                <Image
                  src={country.data.thumbnail_image}
                  alt={country.data.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="text-left flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2">
                  {country.data.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {truncateText(country.data.Desription, 120)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                  <Globe
                    size={28}
                    className="text-secondary opacity-20 group-hover:opacity-100 transition-opacity sm:w-8 sm:h-8"
                  />
                </div>
              </div>
            </Link>
          ))
        ) : (
          // No data state
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No countries available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisaCategory;
