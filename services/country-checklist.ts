import { siteConfig } from "@/config/site";
import { CountryChecklistResponse } from "@/types/country-checklist";
import { apiFetch } from "./api-clients";

export const countryChecklistApi = {
  /**
   * Fetch checklist by checking the country name/slug from the backend data
   * instead of hard‑coding IDs locally.
   */
  getCountryChecklist: async (
    countrySlug: string,
  ): Promise<CountryChecklistResponse | null> => {
    const API_BASE_URL =
      siteConfig.backendUrl ||
      "https://brainstorm-global-education.nepdora.baliyoventures.com";

    const normalized = countrySlug.toLowerCase();

    try {
      // Fetch all country checklist entries and then match by name/slug
      const response = await apiFetch(
        `${API_BASE_URL}/api/collections/country-checklist/data/`,
        {
          method: "GET",
          cache: "no-store", // Prevent Next.js from caching the response
        },
      );

      if (!response.ok) {
        return null;
      }

      const json = await response.json();
      const items: CountryChecklistResponse[] = Array.isArray(json)
        ? json
        : Array.isArray(json?.results)
          ? json.results
          : [];

      if (!items.length) {
        return null;
      }

      const match = items.find((item) => {
        const name = item?.data?.name?.toLowerCase?.();
        const slug = item?.data?.slug?.toLowerCase?.();

        return slug === normalized || name === normalized;
      });

      return match ?? null;
    } catch (error) {
      console.error("Failed to fetch country checklist:", error);
      return null;
    }
  },
};
