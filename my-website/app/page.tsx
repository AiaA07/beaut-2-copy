"use client";

import { Navbar1 } from "@/components/ui/navbar-1";
import { SplineScene } from "@/components/ui/splite";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { WorldMap } from "@/components/ui/world-map";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FaqsSection } from "@/components/ui/faqs-1";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <Navbar1 />

      {/* Hero Section with Spline Scene */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-6">
              The Robot Built for the Real World.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              10-hour battery. 48 degrees of freedom. Learns your facility in hours, not months. ARES is the humanoid robot that actually deploys.
            </p>
          </motion.div>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Feature108 />
      </section>

      {/* Logo Cloud Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by the World&apos;s Most Demanding Industries</h2>
          <LogoCloud />
        </div>
      </section>

      {/* Evervault Card Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Intelligence in Motion</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <EvervaultCard text="ARES" />
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Deployed Across 4 Continents</h2>
          <WorldMap
            dots={[
              {
                start: { lat: 42.3314, lng: -83.0458 },
                end: { lat: 53.5511, lng: 9.9937 },
              },
              {
                start: { lat: 42.3314, lng: -83.0458 },
                end: { lat: 1.3521, lng: 103.8198 },
              },
              {
                start: { lat: 35.1495, lng: -90.049 },
                end: { lat: -23.5505, lng: -46.6333 },
              },
              {
                start: { lat: 53.5511, lng: 9.9937 },
                end: { lat: 25.2048, lng: 55.2708 },
              },
              {
                start: { lat: 25.2048, lng: 55.2708 },
                end: { lat: 1.3521, lng: 103.8198 },
              },
              {
                start: { lat: -23.5505, lng: -46.6333 },
                end: { lat: 53.5511, lng: 9.9937 },
              },
            ]}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Operators Say</h2>
          <div className="flex justify-center gap-6 overflow-hidden">
            <TestimonialsColumn
              testimonials={[
                {
                  text: "We cut our line reconfiguration time by 94% and saw a 41% reduction in defects within the first quarter. ARES isn't a pilot program anymore — it's infrastructure.",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  name: "Marcus Thorn",
                  role: "VP Manufacturing, Ridgeline Automotive",
                },
                {
                  text: "We hit 310 picks per hour on our first full overnight shift. No supervisors, no errors, no downtime. I've been in logistics for 18 years — I've never seen a rollout this clean.",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  name: "Dana Okafor",
                  role: "Director of Fulfillment, Meridian Fulfillment Solutions",
                },
                {
                  text: "Post-blast inspection used to keep crews waiting four hours. ARES goes in at 30 minutes. It already prevented what would have been a secondary incident. The ROI conversation is secondary to that.",
                  image: "https://randomuser.me/api/portraits/men/67.jpg",
                  name: "Yusuf al-Rashid",
                  role: "Chief Safety Officer, Condor Mining Corp",
                },
              ]}
              duration={18}
            />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/50">
        <FaqsSection />
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 Nexus Robotics. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}