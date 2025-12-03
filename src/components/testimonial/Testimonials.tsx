import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Albert Flores",
    role: "Web Designer",
    image: "https://picsum.photos/id/342/200/200",
    quote: "We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry."
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Product Manager",
    image: "https://picsum.photos/id/338/200/200",
    quote: "The team guided our entire relocation—incredibly smooth and professional. Their expertise made every step stress-free."
  },
  {
    id: 3,
    name: "Courtney Henry",
    role: "Entrepreneur",
    image: "https://picsum.photos/id/64/200/200",
    quote: "I loved the personalized approach. They listened carefully, tailored the solution, and delivered faster than we expected."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-500">Don&apos;t just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id} 
                  className="group cursor-pointer rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                    <CardContent className="p-8 text-center sm:p-12">
                        <div className="mb-6 flex justify-center">
                            <div className="relative h-32 w-32 overflow-hidden rounded-full">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="mb-2 text-3xl font-bold text-gray-900">
                            {testimonial.name}
                        </h3>

                        <p className="mb-4 text-lg text-gray-600">{testimonial.role}</p>

                        <div className="relative">
                            <blockquote className="relative z-10 text-lg leading-relaxed font-medium text-gray-800">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;