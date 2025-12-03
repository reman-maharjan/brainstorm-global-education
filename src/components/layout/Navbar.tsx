import React from 'react';
import {  ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5">
        <div className="relative">
        </div>
        <Image src="/brainstrom.svg" alt="Logo" width={300} height={50} />
      </div>

      {/* Navigation Links */}
      <div className="hidden xl:flex items-center gap-8">
    <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary font-medium">FAQ</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
            
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Trigger */}
        <button className="xl:hidden text-[#013D2F]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button className="hidden md:flex items-center gap-2 bg-accent hover:bg-[#72b313] text-white pl-7 pr-5 py-3.5 rounded-full text-sm font-bold transition-all shadow-sm group">
          Get An Appointment
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
             <ArrowRight size={14} strokeWidth={3} />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;