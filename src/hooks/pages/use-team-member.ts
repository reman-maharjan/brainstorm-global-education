import { useQuery } from "@tanstack/react-query";
import { teamAPI } from "@/services/pages/team-member";
import { TeamMember } from "@/types/pages/team";

export const useTeamMembers = () => {
  return useQuery<TeamMember[], Error>({
    queryKey: ["team-members"],
    queryFn: () => teamAPI.getTeamMembers(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
