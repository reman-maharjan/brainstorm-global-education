'use client';

import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
    { href: '/services', label: 'Services' },
    { href: '/faq', label: 'FAQ' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <nav className="flex sticky bg-white z-50 top-0 left-0 right-0 items-center justify-between py-5 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5 z-50">
        <Link href="/">
          <Image 
            src="/brainstrom.svg" 
            alt="Logo" 
            width={300} 
            height={50} 
            className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden xl:flex items-center gap-4">
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground pl-7 pr-5 py-3.5 rounded-full text-sm font-bold transition-all shadow-sm group">
          Get An Appointment
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowRight size={14} strokeWidth={3} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="xl:hidden text-primary z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-40 xl:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-foreground hover:text-primary font-medium text-lg py-2 border-b border-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <button className="mt-8 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-full text-sm font-bold transition-all shadow-sm">
            Get An Appointment
            <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;