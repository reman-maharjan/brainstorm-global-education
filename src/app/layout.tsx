import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ConditionalPageHeader } from "@/components/layout/breadcrumb/ConditionalPageHeader";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brainstorm Global Education",
  description: "Visa Made Easy, Dreams Made Possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white ">
        <Providers>
          <Navbar />
          <ConditionalPageHeader />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
