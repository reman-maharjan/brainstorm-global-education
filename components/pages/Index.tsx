"use client";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CountriesSection from "@/components/home/CountriesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Videos from "@/components/home/videos/videos";
import CTASection from "@/components/home/CTASection";
import { motion, Variants } from "motion/react";
import BlogSection from "../home/blog-section";
import TeamSection from "../home/team-section";
import { Badge } from "@/components/ui/badge";
import {
  Facebook,
  Users,
  MessageCircle,
  Share2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Index = () => {
  return (
    <>
      <HeroSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <StatsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Videos />
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 md:py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="px-4 py-1 text-sm font-medium mb-4 bg-accent text-accent-foreground"
            >
              Stay Connected
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Follow Our Latest Updates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get real-time updates, success stories, and exclusive study abroad
              opportunities directly from our Facebook page. Join our community
              of 17,000+ followers!
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Facebook Embed */}
            <div className="w-full">
              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="bg-primary/5 px-4 py-3 border-b border-border flex items-center gap-2">
                  <Facebook className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    Brainstorm Global Education
                  </span>
                </div>
                <div className="relative w-full" style={{ minHeight: "500px" }}>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrainstormglobaleducation&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1340624347086563"
                    width="100%"
                    height="500"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 md:p-9 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Why Follow Us?</h3>
                    <p className="text-sm text-muted-foreground">
                      Stay ahead with our updates
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md mt-1">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Latest Opportunities
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new intakes, scholarship
                        opportunities, and deadline reminders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md mt-1">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Success Stories</h4>
                      <p className="text-sm text-muted-foreground">
                        Read inspiring stories from students who achieved their
                        study abroad dreams.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md mt-1">
                      <Share2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Tips</h4>
                      <p className="text-sm text-muted-foreground">
                        Access valuable insights about visa processes, IELTS
                        preparation, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        17,657+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Active Followers
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        Daily
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Updates
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://www.facebook.com/brainstormglobaleducation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Facebook className="w-4 h-4" />
                      Follow Us on Facebook
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <ProcessSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <BlogSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <CountriesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <WhyChooseUsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <TeamSection />
        <CTASection />
      </motion.div>
    </>
  );
};

export default Index;
