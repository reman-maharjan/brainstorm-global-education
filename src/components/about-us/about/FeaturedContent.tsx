import React from 'react';
import { FileText } from 'lucide-react';

export const FeaturedContent: React.FC = () => {
  const items = [
    {
      id: "01",
      title: "Visa Voyage Agency",
      desc: "Lorem Ipsum is simply dummy text the printing and typeser"
    },
    {
      id: "02",
      title: "International Access Visas",
      desc: "Lorem Ipsum is simply dummy text the printing and typeser"
    },
    {
      id: "03",
      title: "Gateway to Global Citizenship",
      desc: "Lorem Ipsum is simply dummy text the printing and typeser"
    }
  ];

  return (
    <section className="p-10 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full relative bg-white">
       {/* Background decorative curve */}
       <div className="absolute top-1/2 left-0 w-full h-[500px] -z-10 opacity-30 pointer-events-none transform -translate-y-1/2 hidden lg:block">
         <svg viewBox="0 0 1440 320" className="w-full h-full">
           <path fill="none" stroke="#e2e8f0" strokeWidth="2" d="M0,160 C320,300 600,-100 1440,160"></path>
         </svg>
       </div>

      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-2 text-teal-600 font-semibold tracking-wider text-sm uppercase mb-3">
            <FileText className="w-4 h-4" />
            <span>Discover Our Latest Offerings</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Content</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={item.id} className={`group bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${index === 1 ? 'md:mt-12' : ''} ${index === 2 ? 'lg:mt-24' : ''}`}>
             
            {/* Large outlined number */}
            <div className="text-6xl md:text-7xl font-bold text-transparent  " style={{ WebkitTextStroke: "1px #0b8f81" }}>
              {item.id}
            </div>
            
            <div className="mt-6 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            {/* Hover blob effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};