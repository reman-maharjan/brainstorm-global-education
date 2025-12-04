import { siteConfig } from "@/config/site";
import {
  GetPricingsResponse,
  Pricing,
  PricingQueryParams,
} from "@/types/pages/pricing";

export const usePricingApi = {
  getPricings: async (
    params: PricingQueryParams = {}
  ): Promise<GetPricingsResponse> => {
    const { search, sortBy, sortOrder = "asc" } = params;

    const API_BASE_URL = siteConfig.backendUrl;

    const queryParams = new URLSearchParams();

    if (search) {
      queryParams.append("search", search);
    }

    if (sortBy) {
      queryParams.append(
        "ordering",
        sortOrder === "desc" ? `-${sortBy}` : sortBy
      );
    }

    const queryString = queryParams.toString();
    const url = queryString
      ? `${API_BASE_URL}/api/our-pricing/?${queryString}`
      : `${API_BASE_URL}/api/our-pricing/`;

    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();

    const results = Array.isArray(data) ? data : data.results || [];
    const count = data.count || data.length || 0;

    return {
      results,
      count,
    };
  },

  getPricing: async (id: number): Promise<Pricing> => {
    const API_BASE_URL = siteConfig.backendUrl;
    const response = await fetch(`${API_BASE_URL}/api/our-pricing/${id}/`, {
      method: "GET",
    });

    return response.json();
  },
};
