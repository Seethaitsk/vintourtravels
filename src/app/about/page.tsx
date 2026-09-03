"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Bus,
  Clock,
  CheckCircle2,
  HeartHandshake,
  Target,
  Compass,
  Headphones,
  Sparkles,
  PhoneCall,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Lock,
  ThumbsUp,
  Sliders,
  Star,
  Plane,
  RefreshCw,
  Wind,
  Wifi,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEnquiry } from "@/components/EnquiryContext";
import PromoBanner from "@/components/PromoBanner";

function CompanyHistoryTimeline({
  milestones,
}: {
  milestones: Array<{ year: string; title: string; desc: string }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
      {milestones.map((m, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.12 }}
          whileHover={{ y: -4 }}
          className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00B4D8]/60 transition-all duration-300 relative overflow-hidden space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0077B6] block group-hover:text-[#00B4D8] transition-colors">
              {m.year}
            </span>
            <span className="text-[10px] font-black px-2.5 py-1 rounded-full border bg-slate-100 text-slate-600 border-slate-200">
              0{idx + 1}
            </span>
          </div>

          <h3 className="text-lg font-bold font-serif text-[#0A2540] group-hover:text-[#0077B6] transition-colors">
            {m.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {m.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const { openEnquiry } = useEnquiry();

  const historyMilestones = [
    {
      year: "2010",
      title: "The Journey Begins",
      desc: "Launched our first intercity bus route with 2 deluxe passenger coaches between commercial hubs.",
    },
    {
      year: "2014",
      title: "Volvo Sleeper Induction",
      desc: "Introduced multi-axle AC Volvo sleeper coaches, raising the bar for overnight highway comfort.",
    },
    {
      year: "2018",
      title: "Charter & Van Division",
      desc: "Expanded into private Tempo Traveller rentals, luxury cars, and custom holiday tour packages.",
    },
    {
      year: "2023",
      title: "GPS & Telematics Upgrade",
      desc: "Equipped entire fleet with real-time speed governors, dual CCTV monitoring, and live passenger tracking.",
    },
  ];

  const travelExperienceFeatures = [
    {
      title: "Luxury AC Sleeper Berths",
      desc: "Spacious single & double berths with individual reading lights, USB charging sockets, and privacy curtains.",
      icon: Bus,
    },
    {
      title: "Air Suspension Highway Smoothness",
      desc: "Advanced multi-axle air suspension systems absorb road vibrations for an uninterrupted sleep.",
      icon: Sparkles,
    },
    {
      title: "Sanitized Premium Linen",
      desc: "Freshly laundered white bedsheets, pillow covers, and sanitized blankets provided on every sleeper route.",
      icon: CheckCircle2,
    },
    {
      title: "Onboard Entertainment & Wi-Fi",
      desc: "Stay connected with high-speed Wi-Fi ports, ambient mood lighting, and personal media charging.",
      icon: Sliders,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: "Transparent & Honest Pricing",
      desc: "No hidden festive surges or unexpected taxes. Full digital breakdown on every ticket & charter receipt.",
      icon: ThumbsUp,
    },
    {
      title: "Guaranteed Boarding & Punctuality",
      desc: "Central dispatch tracking ensures 99.8% on-time departures from all city terminals.",
      icon: Clock,
    },
    {
      title: "Doorstep & Point Pickup Options",
      desc: "Flexible boarding points across major arterial highways and city pickup hubs.",
      icon: Users,
    },
    {
      title: "1.2 Million Happy Passengers",
      desc: "Over 15 years of built trust with families, pilgrimage groups, and corporate partners across India.",
      icon: Star,
    },
  ];

  const safetyProtocols = [
    {
      title: "Dual Driver Crew System",
      desc: "Mandatory two qualified commercial drivers on all overnight journeys over 300 km to prevent fatigue.",
    },
    {
      title: "Automated Speed Governors",
      desc: "Speed limited strictly to government safety norms (80 km/h) for highway stability.",
    },
    {
      title: "Weekly Mechanical Audits",
      desc: "Every vehicle undergoes a 45-point brake, tire, engine, and AC inspection prior to departure.",
    },
    {
      title: "SOS & Live GPS Tracking",
      desc: "24/7 central control room monitors vehicle speed, route deviations, and instant SOS alerts.",
    },
  ];

  return (
    <div className="pb-16">
      {/* 1. COMPANY INTRODUCTION */}
      <section className="relative bg-[#05192D] text-white pt-14 pb-10 sm:pt-16 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80')` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
            About Vintours & Travels
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-white">
            Building Trust & Excellence in Highway Travel
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            For over 15 years, Vintours & Travels has defined safe, comfortable, and reliable road transportation for millions of travelers across India.
          </p>
        </div>
      </section>

      {/* 2. OUR MISSION & VISION - CLEAN WHITE BACKGROUND */}
      <section className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Side Content: Vertical Stepper / Timeline Layout */}
            <div className="lg:col-span-6 space-y-8">
              {/* Header Title with Premium Tracked Eyebrow */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077B6]/10 border border-[#0077B6]/20 text-[#0077B6] text-[11px] font-extrabold uppercase tracking-[0.18em]">
                  <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
                  <span>Core Brand Principles</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#0A2540] tracking-tight leading-tight">
                  Our <span className="text-[#0077B6]">Mission</span> & Vision
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                  Driven by uncompromised safety, passenger hospitality, and fleet excellence across every highway corridor.
                </p>
              </div>

              {/* Side-by-Side 2-Column Cards Grid (Matching Target Design) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between border-b-4 border-b-[#0077B6] group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0077B6] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <Compass className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold font-serif text-[#0077B6]">
                          Vision
                        </h3>
                        <div className="h-1 bg-[#0077B6] rounded-full w-8 mt-1" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      To be recognized as India's most trusted and sustainable passenger transport network, connecting every major city and tourist destination with luxury coaches.
                    </p>
                  </div>
                </motion.div>

                {/* Missions Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between border-b-4 border-b-[#00B4D8] group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#00B4D8] text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold font-serif text-[#00B4D8]">
                          Missions
                        </h3>
                        <div className="h-1 bg-[#00B4D8] rounded-full w-8 mt-1" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      To provide safe, punctual, and highly comfortable road transport services for passengers through continuous fleet innovation, mechanical audits, and customer hospitality.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Image Only (No Badges, Clean Image Display) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full flex items-center justify-center py-4"
            >
              <div className="relative w-full max-w-[500px] sm:max-w-[540px] flex items-center justify-center">
                <img
                  src="/images/travel2.png"
                  alt="Vintours Travel"
                  className="w-full h-auto object-contain max-h-[520px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY HISTORY - CONNECTED REVEAL TIMELINE */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 py-16 sm:py-20 border-y border-slate-200 relative overflow-hidden">
        {/* Paper Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#0077B6_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0077B6]">15 Years of Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0A2540] tracking-tight">Our Company History</h2>
            <p className="text-slate-500 text-xs sm:text-sm">How we grew from a 2-bus operator into a nationwide luxury fleet</p>
          </div>

          <CompanyHistoryTimeline milestones={historyMilestones} />
        </div>
      </section>

      {/* 4. TRAVEL EXPERIENCE (Matching Target Strip & Illustration Design) */}
      <section className="pt-20 sm:pt-24 pb-0 bg-gradient-to-b from-slate-50/80 via-white to-sky-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6] bg-[#0077B6]/10 px-4 py-1.5 rounded-full inline-block border border-[#0077B6]/20">
              Onboard Luxury
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#0A2540] tracking-tight">
              The Vintours Travel Experience
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              Designed from the ground up for maximum passenger rest and relaxation
            </p>
          </div>

          {/* Horizontal Infinite Marquee Strip */}
          <div className="relative w-full overflow-hidden py-4 my-2">
            {/* Fade Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

            <motion.div
              className="flex items-center gap-3 sm:gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[
                { type: "card", title: "Luxury Berths", subtitle: "Explore Now" },
                { type: "icon", icon: Bus },
                { type: "card", title: "Air Suspension", subtitle: "Explore Now" },
                { type: "icon", icon: Wind },
                { type: "card", title: "Sanitized Linen", subtitle: "Explore Now" },
                { type: "icon", icon: Sparkles },
                { type: "card", title: "Wi-Fi & Media", subtitle: "Explore Now" },
                { type: "icon", icon: Wifi },
                { type: "card", title: "Live GPS", subtitle: "Explore Now" },
                { type: "icon", icon: MapPin },
                { type: "card", title: "Safari & Trails", subtitle: "Explore Now" },
                { type: "icon", icon: Compass },
                { type: "card", title: "24/7 Support", subtitle: "Explore Now" },
                { type: "icon", icon: Headphones },

                // Repeat sequence for seamless 100% continuous loop
                { type: "card", title: "Luxury Berths", subtitle: "Explore Now" },
                { type: "icon", icon: Bus },
                { type: "card", title: "Air Suspension", subtitle: "Explore Now" },
                { type: "icon", icon: Wind },
                { type: "card", title: "Sanitized Linen", subtitle: "Explore Now" },
                { type: "icon", icon: Sparkles },
                { type: "card", title: "Wi-Fi & Media", subtitle: "Explore Now" },
                { type: "icon", icon: Wifi },
                { type: "card", title: "Live GPS", subtitle: "Explore Now" },
                { type: "icon", icon: MapPin },
                { type: "card", title: "Safari & Trails", subtitle: "Explore Now" },
                { type: "icon", icon: Compass },
                { type: "card", title: "24/7 Support", subtitle: "Explore Now" },
                { type: "icon", icon: Headphones },
              ].map((item, idx) => {
                if (item.type === "card") {
                  return (
                    <div
                      key={idx}
                      className="bg-[#0A2540] text-white px-5 py-3 rounded-2xl border border-[#0077B6]/30 shadow-md flex flex-col justify-center shrink-0 min-w-[135px]"
                    >
                      <span className="text-xs sm:text-sm font-bold font-serif text-white whitespace-nowrap">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-[#00B4D8] font-medium tracking-wide whitespace-nowrap">
                        {item.subtitle}
                      </span>
                    </div>
                  );
                }

                const IconComp = item.icon!;
                return (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-2xl border-2 border-[#0077B6]/30 flex items-center justify-center shrink-0 w-13 sm:w-14 h-13 sm:h-14 shadow-sm text-[#0077B6]"
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Centered Travel Graphic Artwork Below (Matching Reference Image) */}
          <div className="mt-8 flex justify-center items-center -mb-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative max-w-[650px] w-full flex justify-center"
            >
              <img
                src="/images/holiday-bg.webp"
                alt="Vintours Travel Worldwide"
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-xl block -mb-1"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. WHY CUSTOMERS CHOOSE THE COMPANY */}
      <section className="bg-[#05192D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">Customer Choice</span>
            <h2 className="text-3xl font-bold font-serif text-white">Why Customers Choose Vintours</h2>
            <p className="text-slate-400 text-xs">Four reasons why travelers return to us trip after trip</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPoints.map((pt, idx) => {
              const IconC = pt.icon;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00B4D8] text-slate-950 flex items-center justify-center">
                    <IconC className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white">{pt.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SAFETY AND SERVICE QUALITY - INTERCHANGED LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left 3-Image Creative Collage (Matching Reference Design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 order-2 lg:order-1 relative w-full flex items-center justify-center lg:justify-end py-4 px-2 sm:px-4"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] h-[380px] sm:h-[460px] flex items-center justify-center">
              
              {/* Soft Cream Backdrop Circle for Left Standing Figure */}
              <div className="absolute left-0 bottom-2 sm:bottom-4 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-[#FFF5E6] rounded-full z-0 pointer-events-none" />

              {/* Left Tall Traveler Figure (abt-pic1.webp) */}
              <div className="absolute left-0 bottom-0 h-[370px] sm:h-[450px] z-10 flex items-end">
                <img
                  src="/images/abt-pic1.webp"
                  alt="Vintours Traveler"
                  className="h-full w-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Top-Right Circular Image Frame (we-rec3-pic2.webp) */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-2 right-8 sm:right-12 z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full border-[5px] border-white shadow-xl overflow-hidden bg-white"
              >
                <img
                  src="/images/we-rec3-pic2.webp"
                  alt="Scenic Destination"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              {/* Bottom-Right Circular Image Frame with Light Blue Ring (we-rec3-pic.webp) */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute bottom-1 right-0 sm:right-2 z-30 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[6px] sm:border-[8px] border-[#DDF3F7] shadow-2xl overflow-hidden bg-white"
              >
                <img
                  src="/images/we-rec3-pic.webp"
                  alt="Travel Experience"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#0077B6] text-[11px] font-extrabold uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Uncompromising Safety Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0A2540] tracking-tight leading-tight">
                Safety & Service Quality Protocols
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We understand that passenger safety is the single most crucial requirement when traveling on long-distance highways. Our multi-layered safety architecture protects your journey at every kilometer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {safetyProtocols.map((prot, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 h-full"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-[#0A2540] font-serif group-hover:text-emerald-700 transition-colors leading-snug">
                      {prot.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{prot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. INSTANT QUOTE CTA BANNER (Standardized PromoBanner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanner
          subTitle="Limited Time Offer"
          titlePrefix="Get up to "
          titleHighlight="30% OFF"
          titleSuffix="on your next adventure"
          buttonText="Explore Deals"
          secondaryButtonText="WhatsApp Dispatch"
          onButtonClick={() => openEnquiry("About Page Promo Banner", "30% OFF Special Offer")}
        />
      </section>
    </div>
  );
}
