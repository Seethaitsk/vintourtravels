"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Bus,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Send,
  Filter,
  Search,
  ShieldCheck,
  Hotel,
  Compass,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiry } from "@/components/EnquiryContext";
import PromoBanner from "@/components/PromoBanner";

// Easy-to-update package data structure
export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  days: string;
  price: string;
  originalPrice?: string;
  places: string[];
  image: string;
  description: string;
  category: string;
  busType: string;
  rating?: string;
  reviewsCount?: number;
}

export const tourPackagesData: TourPackage[] = [
  {
    id: "pkg-1",
    name: "Mumbai to Goa Beach Odyssey",
    destination: "Goa",
    days: "4 Days / 3 Nights",
    price: "₹7,999",
    originalPrice: "₹9,999",
    places: ["Calangute Beach", "Fort Aguada", "Dudhsagar Waterfalls", "Mandovi Sunset Cruise"],
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80",
    description: "Experience sun-kissed beaches, Portuguese heritage forts, and lively night markets with roundtrip Volvo AC sleeper transit.",
    category: "Beach Escapes",
    busType: "Volvo Multi-Axle AC Sleeper",
    rating: "4.9",
    reviewsCount: 142,
  },
  {
    id: "pkg-2",
    name: "Bangalore to Munnar Tea Trail",
    destination: "Munnar, Kerala",
    days: "3 Days / 2 Nights",
    price: "₹5,500",
    originalPrice: "₹6,800",
    places: ["Tea Gardens", "Mattupetty Dam", "Echo Point", "Spice Plantation"],
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    description: "Unwind among lush rolling tea hills, misty valleys, and fresh spice gardens with luxury sleeper coach travel.",
    category: "Hill Stations",
    busType: "AC Seater & Sleeper Deluxe",
    rating: "4.8",
    reviewsCount: 98,
  },
  {
    id: "pkg-3",
    name: "Delhi to Manali Snow Escape",
    destination: "Manali, Himachal Pradesh",
    days: "5 Days / 4 Nights",
    price: "₹12,000",
    originalPrice: "₹14,500",
    places: ["Solang Valley", "Atal Tunnel", "Hadimba Temple", "Kasol Valley"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "Conquer snow-clad peaks, mountain passes, and Himalayan valleys with roundtrip overnight Volvo AC coach travel.",
    category: "Hill Stations",
    busType: "Volvo AC Multi-Axle",
    rating: "4.9",
    reviewsCount: 215,
  },
  {
    id: "pkg-4",
    name: "Chennai to Tirupati Darshan Express",
    destination: "Tirupati, Andhra Pradesh",
    days: "2 Days / 1 Night",
    price: "₹3,499",
    originalPrice: "₹4,200",
    places: ["Tirumala Temple", "Padmavathi Temple", "Kapila Theertham"],
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
    description: "Spiritual pilgrimage yatra including special VIP darshan pass, pure vegetarian dining, and AC coach travel.",
    category: "Pilgrimage",
    busType: "Pushback AC Tourist Coach",
    rating: "4.9",
    reviewsCount: 180,
  },
  {
    id: "pkg-5",
    name: "Hyderabad to Ooty & Coonoor Retreat",
    destination: "Ooty, Tamil Nadu",
    days: "4 Days / 3 Nights",
    price: "₹8,999",
    originalPrice: "₹11,000",
    places: ["Botanical Garden", "Ooty Lake", "Doddabetta Peak", "Nilgiri Toy Train"],
    image: "https://images.unsplash.com/photo-1596423735880-5f2a689b903e?auto=format&fit=crop&w=800&q=80",
    description: "Escape to the Queen of Hill Stations with pine forest trails, lake boating passes, and luxury sleeper transit.",
    category: "Hill Stations",
    busType: "Luxury Sleeper Express",
    rating: "4.8",
    reviewsCount: 112,
  },
  {
    id: "pkg-6",
    name: "Golden Triangle Heritage Express",
    destination: "Agra & Jaipur",
    days: "5 Days / 4 Nights",
    price: "₹14,500",
    originalPrice: "₹17,999",
    places: ["Taj Mahal", "Amber Fort", "Hawa Mahal", "Fatehpur Sikri"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    description: "Immerse in royal Indian heritage, Mughal architecture, and Rajasthani culture with a chartered luxury coach.",
    category: "Heritage Tours",
    busType: "Charter Volvo Coach",
    rating: "5.0",
    reviewsCount: 86,
  },
];

export default function PackagesPage() {
  const { openEnquiry } = useEnquiry();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Beach Escapes", "Hill Stations", "Pilgrimage", "Heritage Tours"];

  // Filtered logic for search query + category
  const filteredPackages = useMemo(() => {
    return tourPackagesData.filter((pkg) => {
      const matchesCat = selectedCategory === "All" || pkg.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pkg.name.toLowerCase().includes(q) ||
        pkg.destination.toLowerCase().includes(q) ||
        pkg.places.some((p) => p.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppPackage = (pkg: TourPackage) => {
    const text = `Hi Vintours Travels! I want to enquire about the tour package: "${pkg.name}" (${pkg.destination}). Duration: ${pkg.days}, Price: ${pkg.price}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/911234567890?text=${encoded}`, "_blank");
  };

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return tourPackagesData.length;
    return tourPackagesData.filter((p) => p.category === cat).length;
  };

  return (
    <div className="space-y-16 pb-20 bg-slate-50/50">
      {/* HEADER BANNER */}
      <section className="relative bg-[#05192D] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
            Handcrafted Bus & Holiday Getaways
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-white">
            Curated Bus Tour Packages
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            All-inclusive holiday getaways featuring luxury Volvo AC coach transit, handpicked boutique hotels, guided sightseeing, and 24/7 dispatch support.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE SEARCH & CATEGORY FILTER CONTROL BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200/80 space-y-4 sm:space-y-6">
          {/* Top Row: Search Input Field + Results Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search package name, destination, or places..."
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 text-slate-800 text-xs sm:text-sm rounded-full border border-slate-200 focus:outline-none focus:border-[#0077B6] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-[#0A2540]">{filteredPackages.length}</span> of{" "}
              <span className="font-bold text-[#0A2540]">{tourPackagesData.length}</span> tour packages
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#0A2540] text-[#FFB703] shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                      isActive ? "bg-[#FFB703] text-slate-950" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LUXURY PACKAGE CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPackages.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-sm space-y-4 max-w-md mx-auto">
            <Compass className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold font-serif text-[#0A2540]">No Tour Packages Found</h3>
            <p className="text-xs text-slate-500">
              We couldn't find any packages matching "{searchQuery}". Try searching for another city or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full bg-[#0A2540] text-white text-xs font-bold uppercase tracking-wider shadow hover:bg-[#05192D] transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/80 flex flex-col justify-between group"
                >
                  <div>
                    {/* 1. Package Cover Image & Floating Badges */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      {/* Dark Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-black/20" />

                      {/* Top Left: Duration Badge with Dark Glass */}
                      <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FFB703]" />
                        <span>{pkg.days}</span>
                      </div>

                      {/* Top Right: Category Tag Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
                        {pkg.category}
                      </div>

                      {/* Rating Badge (Bottom Left of Image) */}
                      {pkg.rating && (
                        <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold flex items-center gap-1 border border-white/10">
                          <Star className="w-3.5 h-3.5 fill-[#FFB703] text-[#FFB703]" />
                          <span>{pkg.rating}</span>
                          <span className="text-slate-300 text-[9px] font-normal">({pkg.reviewsCount})</span>
                        </div>
                      )}
                    </div>

                    {/* 2. Package Card Body */}
                    <div className="p-6 space-y-4">
                      {/* Destination Tag */}
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077B6] bg-sky-50 px-3 py-1 rounded-full border border-sky-100/80">
                        <MapPin className="w-3.5 h-3.5 text-[#0077B6]" />
                        <span>{pkg.destination}</span>
                      </div>

                      {/* Package Name */}
                      <h3 className="text-xl font-bold font-serif text-[#0A2540] group-hover:text-[#0077B6] transition-colors leading-snug">
                        {pkg.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {pkg.description}
                      </p>

                      {/* Transit Coach Line */}
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2 text-slate-700 text-xs">
                        <Bus className="w-4 h-4 text-[#0077B6] shrink-0" />
                        <span className="text-[11px] text-slate-500 font-medium shrink-0">Transit Coach:</span>
                        <span className="text-xs font-bold text-[#0A2540] truncate">{pkg.busType}</span>
                      </div>

                      {/* Places Covered Tags */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 block">
                          Places Covered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.places.map((place, pIdx) => (
                            <span
                              key={pIdx}
                              className="bg-[#0A2540]/5 text-[#0A2540] text-[11px] font-medium px-2.5 py-1 rounded-lg border border-[#0A2540]/10 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span>{place}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Pricing & Action Buttons */}
                  <div className="p-6 pt-0 space-y-4">
                    {/* Price Line */}
                    <div className="pt-3 border-t border-slate-100 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] text-slate-600 font-semibold uppercase tracking-wider block">
                          Starting Fare
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-extrabold text-[#0077B6] font-serif">
                            {pkg.price}
                          </span>
                          <span className="text-xs text-slate-600 font-normal">/ person</span>
                          {pkg.originalPrice && (
                            <span className="text-xs text-slate-600 line-through font-normal">
                              {pkg.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        Inclusive of Transit
                      </span>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="space-y-2">
                      <button
                        onClick={() => openEnquiry(pkg.name, `Package (${pkg.destination})`)}
                        className="w-full py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#05192D] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#0077B6]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Form Enquiry / Book</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => handleWhatsAppPackage(pkg)}
                        className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-white" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* 4. WHY BOOK PACKAGES WITH VINTOURS FEATURE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077B6] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 inline-block">
              Vintours Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540]">
              Why Passengers Book Packages With Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0077B6] flex items-center justify-center">
                <Hotel className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-serif text-[#0A2540]">3 & 4-Star Handpicked Hotels</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Stay at verified, hygienic hotels with complimentary breakfast and prime city proximity.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-serif text-[#0A2540]">Volvo AC Sleeper Transit</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Roundtrip Volvo multi-axle AC sleeper coach seat allocation with USB charging and fresh linen.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-serif text-[#0A2540]">Guided Sightseeing Passes</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pre-arranged local sightseeing passes, monument permits, and experienced local destination guides.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-serif text-[#0A2540]">Transparent Fares</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Zero hidden service surcharges or driver bata surprises. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanner
          subTitle="Limited Time Offer"
          titlePrefix="Get up to "
          titleHighlight="30% OFF"
          titleSuffix="on holiday package bookings"
          buttonText="Explore Deals"
          secondaryButtonText="WhatsApp Dispatch"
          onButtonClick={() => openEnquiry("Packages Promo Banner 30% OFF", "30% OFF Holiday Offer")}
        />
      </section>
    </div>
  );
}
