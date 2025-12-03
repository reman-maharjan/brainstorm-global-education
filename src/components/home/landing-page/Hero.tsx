import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-secondary overflow-hidden min-h-[600px] flex items-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        {/* Decorative Wave/Line on left */}
        <div className="absolute left-10 bottom-10 hidden lg:block opacity-20">
             <svg width="100" height="300" viewBox="0 0 100 300" fill="none" stroke="white" strokeWidth="2">
                 <path d="M50 0 C20 50 80 100 50 150 C20 200 80 250 50 300" />
                 <path d="M30 20 C0 70 60 120 30 170 C0 220 60 270 30 320" />
             </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Visa Made Easy <br/>
              Dreams Made <br/>
              Possible
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary group">
                Read More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
              </Button>
              <Button variant="ghost" className="text-white hover:text-accent hover:bg-transparent">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary mr-3">
                    <Play size={16} fill="currentColor" />
                </div>
                Contact-us
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-t-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="https://picsum.photos/id/447/800/1000" 
                alt="Student Graduate" 
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Circle Bottom Right */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-64 md:h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            
             {/* Green shape bottom right overlay from design */}
             <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/80 rounded-full z-20 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;