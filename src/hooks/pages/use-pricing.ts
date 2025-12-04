import { useQuery } from "@tanstack/react-query";
import { usePricingApi } from "@/services/pages/pricing";
import {
  PricingQueryParams,
} from "@/types/pages/pricing";


export const usePricings = (params: PricingQueryParams = {}) => {
  return useQuery({
    queryKey: ["pricings", params],
    queryFn: () => usePricingApi.getPricings(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const usePricing = (id: number | undefined) => {
  return useQuery({
    queryKey: ["pricing", id],
    queryFn: () => {
      if (!id) {
        return Promise.resolve(null);
      }
      return usePricingApi.getPricing(id);
    },
    enabled: !!id,
  });
};

