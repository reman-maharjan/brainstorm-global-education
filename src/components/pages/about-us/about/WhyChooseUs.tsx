import React from 'react';
import { Check, ArrowRight, Phone, MoveUpRight, Map } from 'lucide-react';
import Image from 'next/image';
// Simple Logo components for the brand strip
const LogoStrip = () => (
  <div className="flex flex-wrap justify-between items-center gap-8 mt-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
    <span className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-secondary rounded-full"></div> Segment</span>
    <span className="text-xl font-bold flex items-center gap-1">splunk<span className="text-primary">&gt;</span></span>
    <span className="text-xl font-bold flex items-center gap-2">HubSpot</span>
    <span className="text-xl font-bold flex items-center gap-2"><div className="w-3 h-3 bg-[#e91e63] rounded-full"></div> asana</span>
    <span className="text-xl font-bold flex items-center gap-2 font-serif italic">Airtasker</span>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <div className="p-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Left Side Images */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden h-[500px] lg:h-[600px] w-full relative group">
            <Image
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop" 
              alt="Traveler with backpack" 
              width={2874}
              height={1600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Badge */}
          <div className="absolute top-8 right-8 bg-primary text-white p-6 rounded-2xl w-32 h-32 flex flex-col items-center justify-center text-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform cursor-default">
            <span className="text-4xl font-extrabold block leading-none">25</span>
            <span className="text-xs font-medium leading-tight mt-1">Years Of experience</span>
          </div>

          {/* Floating Circle Stamp */}
          <div className="absolute -bottom-10 -left-6 hidden md:flex items-center justify-center bg-[#FDFDFD] rounded-full p-2 w-32 h-32 animate-[spin_10s_linear_infinite]">
            <div className="w-full h-full border border-dashed border-gray-300 rounded-full flex items-center justify-center relative">
               <MoveUpRight className="text-secondary" />
               <svg className="absolute w-full h-full p-1" viewBox="0 0 100 100">
                 <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                 <text className="text-[10px] uppercase font-bold tracking-widest fill-secondary">
                   <textPath href="#curve">
                     World Wide Access • Immigration Agency •
                   </textPath>
                 </text>
               </svg>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-gray-500 font-semibold text-xs tracking-widest uppercase">
            <Map size={16} /> WHY CHOOSE US
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight">
            Where Wanderlust Meets <br/>
            <span className="text-secondary">Dream Destinations</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#F4F6F5] p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                 </div>
                 <h4 className="font-bold text-secondary">Passport Plus</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={14} className="text-primary" /> Beyond Border Immigration
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={14} className="text-primary" /> Worldwide Visa Assistance
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F6F5] p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                 </div>
                 <h4 className="font-bold text-secondary">Global Entry</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={14} className="text-primary" /> GlobeTrot Visa Services
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={14} className="text-primary" /> Infinity Visa Solutions
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-secondary font-bold hover:bg-secondary hover:text-white transition-colors">
                Read More <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 animate-pulse">
                    <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Need help?</div>
                  <div className="text-sm font-bold text-secondary">(808) 555-0111</div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <LogoStrip />
    </div>
  );
};

export default WhyChooseUs;