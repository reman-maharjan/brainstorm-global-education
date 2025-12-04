import {  TestimonialResponse } from "@/types/testimonial";

export const testimonialsApi = {
  // Get all testimonials
  getAll: async (): Promise<TestimonialResponse> => {
    const response = await fetch('/api/testimonials', {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }

    return response.json();
  },

}