import { siteConfig } from "@/config/site";
import { Country, CountryResponse } from "@/types/country";

export const countryAPI = {
  getCountries: async (): Promise<Country[]> => {
    const BASE_API_URL = siteConfig.backendUrl;

    const url = new URL(`${BASE_API_URL}/api/collections/study-in/data/`);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.status}`);
    }

    const data: CountryResponse = await response.json();
    return data.results;
  },

  getCountryById: async (id: string): Promise<Country | null> => {
    const BASE_API_URL = siteConfig.backendUrl;

    const url = new URL(`${BASE_API_URL}/api/collections/study-in/data/${id}`);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch country by id: ${response.status}`);
    }

    const data: CountryResponse = await response.json();
    return data.results.length > 0 ? data.results[0] : null;
  },
};