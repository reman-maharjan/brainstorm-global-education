
import { useQuery } from "@tanstack/react-query";
import { countryAPI } from "@/services/country";

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: countryAPI.getCountries,
  });
};

export const useCountryBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["country", slug],
    queryFn: async () => {
      const countries = await countryAPI.getCountries();
      return countries.find((country) => country.data.slug === slug) || null;
    },
    enabled: !!slug,
  });
};
