import React from 'react';
import { Phone, CheckCircle, Send, Facebook, Twitter, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="p-10 bg-primary-dark relative mt-20">
      {/* Floating CTA Banner */}
      <div className="max-w-6xl mx-auto relative -top-16">
        <div className="bg-primary-dark rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden border border-white/10">
            {/* Background pattern simulation */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex items-center gap-8 relative z-10 w-full md:w-auto mb-8 md:mb-0">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white">
                        <Phone size={20} />
                    </div>
                    <div className="text-white font-bold">
                        Need Any Support <br/> For Tour And Visa?
                    </div>
                </div>
                <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white">
                        <CheckCircle size={20} />
                    </div>
                    <div className="text-white font-bold">
                        Are You Ready For <br/> Get Started Travelling?
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-0 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
                 <div className="flex items-center space-x-2">
                     <div className="bg-white/10 p-2 rounded-lg">
                         <GraduationCap size={24} className="text-white" />
                     </div>
                     <div className="flex flex-col">
                         <span className="font-bold text-lg leading-none tracking-tight">BRAINSTORM</span>
                         <span className="text-[10px] text-blue-300 font-semibold tracking-widest uppercase">Global Education</span>
                     </div>
                 </div>
                 <p className="text-sm text-gray-300 leading-relaxed">
                     Innovative solutions for a modern world. We build amazing experiences.
                 </p>
                 <div className="flex gap-4">
                     <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook size={14}/></a>
                     <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter size={14}/></a>
                 </div>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-6">Resources</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer"><span className="text-accent">›</span> Blog</li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer"><span className="text-accent">›</span> Services</li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer"><span className="text-accent">›</span> Story</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-6">Company</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer"><span className="text-accent">✓</span> About</li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer"><span className="text-accent">✓</span> Contact us</li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer"><span className="text-accent">✓</span> Faq</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-lg mb-6">Join our Newsletter</h3>
                <p className="text-sm text-gray-300 mb-4">Get the latest news and updates delivered to your inbox.</p>
                <div className="relative">
                    <Input 
                        type="email" 
                        placeholder="Email Address" 
                        className="bg-white text-gray-900 rounded-full pr-12"
                    />
                    <Button size="icon" className="absolute right-1 top-1 rounded-full">
                        <Send size={16} />
                    </Button>
                </div>
            </div>
        </div>

        <Separator className="mt-16 bg-white/10" />
        <div className="pt-8 text-center text-xs text-gray-400">
            © 2025 Routex. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;