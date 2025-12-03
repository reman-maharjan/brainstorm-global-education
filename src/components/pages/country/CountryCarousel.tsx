import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Map } from "lucide-react";
import Image from "next/image";

const countries = [
  {
    name: "Working Visa",
    desc: "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2852&auto=format&fit=crop",
  },
  {
    name: "Student Visa",
    desc: "Experience world-class education with seamless visa processing.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tourist Visa",
    desc: "Explore new horizons and create unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=2864&auto=format&fit=crop",
  },
  {
    name: "Business Visa",
    desc: "Expand your business globally with our expert assistance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Transit Visa",
    desc: "Short term stops made easy for your long journeys.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2948&auto=format&fit=crop",
  },
];

const CountryCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const AUTO_SLIDE_DELAY = 4500;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % countries.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + countries.length) % countries.length);
  };

  useEffect(() => {
    const container = carouselRef.current;
    const currentCard = container?.children[activeIndex] as
      | HTMLElement
      | undefined;

    if (container && currentCard) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = currentCard.offsetLeft + currentCard.offsetWidth / 2;
      const scrollLeft = cardCenter - containerCenter;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % countries.length);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-secondary py-20 rounded-[48px] mx-4 sm:mx-8 relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="lines"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 0H20L0 20M40 40V20L20 40"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      <div className="px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-xs tracking-widest uppercase">
              <Map size={16} /> OUR COUNTRIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Making Memories Around <br />
              World Unforgettable
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border bg-accent border-accent flex items-center justify-center text-secondary hover:bg-white hover:text-secondary transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Items */}
        <div
          className="flex gap-6 overflow-x-hidden scroll-smooth"
          ref={carouselRef}
        >
          {countries.map((country, index) => {
            // Calculate position relative to active index to determine style
            let position = index - activeIndex;
            if (position < 0) position += countries.length;

            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`
                        h-[400px] rounded-3xl overflow-hidden relative transition-all duration-500 ease-in-out cursor-pointer
                        ${
                          isActive
                            ? "ring-4 ring-accent/50 scale-105"
                            : "opacity-60 grayscale hover:grayscale-0"
                        }
                    `}
                style={{
                  flex: `0 0 ${isActive ? 340 : 280}px`,
                  width: isActive ? 340 : 280,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={country.image}
                  alt={country.name}
                  width={1600}
                  height={600}
                  className="w-full h-full object-cover"
                />

                {/* Active Card Overlay */}
                {isActive ? (
                  <div className="absolute inset-0 bg-white/95 p-8 flex flex-col justify-center text-secondary">
                    <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
                    <p className="text-sm font-medium leading-relaxed mb-6">
                      {country.desc}
                    </p>
                    <button className="flex items-center gap-2 text-sm font-bold border border-secondary rounded-full px-6 py-3 w-fit hover:bg-secondary hover:text-white transition-colors">
                      Apply Now <ArrowRight size={14} />
                    </button>

                    {/* Decorative circle */}
                    <div className="absolute top-6 right-6 w-12 h-12 border-2 border-secondary/20 rounded-full"></div>
                  </div>
                ) : (
                  // Inactive Card minimal overlay
                  <div className="absolute top-6 right-6 w-10 h-10 border-2 border-white/50 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryCarousel;
