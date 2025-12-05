"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useServices } from '@/hooks/pages/use-services';
import { Loader2, ArrowRight } from 'lucide-react';
import { stripHtml, truncateText } from '@/lib/text-utils';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, slug }) => {
  const cleanDescription = stripHtml(description);
  const truncatedDescription = truncateText(cleanDescription, 150);
  
  return (
    <div className= "p-6 rounded-2rem shadow-lg border  border-slate-50 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="mb-6 relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image src={image} alt={title} width={128} height={128} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-4 px-4">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 grow">
        {truncatedDescription}
      </p>
      
      <Link 
        href={`/services/${slug}`}
        className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors group"
      >
        Learn More
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const { data, isLoading, isError } = useServices();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load services. Please try again later.
      </div>
    );
  }

  const services = data?.results || [];

  if (services.length === 0) {
    return null; 
  }

  return (
    <section className="p-10 md:px-12 lg:px-20 bg-white max-w-[1400px] mx-auto w-full">
      <div className="text-left mb-12">
        <div className="flex items-center space-x-2 text-primary font-bold tracking-wider text-xs uppercase mb-3">
            <span>OUR SERVICES</span>
            <span className="text-xs">▲</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Adventure Unleashed<br/>
          <span className="text-primary">Discover Your Next</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc) => (
           <ServiceCard 
             key={svc.id} 
             title={svc.title}
             description={svc.description}
             image={svc.thumbnail_image || "https://picsum.photos/seed/edu/300/300"} 
             slug={svc.slug}
           />
        ))}
      </div>
    </section>
  );
};