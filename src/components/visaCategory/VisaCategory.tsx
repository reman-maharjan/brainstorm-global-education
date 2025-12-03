import React from 'react';
import { Map, ArrowUpRight, Briefcase, GraduationCap, Plane, Globe } from 'lucide-react';

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
    }
];

const VisaCategory: React.FC = () => {
  return (
    <div className="p-18 px-4 sm:px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-500 font-semibold text-xs tracking-widest uppercase mb-4">
            <Map size={16} /> VISA CATEGORY
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#013D2F] mb-16">
            Seeking Adventure Thrills <br />
            and Excitement Await
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
                <div key={idx} className="bg-[#F4F6F5] p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                         {/* Placeholder for category image */}
                         <div className="w-full h-full bg-gray-300 animate-pulse group-hover:bg-#84cc16/20 transition-colors"></div>
                    </div>
                    
                    <div className="text-left flex-1">
                        <h3 className="text-xl font-bold text-[#013D2F] mb-2">{cat.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                        <div className="flex justify-between items-center">
                             <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-#84cc16 group-hover:bg-#84cc16 group-hover:text-accent transition-colors">
                                <ArrowUpRight size={18} />
                             </div>
                             <cat.icon size={32} className="text-[#013D2F] opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default VisaCategory;