import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { appointmentAPI } from "@/services/pages/appointment";
import {
  AppointmentFilters,
  AppointmentFormData,
} from "@/types/pages/appointment";
import { toast } from "sonner";

// Get appointments with filters
export const useGetAppointments = (filters: AppointmentFilters = {}) => {
  return useQuery({
    queryKey: ["appointments", filters],
    queryFn: () => appointmentAPI.getAppointments(filters),
    staleTime: 30000, // 30 seconds
  });
};

// Get appointment reasons
export const useGetAppointmentReasons = () => {
  return useQuery({
    queryKey: ["appointment-reasons"],
    queryFn: () => appointmentAPI.getAppointmentReasons(),
    staleTime: 300000,
  });
};

// Submit appointment form (for public-facing form)
export const useSubmitAppointmentForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AppointmentFormData) =>
      appointmentAPI.createAppointment(data),
    onSuccess: () => {
      toast.success("Appointment booked successfully!");
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to book appointment");
    },
  });
};
