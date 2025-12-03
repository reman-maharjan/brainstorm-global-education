'use client';

import Hero from "./landing-page/Hero"
import Testimonials from "../testimonial/Testimonials"
import VideoGallery from "../videogallery/VideoGallery"
import WhyChooseUs from "../about-us/about/WhyChooseUs"
import Stats from "../stats/Stats"
import FAQ from "../Faq/FAQ"
import Team from "../team-member/Team"
import Blog from "../blog/Blog"

export function LandingPage(){
    return(
        <>
        <Hero />
        <Testimonials />
        <VideoGallery />
        <WhyChooseUs />
        <Stats />
        <FAQ />
        <Team />
        <Blog />
        </>
    )
}