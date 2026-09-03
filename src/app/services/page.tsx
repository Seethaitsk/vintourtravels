"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bus,
  Car,
  Users,
  Building,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  MapPin,
  Sparkles,
  HeartHandshake,
  Compass,
  Search,
  Send,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiry } from "@/components/EnquiryContext";
import PromoBanner from "@/components/PromoBanner";

export default function ServicesPage() {
  const { openEnquiry } = useEnquiry();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = ["All", "Vehicle Rentals", "Tours & Trips", "Corporate & Local"];

  const services = [
    {
      id: "s1",
      title: "Car Rental",
      category: "Vehicle Rentals",
      tag: "Sedan / SUV / Luxury",
      icon: Car,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      description: "Chauffeur-driven sedan & luxury SUV rentals for outstation trips, VIP transfers, and express highway travel.",
      features: ["Verified Chauffeurs", "FASTag Toll Included", "Flexible Hourly/Daily Fares", "24/7 Roadside Assistance"],
    },
    {
      id: "s2",
      title: "Bus Rental",
      category: "Vehicle Rentals",
      tag: "Volvo / Scania / AC Sleeper",
      icon: Bus,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      description: "Multi-axle Volvo and Scania coaches for intercity passenger transit, wedding parties, and long-distance travel.",
      features: ["Single & Double Sleepers", "Individual USB Ports", "Fresh Bedding & Pillows", "Live GPS Location Tracking"],
    },
    {
      id: "s3",
      title: "Tourist Bus",
      category: "Vehicle Rentals",
      tag: "30 to 53 Seater Capacity",
      icon: Bus,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
      description: "Spacious AC & Non-AC tourist coaches equipped with panoramic windows, PA audio system, and pushback seats.",
      features: ["Spacious Boot Luggage Hold", "Onboard Music & PA System", "Air Suspension Highway Smoothness", "Custom Stopover Points"],
    },
    {
      id: "s4",
      title: "Van Rental",
      category: "Vehicle Rentals",
      tag: "12 to 26 Seater Tempo Traveller",
      icon: Users,
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      description: "Executive Tempo Travellers and luxury passenger vans ideal for hill station tours and family excursions.",
      features: ["Reclining Leather Seats", "High-Roof Standing Room", "Dual AC Vents for Each Seat", "Ghat & Mountain Expert Drivers"],
    },
    {
      id: "s5",
      title: "Family Trips",
      category: "Tours & Trips",
      tag: "Private Family Getaways",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Customized private vehicle itineraries tailored specifically for family vacations with child & senior safety.",
      features: ["Doorstep Pick & Drop", "Child Seat Availability", "Flexible Sightseeing Schedule", "Handpicked Family Resorts"],
    },
    {
      id: "s6",
      title: "Group Tours",
      category: "Tours & Trips",
      tag: "Weddings & Pilgrimage",
      icon: Users,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      description: "Large capacity group travel management for marriage processions, pilgrimage yatras, and college trips.",
      features: ["Dedicated Fleet Manager", "Luggage Support Van", "Multi-City Route Coordination", "Special Pilgrimage Darshan Passes"],
    },
    {
      id: "s7",
      title: "Corporate Travel",
      category: "Corporate & Local",
      tag: "Employee Shuttles & Events",
      icon: Building,
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      description: "Long-term daily shuttle solutions and conference transport for corporate offices, IT parks, and MNCs.",
      features: ["Punctual SLA Timings", "Seat Allocation App", "High-Speed Onboard Wi-Fi", "Dedicated Account Manager"],
    },
    {
      id: "s8",
      title: "Local Travel",
      category: "Corporate & Local",
      tag: "Intra-City Hourly Packages",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      description: "Hourly intra-city car and van rentals for local shopping, business meetings, and city sightseeing.",
      features: ["8hr/80km & 12hr/120km Packages", "Zero Fuel Extra Charges", "City Route Expert Drivers", "Clean & Sanitized Vehicles"],
    },
    {
      id: "s9",
      title: "Customized Tour Services",
      category: "Tours & Trips",
      tag: "All-Inclusive Holiday Packages",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      description: "End-to-end holiday packages incorporating luxury coach transit, hotel stays, resort passes, and local guides.",
      features: ["Goa, Manali, Kerala & Ooty", "Resort & Hotel Booking", "Guided Sightseeing", "Custom Budget Packages"],
    },
  ];

  // Filtered logic for category
  const filteredServices = useMemo(() => {
    return activeFilter === "All"
      ? services
      : services.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  const handleWhatsAppService = (srv: typeof services[0]) => {
    const text = `Hi Vintours Travels! I want to enquire about your service: "${srv.title}" (${srv.category} - ${srv.tag}).`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/911234567890?text=${encoded}`, "_blank");
  };

  return (
    <div className="space-y-16 pb-20 bg-slate-50/50">
      {/* HEADER BANNER (UNCHANGED) */}
      <section className="relative bg-[#05192D] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
            Comprehensive Transport Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-white">
            Our Major Travel Services
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            From single-day car rentals to 53-seater luxury tourist buses, family trips, corporate shuttles, and customized tours.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab
                  ? "bg-[#0A2540] text-[#00B4D8] shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* MAGAZINE EDITORIAL POSTER-STYLE SERVICES CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-sm space-y-4 max-w-md mx-auto">
            <Compass className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold font-serif text-[#0A2540]">No Services Found</h3>
            <p className="text-xs text-slate-500">
              We couldn't find any services matching your filter. Try selecting another category.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="px-6 py-2.5 rounded-full bg-[#0A2540] text-white text-xs font-bold uppercase tracking-wider shadow hover:bg-[#05192D] transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="relative h-[390px] sm:h-[410px] rounded-[32px] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col justify-between border border-white/20"
                  >
                    {/* 1. Full-Bleed Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* 2. Multi-Layer Dark Gradient Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031326] via-[#031326]/75 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors z-0 pointer-events-none" />

                    {/* 3. Top Diagonal Corner Ribbon Banner */}
                    <div className="absolute top-0 right-0 z-30 overflow-hidden w-36 h-36 pointer-events-none">
                      <div className="absolute top-6 -right-9 w-44 bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#FFB703] text-slate-950 font-extrabold text-[10px] uppercase tracking-wider text-center py-1.5 rotate-45 shadow-lg border-y border-white/30">
                        {service.tag}
                      </div>
                    </div>

                    {/* 4. Top Area: Floating Glass Icon Badge */}
                    <div className="relative z-20 p-6">
                      {/* Top Left Glass Icon Badge */}
                      <div className="inline-flex items-center gap-2 bg-slate-950/60 backdrop-blur-md text-[#00B4D8] px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
                        <IconComponent className="w-4 h-4 text-[#00B4D8]" />
                        <span className="text-xs font-bold text-white">{service.category}</span>
                      </div>
                    </div>

                    {/* 5. Bottom Area: Overlaid Text Content & Fixed Action Strip */}
                    <div className="relative z-20 space-y-4">
                      {/* Overlaid Title & Description */}
                      <div className="px-6 space-y-2">
                        <span className="inline-block text-[11px] font-bold text-[#FFB703] uppercase tracking-widest">
                          Vintours Travel Service
                        </span>
                        <h3 className="text-2xl font-extrabold font-serif text-white group-hover:text-[#FFB703] transition-colors leading-snug drop-shadow-md">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-200 leading-relaxed font-normal line-clamp-2 drop-shadow">
                          {service.description}
                        </p>
                      </div>

                      {/* 6. Fixed Bottom Action Bar Strip */}
                      <div className="w-full bg-slate-950/85 backdrop-blur-xl border-t border-white/15 p-3.5 flex items-center justify-between gap-3">
                        <button
                          onClick={() => openEnquiry(service.title, service.category)}
                          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] hover:from-[#00B4D8] hover:to-[#0077B6] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group/btn cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span className="font-extrabold text-[11px]">Book Service</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        <button
                          onClick={() => handleWhatsAppService(service)}
                          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-white" />
                          <span className="font-extrabold text-[11px]">WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* INSTANT QUOTE CTA BANNER (Standardized PromoBanner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanner
          subTitle="Limited Time Offer"
          titlePrefix="Get up to "
          titleHighlight="30% OFF"
          titleSuffix="on all custom bus & car rentals"
          buttonText="Explore Deals"
          secondaryButtonText="WhatsApp Dispatch"
          onButtonClick={() => openEnquiry("Services Page Promo Banner", "30% OFF Service Offer")}
        />
      </section>
    </div>
  );
}
