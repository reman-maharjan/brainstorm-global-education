'use client';

import Team from "../team-member/Team";
import WhyChooseUs from "./about/WhyChooseUs";
import { ServicesSection } from "../services/services-section";
import { FeaturedContent } from "./about/FeaturedContent";
import { AboutUs } from "./about/about-us";
import Stats from "../stats/Stats";

export function AboutMain() {
    return (
        <div>
            <WhyChooseUs/>
            <FeaturedContent/>
            <ServicesSection/>
            <Team/>
            <AboutUs/>
            <Stats/>
        </div>
    );
}