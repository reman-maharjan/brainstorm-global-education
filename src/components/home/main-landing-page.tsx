"use client";

import Hero from "./landing-page/Hero";
import WhyChooseUs from "../pages/about-us/about/WhyChooseUs";
import Stats from "../pages/stats/Stats";
import Blog from "../pages/blog/Blog";
import Features from "./features/features";
import VisaCategory from "./visaCategory/VisaCategory";
import Testimonials from "../pages/testimonial/Testimonials";
import SimpleContactForm from "../pages/contact/contact-us";

export function LandingPage() {
  return (
    <>
      <div>
        <Hero />
        <Features />
        <WhyChooseUs />
        <VisaCategory />
        <Stats />
        <Testimonials />
        <Blog />
        <SimpleContactForm />
      </div>
    </>
  );
}
