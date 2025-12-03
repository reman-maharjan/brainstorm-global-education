"use client";

import { usePathname } from "next/navigation";
import { InnerPageHeader } from "./InnerPageHeader";

export function ConditionalPageHeader() {
  const pathname = usePathname();
  
  // Don't show header on home page
  if (pathname === "/") {
    return null;
  }

  // Extract page title from pathname
  let title = pathname.substring(1); // Remove leading slash
  
  // Convert hyphens to spaces and capitalize
  title = title
    .split("/")[0] // Get first segment
    .replace(/-/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <InnerPageHeader title={title} currentPage={title} />;
}
