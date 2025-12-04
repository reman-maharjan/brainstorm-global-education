"use client";

import { usePathname } from "next/navigation";
import { InnerPageHeader, BreadcrumbItem } from "./InnerPageHeader";

export function ConditionalPageHeader() {
  const pathname = usePathname();

  // Don't show header on home page
  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = segments.map((segment, index) => {
    const isLast = index === segments.length - 1;
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    // Format label: replace hyphens with spaces and capitalize
    const label = segment
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      label,
      href: isLast ? undefined : href,
    };
  });

  // The title is usually the last segment
  const title =
    breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1].label : "";

  return <InnerPageHeader title={title} breadcrumbs={breadcrumbs} />;
}
