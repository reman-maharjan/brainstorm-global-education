'use client';

import Hero from "./landing-page/Hero"
import WhyChooseUs from "../about-us/about/WhyChooseUs"
import Stats from "../stats/Stats"
import Blog from "../blog/Blog"
import Features from "../features/features";
import CountryCarousel from "../country/countryCarousel";
import VisaCategory from "../visaCategory/VisaCategory";
import TestimonialsPage from "../testimonial/TestimonialsPage";
import SimpleContactForm from "../contact/contact-us";

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
        <TestimonialsPage />
        <Blog />
        <SimpleContactForm />
        </div>
        </>
    )
}