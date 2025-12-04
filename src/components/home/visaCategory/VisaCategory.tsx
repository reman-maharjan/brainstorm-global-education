import React from "react";
import {
  Map,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Plane,
  Globe,
} from "lucide-react";

const categories = [
  {
    title: "Business Visa",
    desc: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    icon: Briefcase,
  },
  {
    title: "Working Visa",
    desc: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    icon: Globe,
  },
  {
    title: "Student Visa",
    desc: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    icon: GraduationCap,
  },
  {
    title: "Tourist Visa",
    desc: "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
    icon: Plane,
  },
];

const VisaCategory: React.FC = () => {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-18 text-center max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-2 text-gray-500 font-semibold text-xs tracking-widest uppercase mb-4">
        <Map size={16} /> VISA CATEGORY
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-12 sm:mb-16">
        Seeking Adventure Thrills <br />
        and Excitement Await
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 cursor-pointer">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#F4F6F5] p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-xl overflow-hidden shrink-0">
              {/* Placeholder for category image */}
              <div className="w-full h-full bg-gray-300 animate-pulse group-hover:bg-accent/20 transition-colors"></div>
            </div>

            <div className="text-left flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {cat.desc}
              </p>
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowUpRight size={18} />
                </div>
                <cat.icon
                  size={28}
                  className="text-secondary opacity-20 group-hover:opacity-100 transition-opacity sm:w-8 sm:h-8"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaCategory;
