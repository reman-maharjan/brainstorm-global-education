import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const VideoGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Videos</h2>
        <p className="text-gray-500 mb-12">Watch our latest content and updates</p>

        <div className="relative group">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar justify-center">
                {[1, 2, 3].map((item) => (
                    <Card key={item} className="w-80 h-[450px] bg-black rounded-xl relative overflow-hidden snap-center cursor-pointer group/card border-none">
                        <Image
                            src={`https://picsum.photos/400/600?random=${item + 10}`} 
                            alt="Video Thumbnail" 
                            width={400}
                            height={600}
                            className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity"
                        />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover/card:scale-110 transition-transform">
                                <Play fill="white" className="text-white ml-1" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            
            <Button size="icon" variant="secondary" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg z-10 md:-left-12">
                <ChevronLeft size={24} />
            </Button>
            <Button size="icon" variant="secondary" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg z-10 md:-right-12">
                <ChevronRight size={24} />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;