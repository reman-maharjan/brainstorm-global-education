"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Loader2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useNewsletter } from "@/hooks/use-newsletter";
import { useState } from "react";
import { toast } from "sonner";

// Custom TikTok Icon from your SVG
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

// Footer Link Component
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <Link
      href={href}
      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

// Newsletter Form Component
const NewsletterForm = () => {
  const { mutate: subscribe, isPending } = useNewsletter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    subscribe(email, {
      onSuccess: () => {
        toast.success("Successfully subscribed to the newsletter!");
        setEmail("");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 w-full"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground px-4 py-2.5 text-sm outline-none placeholder:text-primary-foreground/50 rounded-md focus:bg-white/15 focus:border-white/30 transition-all"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isPending}
      />
      <button
        type="submit"
        disabled={isPending || !email}
        className="bg-secondary hover:bg-secondary/90 border border-white/20 text-primary-foreground px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex justify-center items-center"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
      </button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/white-logo.svg"
                alt="Brainstorm Global Education"
                height={60}
                width={180}
                className="object-contain"
              />
            </Link>

            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for studying abroad. Turning dreams into
              reality since 2015.
            </p>

            <div className="flex gap-2.5">
              <Link
                href="https://www.facebook.com/brainstormglobaleducation/"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.instagram.com/brainstorm_abroad_education/"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>

              <Link
                href="https://www.tiktok.com/@brainstorm_education"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-primary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/countries/usa">Study in USA</FooterLink>
              <FooterLink href="/countries/uk">Study in UK</FooterLink>
              <FooterLink href="/countries/australia">
                Study in Australia
              </FooterLink>
              <FooterLink href="/countries/canada">Study in Canada</FooterLink>
              <FooterLink href="/countries/new-zealand">
                Study in New Zealand
              </FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/ielts-pte">IELTS & PTE Classes</FooterLink>
              {/* <FooterLink href="/services">Our Services</FooterLink> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-primary-foreground">
              Contact Info
            </h3>
            <div className="space-y-5 text-sm">
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/70 shrink-0" />
                  <div>
                    <p className="text-primary-foreground/70 text-sm font-medium mb-1">
                      Address
                    </p>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      Baneshwor plaza c block 3rd floor, New Baneshwor,
                      Kathmandu
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 mt-0.5 text-primary-foreground/70 shrink-0" />
                  <div className="space-y-1.5">
                    <p className="text-primary-foreground/70 text-xs font-medium mb-1">
                      Email
                    </p>
                    <div className="space-y-1.5">
                      <Link
                        href="mailto:info@brainstorm.edu.np"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        info@brainstorm.edu.np
                      </Link>
                      <Link
                        href="mailto:apply@brainstorm.edu.np"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        apply@brainstorm.edu.np
                      </Link>
                      <Link
                        href="mailto:admission@brainstorm.edu.np"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        admission@brainstorm.edu.np
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 mt-0.5 text-primary-foreground/70 shrink-0" />
                  <div className="space-y-1.5">
                    <p className="text-primary-foreground/70 text-sm font-medium mb-1">
                      Phone
                    </p>
                    <div className="space-y-1.5">
                      <Link
                        href="tel:+977014583807"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        +977 014583807
                      </Link>
                      <Link
                        href="tel:+9779851192981"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        +977 9851192981
                      </Link>
                      <Link
                        href="tel:+9779801149881"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        +977 9801149881
                      </Link>
                      <Link
                        href="tel:+9779801149880"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        +977 9801149880
                      </Link>
                      <Link
                        href="tel:+61451133248"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                      >
                        <span className="text-primary-foreground/80 text-xs">
                          (Australia onshore inquiries)
                        </span>{" "}
                        <br />
                        +61 451 133 248
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">
              Newsletter
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-5 leading-relaxed">
              Join our subscribers list to get latest news and special offers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p className="text-center md:text-left">
            Copyright {new Date().getFullYear()}. All rights reserved by{" "}
            <span className="font-medium text-primary-foreground">
              Brainstorm Global Education
            </span>
          </p>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary-foreground transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
