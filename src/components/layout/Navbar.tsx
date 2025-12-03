'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <Link href="/">
                <Image src="/brainstrom.svg" alt="Brainstrom Logo" className='cursor-pointer' width={200} height={200} />
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary font-medium">FAQ</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
            <Link href="/story" className="text-gray-700 hover:text-primary font-medium">Story</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
            <Button className="text-white cursor-pointer">
              Book Appointment
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary font-medium">FAQ</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
            <Link href="/story" className="text-gray-700 hover:text-primary font-medium">Story</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
            <Button className="text-white cursor-pointer">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;