'use client';
import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Loader2 } from "lucide-react";
import Image from "next/image";

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ email: "", phone: "", address: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          
          {/* Image Section */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
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
                <Send size={12} className="rotate-45 fill-green-500 text-green-500" />
              </div>
              <h1 className="text-4xl font-bold text-teal-900 lg:text-5xl">
                Let Your Wanderlust Guide You
              </h1>
            </div>

            <div className="rounded-3xl bg-green-50 p-8">
              <div className="space-y-5">
                
                {/* Email and Phone Row */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-teal-900">
                      Your Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-full border-0 bg-white px-5 py-3 pr-10 text-sm focus:ring-2 focus:ring-green-400"
                      />
                      <Send size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-45 text-teal-900" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-teal-900">
                      Your Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-full border-0 bg-white px-5 py-3 pr-10 text-sm focus:ring-2 focus:ring-green-400"
                      />
                      <Phone size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-900" />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-teal-900">
                    Your Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full rounded-full border-0 bg-white px-5 py-3 pr-10 text-sm focus:ring-2 focus:ring-green-400"
                    />
                    <MapPin size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-900" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-teal-900">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Write Message.."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full resize-none rounded-3xl border-0 bg-white px-5 py-4 pr-10 text-sm focus:ring-2 focus:ring-green-400"
                    />
                    <Mail size={16} className="absolute right-4 top-5 text-teal-900" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-green-500 py-4 font-semibold text-white transition hover:bg-green-600 disabled:opacity-50"
                >
                  {isSubmitting ? (
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