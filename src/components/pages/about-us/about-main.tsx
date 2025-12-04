'use client';

import WhyChooseUs from "./about/WhyChooseUs";
import { ServicesSection } from "../services/services-section";
import { FeaturedContent } from "./about/FeaturedContent";
import { AboutUs } from "./about/about-us";
import Stats from "../stats/Stats";
import { TeamMembers } from "../team-member/team-member";

export function AboutMain() {
    return (
        <div>
            <WhyChooseUs/>
            <FeaturedContent/>
            <ServicesSection/>
            <AboutUs/>
            <TeamMembers/>
            <Stats/>
            
        </div>
    );
}