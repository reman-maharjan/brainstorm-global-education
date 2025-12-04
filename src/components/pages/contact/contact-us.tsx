'use client';
import React, { useState } from "react";
import { Send, Phone, Mail, Loader2, User } from "lucide-react";
import Image from "next/image";
import { useSubmitContactForm } from "@/hooks/pages/use-contact";
import { ContactFormData } from "@/types/pages/contact";

import { toast } from "sonner";

export default function SimpleContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const { mutate: submitContact, isPending } = useSubmitContactForm();

  const handleSubmit = () => {
    if (!formData.name || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    submitContact(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          
          {/* Image Section */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <Image
              src="/contact.png"
              alt="Happy traveler"
              width={800}
              height={800}
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                <span>Contact Information</span>
                <Send size={12} className="rotate-45 fill-primary text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-secondary lg:text-5xl">
                Let Your Wanderlust Guide You
              </h1>
            </div>

            <div className="rounded-3xl bg-primary/10 p-8">
              <div className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-secondary">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-full border-0 bg-white px-5 py-3 pr-10 text-sm focus:ring-2 focus:ring-primary"
                    />
                    <User size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary" />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-full border-0 bg-white px-5 py-3 pr-10 text-sm focus:ring-2 focus:ring-primary"
                      />
                      <Send size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-45 text-secondary" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary">
                      Your Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone_number"
                        placeholder="Your Phone"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="w-full rounded-full border-0 bg-white px-5 py-3 pr-10 text-sm focus:ring-2 focus:ring-primary"
                      />
                      <Phone size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-secondary">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Write Message.."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full resize-none rounded-3xl border-0 bg-white px-5 py-4 pr-10 text-sm focus:ring-2 focus:ring-primary"
                    />
                    <Mail size={16} className="absolute right-4 top-5 text-secondary" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isPending}
                  className="w-full rounded-full bg-primary py-4 font-semibold text-white transition hover:bg-primary/90 disabled:opacity-50"
                >
                  {isPending ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}