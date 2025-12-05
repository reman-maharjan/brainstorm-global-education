import { useQuery } from "@tanstack/react-query";
import { ourClientAPI } from "@/services/our-client";
import {
  OurClientFilters,
  OurClient,
} from "@/types/our-client";

export const useGetOurClients = (filters: OurClientFilters = {}) => {
  return useQuery<OurClient[]>({
    queryKey: ["our-clients", filters],
    queryFn: () => ourClientAPI.getOurClients(filters),
  });
};

