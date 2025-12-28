"use client";

import { useQuery } from "@tanstack/react-query";
import { countryChecklistApi } from "@/services/country-checklist";
import { CountryChecklistResponse } from "@/types/country-checklist";

export const useCountryChecklist = (countrySlug: string) => {
  return useQuery<CountryChecklistResponse | null, Error>({
    queryKey: ["country-checklist", countrySlug],
    queryFn: () => countryChecklistApi.getCountryChecklist(countrySlug),
    enabled: !!countrySlug,
    staleTime: 0, // Consider data stale immediately - always refetch
    gcTime: 1000 * 60 * 5, // Keep in cache for 5 minutes
    refetchOnMount: "always", // Always refetch when component mounts
    refetchOnWindowFocus: false, // Don't refetch on window focus
    placeholderData: undefined, // Don't use placeholder data from other queries
  });
};

