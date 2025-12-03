import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => (
  <div className= "p-6 rounded-2rem shadow-lg border  border-slate-50 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
    <div className="mb-6 relative">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image src={image} alt={title} width={128} height={128} className="w-full h-full object-cover" />
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-primary mb-4 px-4">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-4">
      {description}
    </p>
  </div>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Educational Consultancy",
      image: "https://picsum.photos/seed/edu/300/300",
      description: "Guiding students in selecting the right colleges, courses, countries, scholarships, visa processing, and career paths. Helps students and parents make informed academic decisions."
    },
    {
      title: "Career & Personal Development Consulting",
      image: "https://picsum.photos/seed/career/300/300",
      description: "Helps individuals improve professional skills, choose the right career direction, plan goals, build resumes, and prepare for interviews. Offers coaching for long-term growth."
    },
    {
      title: "Business Strategy Consulting",
      image: "https://picsum.photos/seed/business/300/300",
      description: "Assists companies in strategic planning, growth opportunities, market expansion, competitive analysis, and improving business performance."
    },
    {
      title: "Financial & Investment Consulting",
      image: "https://picsum.photos/seed/finance/300/300",
      description: "Provides expert advice on budgeting, investment planning, taxation, retirement planning, and corporate financial decisions to maximize profit and reduce risk."
    }
  ];

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
        {services.map((svc, i) => (
           <ServiceCard  key={i} {...svc} />
        ))}
      </div>
    </section>
  );
};