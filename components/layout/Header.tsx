"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21,7H20a4,4,0,0,1-4-4H12V14.5a2.5,2.5,0,1,1-4-2V8.18a6.5,6.5,0,1,0,8,6.32V9.92A8,8,0,0,0,20,11h1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const countries = [
  { name: "USA", path: "/countries/usa" },
  { name: "UK", path: "/countries/uk" },
  { name: "Australia", path: "/countries/australia" },
  { name: "Canada", path: "/countries/canada" },
  { name: "New Zealand", path: "/countries/new-zealand" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-primary-foreground/90">
                Free Consultation Available | Turning dreams into reality since
                2016
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 ml-4">
              <Link
                href="https://www.facebook.com/brainstormglobaleducation/"
                target="_blank"
                className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://www.instagram.com/brainstorm_abroad_education/"
                target="_blank"
                className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@brainstorm_education"
                target="_blank"
                className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/images/logo.svg" alt="Logo" height={200} width={200} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                isActive("/") ? "" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                isActive("/about") ? "" : ""
              }`}
            >
              About Us
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 outline-none">
                Study Destinations <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="bg-background border border-border rounded-md shadow-lg min-w-[200px] ">
                  {countries.map((country) => (
                    <Link
                      key={country.path}
                      href={country.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Study in {country.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/ielts-pte"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                isActive("/ielts-pte") ? "" : ""
              }`}
            >
              IELTS & PTE
            </Link>
            <Link
              href="/latest-updates"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                isActive("/latest-updates") ? "" : ""
              }`}
            >
              Latest Updates
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                isActive("/contact") ? "" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-medium hover:bg-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-medium hover:bg-secondary transition-colors"
              >
                About Us
              </Link>
              <div className="px-4 py-2 font-medium text-muted-foreground">
                Study Destinations
              </div>
              {countries.map((country) => (
                <Link
                  key={country.path}
                  href={country.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-2 hover:bg-secondary transition-colors"
                >
                  Study in {country.name}
                </Link>
              ))}
              <Link
                href="/ielts-pte"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-medium hover:bg-secondary transition-colors"
              >
                IELTS & PTE
              </Link>
              <Link
                href="/latest-updates"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-medium hover:bg-secondary transition-colors rounded"
              >
                Latest Updates
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-medium hover:bg-secondary transition-colors rounded"
              >
                Contact
              </Link>
              <div className="px-4 pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
