"use client";

import Image from "next/image";
import { useGetOurClients } from "@/hooks/use-our-client";

const OurClients = () => {
  const { data: clients, isLoading } = useGetOurClients();

  if (isLoading) {
    return null;
  }

  if (!clients || clients.length === 0) {
    return null;
  }

  // Duplicate the list to create the seamless infinite loop effect
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="flex w-full flex-col p-8 items-center justify-center bg-gray-50">

      {/* Constrained width container */}
      <div className="group relative w-full max-w-4xl overflow-hidden">
        {/* The Scrolling Container */}
        <div
          className="group/marquee relative w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          {/* The Moving Strip */}
          <div className="flex w-max items-center gap-16 pr-16 md:gap-24 md:pr-24 animate-scroll">
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="logo-item shrink-0 cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <a
                  href={client.url ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={60}
                    className="h-8 w-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default OurClients;