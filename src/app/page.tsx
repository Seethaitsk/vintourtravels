"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bus,
  Car,
  ShieldCheck,
  Award,
  Clock,
  Users,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Building,
  HeartHandshake,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEnquiry } from "@/components/EnquiryContext";
import PromoBanner from "@/components/PromoBanner";
import { GalleryCarousel, GallerySlide } from "@/components/GalleryCarousel";
import { BentoGalleryCarousel } from "@/components/BentoGalleryCarousel";

function CountUpNumber({
  target,
  suffix = "",
  decimals = 0,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const startTime = performance.now();
        const duration = 1500;

        const updateCounter = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentCount = easedProgress * target;

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(updateCounter);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, target, delay]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const { openEnquiry } = useEnquiry();
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isServicePaused, setIsServicePaused] = useState(false);
  const servicesScrollRef = React.useRef<HTMLDivElement>(null);

  const featuredVehicles = [
    {
      id: "v1",
      name: "Volvo Multi-Axle B11R AC Sleeper",
      type: "Luxury Bus",
      capacity: "36 Berths / Seats",
      amenities: ["Individual Charging Ports", "Sanitized Bedding & Pillow", "Live GPS Tracking", "Ambient Mood Lighting"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
      tag: "Volvo AC Sleeper",
    },
    {
      id: "v2",
      name: "Executive Maharaja Tempo Traveller",
      type: "Luxury Van",
      capacity: "12 - 20 Reclining Seats",
      amenities: ["Leather Pushback Seats", "LED Screen & Audio", "Dual AC Vents", "Extra Luggage Boot"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80",
      tag: "Executive Van",
    },
    {
      id: "v3",
      name: "Deluxe Air-Suspension Tourist Coach",
      type: "Tourist Bus",
      capacity: "45 - 53 Seats",
      amenities: ["Air Suspension Comfort", "PA Sound System", "Panoramic Tinted Windows", "Ergonomic Seats"],
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80",
      tag: "Group Coach",
    },
    {
      id: "v4",
      name: "Chauffeur Sedan & Luxury SUV",
      type: "Car Rental",
      capacity: "4 - 7 Seats",
      amenities: ["Uniformed Chauffeur", "Dual Zone AC", "Complementary Water", "FASTag Express Toll"],
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
      tag: "Private Car",
    },
  ];

  const featuredPackages = [
    {
      id: "p1",
      name: "Mumbai to Goa Beach Odyssey",
      duration: "4 Days / 3 Nights",
      price: "₹7,999",
      places: ["Calangute Beach", "Fort Aguada", "Dudhsagar Waterfalls", "Mandovi Sunset Cruise"],
      image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller",
    },
    {
      id: "p2",
      name: "Bangalore to Munnar Tea Trail",
      duration: "3 Days / 2 Nights",
      price: "₹5,500",
      places: ["Tea Gardens", "Mattupetty Dam", "Echo Point", "Spice Plantation"],
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      tag: "Weekend Special",
    },
    {
      id: "p3",
      name: "Delhi to Manali Snow Escape",
      duration: "5 Days / 4 Nights",
      price: "₹12,000",
      places: ["Solang Valley", "Atal Tunnel", "Hadimba Temple", "Mall Road"],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      tag: "Top Rated",
    },
  ];

  const mainServices = [
    {
      id: "s1",
      title: "Intercity Bus Routes",
      shortTitle: "Intercity Bus",
      desc: "Daily scheduled sleeper & seater Volvo coaches connecting major commercial and tourist hubs across the region with max passenger comfort, individual reading lights, and GPS tracking.",
      icon: Bus,
      badge: "Daily Express",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "s2",
      title: "Private Bus & Coach Charters",
      shortTitle: "Private Charter",
      desc: "Dedicated 30-53 seater luxury tourist buses for weddings, family reunions, corporate retreats, and large group pilgrimage trips with dual verified drivers.",
      icon: Users,
      badge: "Group Charter",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "s3",
      title: "Luxury Van & Tempo Traveller",
      shortTitle: "Tempo Traveller",
      desc: "12 to 26 seater luxury pushback Tempo Travellers ideal for hill station getaways, outstation weekend trips, and family vacation comfort.",
      icon: Car,
      badge: "Family Favorite",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "s4",
      title: "Corporate Employee Shuttles",
      shortTitle: "Corporate Shuttle",
      desc: "Long-term contract shuttles and event transport solutions for tech hubs, corporate campuses & IT parks with central fleet speed monitoring.",
      icon: Building,
      badge: "B2B Contract",
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "s5",
      title: "Wildlife & Safari Tourism",
      shortTitle: "Wildlife Safari",
      desc: "Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in national sanctuaries has become a popular & educational form of travel.",
      icon: Sparkles,
      badge: "Eco Safari",
      image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "s6",
      title: "Heritage & Pilgrimage Tours",
      shortTitle: "Heritage Tour",
      desc: "Comfortable guided group travel packages to famous spiritual temples, ancient heritage monuments, and cultural destinations across South India.",
      icon: Award,
      badge: "Cultural Tour",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const whyChooseUsPillars = [
    {
      title: "Dual Verified Drivers",
      desc: "Mandatory two qualified drivers on overnight routes with strict shift rotations & zero fatigue.",
      icon: ShieldCheck,
      color: "bg-sky-100 text-[#0077B6]",
    },
    {
      title: "99.8% On-Time Record",
      desc: "Centralized GPS tracking & live highway monitoring to guarantee punctual departures.",
      icon: Clock,
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "100% Sanitized Fleet",
      desc: "Fresh laundered linen, sanitized berths, and deep cleaned vehicle interiors before every trip.",
      icon: CheckCircle2,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "24/7 Support Helpline",
      desc: "Round-the-clock telephone and WhatsApp dispatch assistance for boarding & booking.",
      icon: Headphones,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const gallerySlides: GallerySlide[] = [
    {
      id: 1,
      title: "RAJASTHAN ROYAL CIRCUIT",
      subtitle: "Palaces, Forts & Golden Desert Highway Expeditions",
      category: "Heritage Circuit",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "GOA LUXURY COASTAL ESCAPE",
      subtitle: "Sun, Sand, Palms & Sunset Highway Sleeper Cruises",
      category: "Coastal Getaway",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "KERALA BACKWATERS RETREAT",
      subtitle: "Misty Tea Gardens, Hills & Tranquil Coconut Lagoons",
      category: "Nature & Hill Station",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "HIMALAYAN MOUNTAIN PASSES",
      subtitle: "High-Altitude Thrill, Snow Peaks & Valley Expeditions",
      category: "Adventure Route",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "GUJARAT PILGRIMAGE & HERITAGE",
      subtitle: "Sacred Shrines, White Desert & Cultural Charters",
      category: "Spiritual Circuit",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const reviews = [
    {
      id: "r1",
      name: "Anand Verma",
      city: "Mumbai",
      route: "Mumbai → Goa Sleeper",
      rating: 5,
      comment: "The Volvo AC Sleeper journey to Goa was amazingly smooth! Very punctual, clean sanitized bedding, and professional driver team. Highly recommended Vintours!",
    },
    {
      id: "r2",
      name: "Priya Sundaram",
      city: "Bangalore",
      route: "Bangalore → Munnar Charter",
      rating: 5,
      comment: "We chartered a 20-seater Tempo Traveller for our family trip to Munnar. Exceptional driver behavior, dual AC vents, and super comfy reclining seats.",
    },
    {
      id: "r3",
      name: "Rajesh Kulkarni",
      city: "Pune",
      route: "Pune → Hyderabad Express",
      rating: 5,
      comment: "Prompt response on WhatsApp and quick booking for our corporate team outing. Safe overnight drive with zero hassle. Will definitely book again.",
    },
    {
      id: "r4",
      name: "Meera Nair",
      city: "Kochi",
      route: "Kochi → Wayanad Tour",
      rating: 5,
      comment: "Travelled from Bangalore to Wayanad in their Executive Coach. Smooth air-suspension comfort, pristine interiors, and exactly on-time departure!",
    },
    {
      id: "r5",
      name: "Vikramaditya Singh",
      city: "Delhi",
      route: "Delhi → Jaipur Wedding Charter",
      rating: 5,
      comment: "Booked a 45-seater Deluxe Tourist Coach for a wedding group from Delhi to Jaipur. Clean vehicles, courteous staff, and stress-free highway transit.",
    },
    {
      id: "r6",
      name: "Kavita Sharma",
      city: "Ahmedabad",
      route: "Ahmedabad → Somnath Circuit",
      rating: 5,
      comment: "Outstanding outstation taxi service for our Gujarat pilgrimage circuit. Uniformed chauffeur was extremely polite, safe, and knowledgeable about top highway halts.",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  useEffect(() => {
    if (isServicePaused) return;
    const interval = setInterval(() => {
      setActiveServiceIdx((prev) => (prev + 1) % mainServices.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isServicePaused, mainServices.length]);

  useEffect(() => {
    if (servicesScrollRef.current) {
      const container = servicesScrollRef.current;
      const activeCard = container.children[activeServiceIdx] as HTMLElement;
      if (activeCard) {
        const scrollLeftTarget = activeCard.offsetLeft - 8;
        container.scrollTo({ left: Math.max(0, scrollLeftTarget), behavior: "smooth" });
      }
    }
  }, [activeServiceIdx]);

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="space-y-24 pb-16">
      {/* 1. ATMOSPHERIC FULL-BLEED MOUNTAIN HIGHWAY HERO SECTION */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-start bg-[#031326] text-white overflow-hidden border-b border-[#FFB703]/25">
        {/* Full-Bleed Highway Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero1.png"
            alt="Vintours Luxury Highway Journey"
            className="w-full h-full object-cover object-right lg:object-center scale-105"
          />
          {/* Subtle Ambient Lighting Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031326] via-[#031326]/90 via-55% to-transparent lg:w-[70%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031326] via-transparent to-[#031326]/60" />

          {/* Lively Ambient Floating Glow Orbs */}
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#FFB703]/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00B4D8]/15 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 lg:pt-10 pb-12 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Glassmorphism Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFB703]">
                India's Premier Highway Network
              </span>
            </div>

            {/* Title with Gradient Gold Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif leading-[1.14] text-white tracking-tight drop-shadow-xl text-center lg:text-left">
              India's Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] via-[#F3C649] to-[#FB8500] drop-shadow-lg">
                Luxury Road Journeys
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal max-w-xl drop-shadow-md text-center lg:text-left">
              Book guaranteed Volvo AC Sleepers, executive tourist buses, and luxury Tempo Travellers for intercity trips, group tours, and outstation rentals.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full max-w-md lg:max-w-none">
              <button
                onClick={() => openEnquiry("Hero Main Booking", "General Enquiry")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#FFB703] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Enquire & Book Vehicles</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href="https://wa.me/911234567890?text=Hi%20Vintours%20Travels,%20I'd%20like%20to%20enquire%20about%20a%20vehicle%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>

            {/* Key Metrics / Trust Points Grid */}
            <div className="pt-4 grid grid-cols-3 gap-1.5 sm:gap-3 border-t border-white/10 max-w-xl">
              <div className="flex items-center gap-1.5 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FFB703]/20 flex items-center justify-center text-[#FFB703] shrink-0 border border-[#FFB703]/30 shadow-inner group hover:scale-110 transition-transform">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FFB703]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-white block leading-tight">4.9 / 5</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium">10k+ Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] shrink-0 border border-[#00B4D8]/30 shadow-inner group hover:scale-110 transition-transform">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-white block leading-tight">99.8%</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium">On-Time Record</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30 shadow-inner group hover:scale-110 transition-transform">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-white block leading-tight">100%</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium">Guaranteed Boarding</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: 4-CARD ASYMMETRIC PHOTO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:h-[420px]">
            {/* Column 1: Tall Vertical Card */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="col-span-1 sm:col-span-5 relative h-52 sm:h-full rounded-3xl overflow-hidden shadow-md group border border-slate-200 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Volvo Fleet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB703] block mb-0.5">
                  Flagship Fleet
                </span>
                <h4 className="text-base font-bold font-serif leading-tight">Luxury Volvo Coaches</h4>
              </div>
            </motion.div>

            {/* Column 2: Stacked Right Cards (col-span-7) */}
            <div className="col-span-1 sm:col-span-7 grid grid-rows-2 gap-3.5 h-[280px] sm:h-full">
              {/* Top Wide Horizontal Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative h-full rounded-3xl overflow-hidden shadow-md group border border-slate-200 cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                  alt="Intercity Sleeper Routes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 text-white">
                  <h4 className="text-base font-bold font-serif leading-tight">Intercity Sleeper Routes</h4>
                  <span className="text-[10px] text-slate-200">Daily Express Departures</span>
                </div>
              </motion.div>

              {/* Bottom 2 Square Cards */}
              <div className="grid grid-cols-2 gap-3.5 h-full">
                {/* Bottom Left Card */}
                <motion.div
                  initial={{ opacity: 0, x: -40, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                  className="relative h-full rounded-3xl overflow-hidden shadow-md group border border-slate-200 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
                    alt="Tourist Charters"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h5 className="text-xs font-bold font-serif">Tourist Charters</h5>
                  </div>
                </motion.div>

                {/* Bottom Right Card */}
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  className="relative h-full rounded-3xl overflow-hidden shadow-md group border border-slate-200 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"
                    alt="Executive Vans"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h5 className="text-xs font-bold font-serif">Executive Vans</h5>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Stat Counters */}
          <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0077B6] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
              <Bus className="w-4 h-4" />
              <span>Company Introduction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0A2540] leading-tight text-center lg:text-left">
              Welcome to Vintours & Travels — Redefining Indian Highway Transit
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed text-center lg:text-left">
              Established in 2010, Vintours & Travels has transformed long-distance highway travel across India. We believe road journeys should be an enjoyable, restful highlight of your travel itinerary.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              With a modern fleet of over 50 multi-axle Volvo coaches, Tempo Travellers, and luxury cars, we serve over 1.2 million satisfied passengers annually across intercity routes, pilgrimage circuits, and corporate charters.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.0 }}
                className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center"
              >
                <h3 className="text-2xl font-bold font-serif text-[#0A2540]">
                  <CountUpNumber target={50} suffix="+" delay={0.0} />
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">Vehicles</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center"
              >
                <h3 className="text-2xl font-bold font-serif text-[#0A2540]">
                  <CountUpNumber target={1.2} suffix="M+" decimals={1} delay={0.1} />
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">Passengers</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center"
              >
                <h3 className="text-2xl font-bold font-serif text-[#0A2540]">
                  <CountUpNumber target={120} suffix="+" delay={0.2} />
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">Routes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-center"
              >
                <h3 className="text-2xl font-bold font-serif text-[#0A2540]">
                  <CountUpNumber target={99.8} suffix="%" decimals={1} delay={0.3} />
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">On-Time</p>
              </motion.div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0077B6] hover:text-[#0A2540] group transition-colors"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4 text-[#0077B6] group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED VEHICLES — CARS / BUSES / VANS */}
      <section className="bg-slate-100 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0077B6] bg-white px-3 py-1.5 rounded-full border border-slate-200 mb-2">
                Our Modern Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0A2540] mt-1">
                Featured Vehicles — Cars, Buses & Vans
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A2540] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#05192D] transition-all shadow-md"
            >
              <span>Explore Entire Fleet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-[#FFB703] text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                      {vehicle.tag}
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <span className="text-[11px] font-semibold text-[#0077B6] uppercase tracking-wider block">
                      {vehicle.type} • {vehicle.capacity}
                    </span>
                    <h3 className="text-lg font-bold font-serif text-[#0A2540]">{vehicle.name}</h3>
                    <ul className="space-y-1.5 pt-1">
                      {vehicle.amenities.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => openEnquiry(vehicle.name, vehicle.type)}
                    className="w-full py-3 rounded-xl bg-slate-100 hover:bg-[#0A2540] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all text-center border border-slate-200"
                  >
                    Enquire / Book Vehicle
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR TOUR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0077B6] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100 mb-2">
              Handcrafted Holiday Journeys
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0A2540] mt-1">
              Popular Tour Packages
            </h2>
          </div>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-[#0A2540] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {pkg.duration}
                  </span>
                  {/* Ribbon Badge with Subtle One-Time Shine/Sweep Animation */}
                  <div className="absolute top-4 left-4 overflow-hidden bg-[#FFB703] text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow inline-flex items-center">
                    <span className="relative z-10">{pkg.tag}</span>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "200%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 + 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 z-20 pointer-events-none"
                    />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-serif text-[#0A2540]">{pkg.name}</h3>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Covering:</span>
                    <p className="text-xs text-slate-700 font-medium">{pkg.places.join(" • ")}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Starting Fare</span>
                    <div className="flex items-baseline gap-1">
                      <motion.span
                        initial={{ scale: 1, textShadow: "0px 0px 0px rgba(0, 180, 216, 0)" }}
                        whileInView={{
                          scale: [1, 1.1, 1],
                          color: ["#0077B6", "#00B4D8", "#0077B6"],
                          textShadow: [
                            "0px 0px 0px rgba(0, 180, 216, 0)",
                            "0px 0px 14px rgba(0, 180, 216, 0.6)",
                            "0px 0px 0px rgba(0, 180, 216, 0)",
                          ],
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                        className="text-2xl font-extrabold text-[#0077B6] font-serif inline-block origin-right"
                      >
                        {pkg.price}
                      </motion.span>
                      <span className="text-xs text-slate-400 font-normal"> / person</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openEnquiry(pkg.name, "Popular Tour Package")}
                  className="w-full py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#05192D] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Enquire / Book Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. MAIN SERVICES / TOUR CATEGORIES CAROUSEL (Matching Target Reference) */}
      <section
        onMouseEnter={() => setIsServicePaused(true)}
        onMouseLeave={() => setIsServicePaused(false)}
        className="relative min-h-[580px] sm:min-h-[620px] bg-[#05192D] text-white py-16 sm:py-20 overflow-hidden flex items-center border-y border-white/10"
      >
        {/* Background Scenic Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 transition-all duration-300 filter contrast-125 scale-105"
          style={{ backgroundImage: `url(${mainServices[activeServiceIdx].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05192D] via-[#05192D]/90 to-[#05192D]/70 z-0" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00B4D8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Active Service Dynamic Details */}
            <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="space-y-2 flex flex-col items-center lg:items-start">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00B4D8] bg-[#00B4D8]/10 px-4 py-1.5 rounded-full border border-[#00B4D8]/30 shadow-sm">
                  {mainServices[activeServiceIdx].badge}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIdx}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white leading-tight text-center lg:text-left">
                    {mainServices[activeServiceIdx].title}
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-md text-center lg:text-left">
                    {mainServices[activeServiceIdx].desc}
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => openEnquiry(mainServices[activeServiceIdx].title, "Main Services")}
                      className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#FFB703] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <span>View More</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Interactive Card Carousel */}
            <div className="lg:col-span-7 relative">
              
              {/* Cards Row */}
              <div
                ref={servicesScrollRef}
                className="flex items-center gap-4 overflow-x-auto px-2 py-4 no-scrollbar scroll-smooth"
              >
                {mainServices.map((srv, idx) => {
                  const isActive = idx === activeServiceIdx;
                  return (
                    <motion.div
                      key={srv.id}
                      onClick={() => setActiveServiceIdx(idx)}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)] bg-white rounded-none p-3 border border-white transition-all duration-200 cursor-pointer shadow-md ${
                        isActive
                          ? "opacity-100 shadow-xl z-10"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <div className="relative h-56 sm:h-64 rounded-none overflow-hidden bg-slate-100">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="py-3 text-center">
                        <h4 className="text-base font-bold font-serif text-[#05192D] truncate px-2">
                          {srv.shortTitle || srv.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Right Typographic Text Overlay (Matching Reference Image) */}
              <div className="mt-8 text-right pointer-events-none select-none">
                <span className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase block">
                  Wonderful Place For You
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-white/20 uppercase">
                  TOUR CATEGORIES
                </h3>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0077B6] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100 mb-3 shadow-sm">
            Pillars of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0A2540]">Why Passengers Choose Vintours</h2>
          <p className="text-slate-500 text-xs">We go above and beyond standard highway operators to deliver peace of mind</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsPillars.map((pillar, idx) => {
            const IconC = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.color} shadow-md`}>
                  <IconC className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0A2540]">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0077B6] bg-white px-3 py-1.5 rounded-full border border-slate-200 mb-2">
                Visual Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0A2540] mt-1">Gallery Preview</h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A2540] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#05192D] transition-all shadow-md"
            >
              <span>Explore Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento Grid Editorial Gallery Carousel */}
        <BentoGalleryCarousel interval={3000} />
      </section>

      {/* 8. CUSTOMER REVIEWS / TESTIMONIALS AUTO CAROUSEL */}
      <section className="bg-[#05192D] text-white py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFB703] bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                Passenger Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">What Our Travelers Say</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Over 100,000+ positive reviews across Indian highways</p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevReview}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextReview}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Carousel Grid */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReviewIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[0, 1, 2].map((offset) => {
                  const index = (activeReviewIndex + offset) % reviews.length;
                  const rev = reviews[index];
                  return (
                    <div
                      key={`${rev.id}-${offset}`}
                      className={`glass-card-dark p-7 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                        offset > 0 ? "hidden md:flex" : "flex"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#FFB703]">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#FFB703]" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-slate-200 italic leading-relaxed font-normal">
                          "{rev.comment}"
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-[#FFB703] font-serif text-sm block">{rev.name}</span>
                          <span className="text-slate-400 text-[11px] font-medium">{rev.route}</span>
                        </div>
                        <span className="text-sky-300 font-semibold bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 text-[11px]">
                          {rev.city}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeReviewIndex === idx
                      ? "w-8 bg-[#FFB703]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT / ENQUIRY CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanner
          subTitle="Limited Time Offer"
          titlePrefix="Get up to "
          titleHighlight="30% OFF"
          titleSuffix="on your next adventure"
          buttonText="Explore Deals"
          secondaryButtonText="WhatsApp Dispatch"
          onButtonClick={() => openEnquiry("Home Promo Banner 30% OFF", "30% OFF Limited Offer")}
        />
      </section>
    </div>
  );
}
