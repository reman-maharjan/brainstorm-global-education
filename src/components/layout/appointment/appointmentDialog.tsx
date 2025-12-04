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
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Loader2,
  Sparkles,
} from "lucide-react";
import { AppointmentFormData } from "@/types/pages/appointment";
import {
  useSubmitAppointmentForm,
  useGetAppointmentReasons,
} from "@/hooks/pages/use-appointment";


export const AppointmentForm3= () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    reason_id: undefined,
  });

  const { data: reasonsData } = useGetAppointmentReasons();
  const submitAppointment = useSubmitAppointmentForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitAppointment.mutate(formData, {
        onSuccess: () => {
          setFormData({
            full_name: "",
            email: "",
            phone: "",
            message: "",
            date: "",
            time: "",
            reason_id: undefined,
          });
        },
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: name === "reason_id" ? parseInt(value, 10) : value,
    }));
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary/5 via-white to-secondary/5 p-1 shadow-2xl">
        <div className="relative rounded-2xl bg-white p-8 md:p-12">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-linear-to-br from-primary to-secondary opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-16 translate-y-16 rounded-full bg-linear-to-tr from-secondary to-primary opacity-10 blur-3xl"></div>

          {/* Header */}
          <div className="relative mb-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-3xl font-bold text-secondary">
              Schedule Your Visit
            </h3>
            <p className="text-muted-foreground">
              Fill in your details and we&apos;ll get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Full Name */}
            <div className="group">
              <Label
                htmlFor="full_name"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
              >
                <User className="h-4 w-4 text-primary" />
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="full_name"
                name="full_name"
                type="text"
                value={formData.full_name}
                onChange={handleInputChange}
                required
                className="border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="John Doe"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <Label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <Label
                  htmlFor="phone"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Phone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <Label
                  htmlFor="date"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date || ""}
                  onChange={handleInputChange}
                  className="border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="group">
                <Label
                  htmlFor="time"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <Clock className="h-4 w-4 text-primary" />
                  Preferred Time
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time || ""}
                  onChange={handleInputChange}
                  className="border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Reason */}
            {reasonsData && reasonsData.length > 0 && (
              <div className="group">
                <Label
                  htmlFor="reason"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Reason for Visit
                </Label>
                <Select
                  value={formData.reason_id?.toString() || ""}
                  onValueChange={value =>
                    handleSelectChange("reason_id", value)
                  }
                >
                  <SelectTrigger className="border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    {reasonsData.map(reason => (
                      <SelectItem key={reason.id} value={reason.id.toString()}>
                        {reason.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Message */}
            <div className="group">
              <Label
                htmlFor="message"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                Additional Notes
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message || ""}
                onChange={handleInputChange}
                className="min-h-[100px] border-input transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us anything else you'd like us to know..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={submitAppointment.isPending }
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-lg cursor-pointer transition-all hover:shadow-xl"
            >
              {submitAppointment.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Booking Your Appointment...
                </>
              ) : (
                <>
                  <Calendar className="mr-2  h-5 w-5" />
                  Book Your Appointment
                </>
              )}
            </Button>

            {/* Trust Badge */}
            <p className="text-center text-sm text-muted-foreground">
              🔒 Your information is secure and will never be shared
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
