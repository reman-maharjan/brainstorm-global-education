import { siteConfig } from "@/config/site";
import {
  OurClient,
  OurClientFilters,
} from "@/types/our-client";

export const ourClientAPI = {
  getOurClients: async (
    filters: OurClientFilters = {}
  ): Promise<OurClient[]> => {
    const BASE_API_URL = siteConfig.backendUrl;

    const { search } = filters;

    const url = new URL(`${BASE_API_URL}/api/our-client/`);

    if (search && search.trim()) {
      url.searchParams.append("search", search.trim());
    }
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch our clients: ${response.status}`);
    }

    const data = await response.json();
    return data;
  },
};
