import React from "react";
import {
  Plane,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-20 relative mt-20">
      {/* Green Floating CTA Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-secondary rounded-3xl sm:rounded-full p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10 gap-6">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center md:text-left">
            Need Any Support For <br /> Tour And Visa?
          </h3>
        </div>

        <div className="h-12 w-px bg-white/20 hidden md:block mx-8"></div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center md:text-left">
            Are You Ready For Get <br /> Started Travelling?
          </h3>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-b border-white/10">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary">
              <Plane size={20} className="-rotate-45" fill="currentColor" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              RouteX
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Corporate business typically refers to large-scale mansola it
            enterprises or organizat
          </p>
          <div className="flex gap-3 sm:gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
              >
                <Icon size={16} className="sm:w-3.5 sm:h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              "Mistakes To Avoid",
              "Your Startup",
              "Knew About Fonts",
              "Knew About Fonts",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-primary cursor-pointer"
              >
                <span className="text-primary">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Useful Link</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              "Latest News",
              "Careers",
              "General Inquiries",
              "Case Studies",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-primary cursor-pointer"
              >
                <span className="text-primary">&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-6">Subscribe Our Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Corporate business typically refers to large-scale mansola it.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full bg-secondary/80 border border-white/10 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-primary"
            />
            <button className="absolute right-1 top-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary hover:bg-white transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© Yoursitename 2024 | All Rights Reserved</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Trams & Condition
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
