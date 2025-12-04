import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Loader2,
  CalendarIcon,
  CheckCircle2,
} from "lucide-react";
import { AppointmentFormData } from "@/types/pages/appointment";
import {
  useSubmitAppointmentForm,
  useGetAppointmentReasons,
} from "@/hooks/pages/use-appointment";
import { format } from "date-fns";

export const AppointmentFormWithDialog = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    reason_id: undefined,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data: reasonsData } = useGetAppointmentReasons();
  const submitAppointment = useSubmitAppointmentForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitAppointment.mutate(formData, {
      onSuccess: () => {
        // Reset form
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          message: "",
          date: "",
          time: "",
          reason_id: undefined,
        });
        // Keep dialog open to show success state
      },
      onError: () => {
        // Handle error if needed
      },
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: name === "reason_id" ? parseInt(value, 10) : value,
    }));
  };

  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open && !submitAppointment.isPending) {
      // Reset form when dialog closes (except during submission)
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        time: "",
        reason_id: undefined,
      });
    }
  };

  const getSelectedReasonName = () => {
    if (!formData.reason_id || !reasonsData) return "";
    const reason = reasonsData.find((r) => r.id === formData.reason_id);
    return reason?.name || "";
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Book Appointment
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {/* Success State */}
        {submitAppointment.isSuccess ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Appointment Booked Successfully!
              </DialogTitle>
              <DialogDescription className="mt-4 text-gray-600">
                We&apos;ve received your appointment request and will contact
                you shortly to confirm.
              </DialogDescription>
            </DialogHeader>

            <Button
              onClick={() => setIsDialogOpen(false)}
              className="mt-8 w-full bg-primary hover:bg-primary/90"
            >
              Close
            </Button>
          </div>
        ) : (
          // Form State
          <>
            <DialogHeader className="border-b p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-gray-900">
                    Schedule Appointment
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Fill in your details and we&apos;ll get back to you shortly
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="full_name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="full_name"
                      name="full_name"
                      type="text"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 border-gray-300 focus:border-primary focus:ring-primary/20"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary/20"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="date"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date || ""}
                        onChange={handleInputChange}
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="time"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Time
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time || ""}
                        onChange={handleInputChange}
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Reason */}
                {reasonsData && reasonsData.length > 0 && (
                  <div className="space-y-2">
                    <Label
                      htmlFor="reason"
                      className="text-sm font-medium text-gray-700"
                    >
                      Reason for Visit
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Select
                        value={formData.reason_id?.toString() || ""}
                        onValueChange={(value) =>
                          handleSelectChange("reason_id", value)
                        }
                      >
                        <SelectTrigger className="pl-10 border-gray-300 focus:border-primary focus:ring-primary/20">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {reasonsData.map((reason) => (
                            <SelectItem
                              key={reason.id}
                              value={reason.id.toString()}
                            >
                              {reason.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Additional Notes
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message || ""}
                    onChange={handleInputChange}
                    className="min-h-[100px] border-gray-300 focus:border-primary focus:ring-primary/20"
                    placeholder="Tell us anything else you'd like us to know..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={submitAppointment.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold"
                >
                  {submitAppointment.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Booking Your Appointment...
                    </>
                  ) : (
                    <>
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      Confirm Appointment
                    </>
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-center text-xs text-gray-500">
                  🔒 Your information is secure and will never be shared with
                  third parties
                </p>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
