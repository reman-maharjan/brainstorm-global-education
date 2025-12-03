import React from 'react';
import { ArrowRight, Phone, BookCheck, Globe2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-xl h-[500px]">
                <Image
                    src="https://picsum.photos/id/6/800/600" 
                    alt="Laptop Workspace" 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center text-white p-4 shadow-lg border-4 border-white animate-spin">
            </div>
          </div>

          <div>
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Why Choose Us</span>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where Wanderlust Meets Dream Destinations</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <Card className="bg-primary/5 border-primary/20 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                            <BookCheck size={20} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Passport Plus</h3>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li className="flex items-center gap-2"><Badge variant="outline" className="text-primary border-primary px-1">✓</Badge> Beyond Border Immigration</li>
                            <li className="flex items-center gap-2"><Badge variant="outline" className="text-primary border-primary px-1">✓</Badge> Worldwide Visa Assistance</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                            <Globe2 size={20} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Global Entry</h3>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li className="flex items-center gap-2"><Badge variant="outline" className="text-primary border-primary px-1">✓</Badge> GlobeTrot Visa Services</li>
                            <li className="flex items-center gap-2"><Badge variant="outline" className="text-primary border-primary px-1">✓</Badge> Infinity Visa Solutions</li>
                        </ul>
                    </CardContent>
                </Card>
             </div>

             <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button variant="outline" className="border-gray-300 cursor-pointer text-white hover:bg-primary">
                    Read More <ArrowRight size={16} className="ml-2" />
                </Button>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                        <Phone size={18} />
                    </div>
                    <div className="flex flex-col">
                        <Badge variant="secondary" className="text-xs  font-bold mb-1">NEED HELP?</Badge>
                        <span className="text-sm font-bold text-gray-800">(808) 555-0111</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;