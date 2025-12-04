"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AppointmentFormWithDialog } from "@/components/appointment/appointmentDialog";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <div className="sticky z-50 top-0 bg-white border-b border-slate-200">
      <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 z-50">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={300}
              height={50}
              className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button - Use AppointmentFormWithDialog directly */}
          <AppointmentFormWithDialog />
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
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium text-base py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8 px-2">
              <AppointmentFormWithDialog />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
