"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export const InnerPageHeader = ({
  title,
  breadcrumbs,
}: InnerPageHeaderProps) => {
  return (
    <div className="bg-background w-full">
      <div className="relative mx-auto flex min-h-[150px] w-full flex-col justify-center overflow-hidden py-8 sm:h-[150px] sm:py-10 md:h-[200px] md:py-12 lg:h-[250px]">
        {/* Optional: Subtle background decorative circle */}
        <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"></div>

        <div className="z-10 space-y-3 sm:space-y-4 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-1.5 text-sm font-medium sm:gap-2 sm:text-base md:text-lg text-white/90">
            <Link
              href="/"
              className="transition-colors hover:opacity-80 text-white font-bold"
            >
              Home
            </Link>

            {breadcrumbs.map((crumb, index) => (
              <Fragment key={index}>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#0854ee]" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:opacity-80 text-white font-bold capitalize"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="wrap-break-word capitalize font-bold">
                    {crumb.label}
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
