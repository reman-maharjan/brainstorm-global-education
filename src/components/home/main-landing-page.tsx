'use client';

import Hero from "./landing-page/Hero"
import WhyChooseUs from "../pages/about-us/about/WhyChooseUs"
import Stats from "../pages/stats/Stats"
import Blog from "../pages/blog/Blog"
import Features from "./features/features";
import CountryCarousel from "../pages/country/CountryCarousel";
import VisaCategory from "./visaCategory/VisaCategory";
import Testimonials from "../pages/testimonial/Testimonials";
import SimpleContactForm from "../pages/contact/contact-us";

export function LandingPage(){
    return(
        <>
        <div className="min-h-screen max-w-9xl mx-auto bg-[#FDFDFD] font-sans overflow-x-hidden text-[#013D2F]">
        <Hero />
        <Features />
        <WhyChooseUs />
        <CountryCarousel />
        <VisaCategory />
        <Stats />
        <Testimonials />
        <Blog />
        <SimpleContactForm />
        </div>
        </>
    )
}