import { siteConfig } from "@/config/site";
import { CountryChecklistResponse } from "@/types/country-checklist";

// Map country slugs to API IDs
const countryIdMap: Record<string, number> = {
  australia: 9,
  uk: 13,
  canada: 14,
  usa: 15,
  "new-zealand": 16,
};

export const countryChecklistApi = {
  getCountryChecklist: async (
    countrySlug: string
  ): Promise<CountryChecklistResponse | null> => {
    const API_BASE_URL = siteConfig.backendUrl || "https://brainstorm-global-education.nepdora.baliyoventures.com";
    const countryId = countryIdMap[countrySlug];

    if (!countryId) {
      return null;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/collections/country-cecklist/data/${countryId}/`,
        {
          method: "GET",
          cache: "no-store", // Prevent Next.js from caching the response
        }
      );

      if (!response.ok) {
        return null;
      }

      return response.json();
    } catch (error) {
      console.error("Failed to fetch country checklist:", error);
      return null;
    }
  },
};

