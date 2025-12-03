import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-secondary overflow-hidden min-h-[600px] lg:min-h-[720px] flex items-center">
      
      {/* Background decoration: Eiffel Tower outline */}

      {/* Lime green decorative circle on the right edge */}
      <div className="absolute -right-[10%] bottom-[-10%] w-[500px] h-[500px] bg-secondary rounded-full z-0"></div>

      <div className="w-full h-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-8 md:px-16 py-16">
        
        {/* Left Content */}
        <div className="space-y-10 max-w-2xl relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold text-white leading-[1.1] tracking-tight">
            Visa Made Easy <br />
            Dreams Made <br />
            Possible
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="group flex items-center gap-3 px-9 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white hover:text-secondary transition-all duration-300">
              Read More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 bg-secondary/80 rounded-full flex items-center justify-center group-hover:bg- primary transition-colors duration-300 shadow-lg border border-white/10">
                <Play size={20} className="text-white fill-white ml-1" />
              </div>
              <span className="text-white font-medium text-lg">Watch Our Videos</span>
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg h-[600px] relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8px border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2940&auto=format&fit=crop" 
                  alt="Happy traveler in Paris" 
                  width={1600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 gradient-to-t from-secondary/40 to-transparent"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;