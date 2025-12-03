import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Stats: React.FC = () => {
  return (
    <div className="w-full p-10">
      {/* Main Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Large Image */}
          <div className="lg:col-span-5">
            <div className="relative h-auto min-h-[300px] w-full sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="rounded-2xl object-cover sm:rounded-3xl md:rounded-[2.5rem]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:col-span-7">
            {/* Top Section: Text + Small Image */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent sm:h-18 sm:w-18 md:h-20 md:w-20">
                    <Globe className="h-8 w-8 text-white sm:h-9 sm:w-9 md:h-10 md:w-10" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Heading */}
                <h2 className="mb-3 text-xl font-bold leading-tight text-primary-dark sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
                  Get our best offers quickly
                </h2>

                {/* Description */}
                <p className="mb-6 text-xs text-gray-600 sm:mb-8 sm:text-sm md:text-base">
                  Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry&apos;s standard dummy
                </p>

                {/* Button */}
                <div>
                  <Button variant="outline" className="inline-flex items-center  gap-2 border-gray-200 hover:bg-accent text-white cursor-pointer">
                    Contact us <Globe size={16} />
                  </Button>
                </div>
              </div>

              {/* Right Small Image */}
              <div className="relative h-auto min-h-[250px] sm:min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                  alt="Business meeting"
                  fill
                  className="rounded-2xl object-cover sm:rounded-3xl md:rounded-[2.5rem]"
                />
              </div>
            </div>

            {/* Bottom Section: Statistics */}
            <Card className="bg-accent rounded-2xl shadow-xl text-white border-none sm:rounded-3xl md:rounded-[2.5rem]">
              <CardContent className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-extrabold leading-none sm:text-3xl md:text-4xl lg:text-5xl">10k+</div>
                    <div className="text-[10px] font-medium opacity-90 sm:text-xs md:text-sm">Complete project</div>
                  </div>
                  <Separator orientation="vertical" className="hidden md:block h-12 bg-white/20 self-center" />
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-extrabold leading-none sm:text-3xl md:text-4xl lg:text-5xl">20+</div>
                    <div className="text-[10px] font-medium opacity-90 sm:text-xs md:text-sm">Team member</div>
                  </div>
                  <Separator orientation="vertical" className="hidden md:block h-12 bg-white/20 self-center" />
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-extrabold leading-none sm:text-3xl md:text-4xl lg:text-5xl">5k+</div>
                    <div className="text-[10px] font-medium opacity-90 sm:text-xs md:text-sm">Winning award</div>
                  </div>
                  <Separator orientation="vertical" className="hidden md:block h-12 bg-white/20 self-center" />
                  <div className="text-center">
                    <div className="mb-1 text-2xl font-extrabold leading-none sm:text-3xl md:text-4xl lg:text-5xl">100+</div>
                    <div className="text-[10px] font-medium opacity-90 sm:text-xs md:text-sm">Happy clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;