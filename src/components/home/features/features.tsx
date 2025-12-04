import React from "react";
import { Globe, Ticket, Map } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Food and Wine Tours",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc.",
      icon: Globe,
    },
    {
      title: "Travel Opportunities",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc.",
      icon: Ticket,
    },
    {
      title: "Solo Travel Planning",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc.",
      icon: Map,
    },
  ];

  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-18 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f0f5f2] rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 md:p-8 lg:p-10 hover:-translate-y-2 transition-transform duration-300 ease-out group"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <feature.icon
                size={32}
                className="text-white"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
