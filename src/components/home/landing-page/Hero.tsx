import React from "react";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-secondary">
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[720px] flex items-center max-w-7xl mx-auto">
        <div className="w-full h-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center px-5 py-12 sm:py-16">
          {/* Left Content */}
          <div className="space-y-10 max-w-2xl relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-bold text-white leading-[1.1] tracking-tight">
              Visa Made Easy <br />
              Dreams Made <br />
              Possible
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
              <button className="group flex items-center gap-3 px-6 sm:px-8 lg:px-9 py-3 sm:py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white hover:text-secondary transition-all duration-300 text-sm sm:text-base">
                Read More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-lg border border-white/10">
                  <Play
                    size={18}
                    className="text-white fill-white ml-1 sm:w-5 sm:h-5"
                  />
                </div>
                <span className="text-white font-medium text-sm sm:text-base lg:text-lg">
                  Watch Our Videos
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg h-[400px] sm:h-[500px] lg:h-[600px] relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8px border-white/10">
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
    </div>
  );
};

export default Hero;
