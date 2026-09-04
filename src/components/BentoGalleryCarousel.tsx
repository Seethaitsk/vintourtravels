"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryDestination {
  id: string;
  destinationName: string;
  subtitle: string;
  heroImage: string;
  exploreTitle: string;
  exploreDesc: string;
  tallCenterImage: string;
  stayTitle: string;
  stayDesc: string;
  tallRightImage: string;
  cuisineTitle: string;
  cuisineDesc: string;
  cuisineImage: string;
  escapeTitle: string;
  escapeDesc: string;
  gridPhoto2: string;
}

const DESTINATIONS: GalleryDestination[] = [
  {
    id: "kerala",
    destinationName: "Kerala Backwaters",
    subtitle: "India - God's Own Country",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    exploreTitle: "Explore Alleppey",
    exploreDesc: "Glide through tranquil palm-fringed lagoons & canals.",
    tallCenterImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    stayTitle: "Luxury Houseboats",
    stayDesc: "Air-conditioned floating suites with private chefs.",
    tallRightImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    cuisineTitle: "Coastal Cuisine",
    cuisineDesc: "Authentic Karimeen pollichathu & fresh coconut delish.",
    cuisineImage: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    escapeTitle: "A Tropical Serenade Awaits",
    escapeDesc: "Immerse in ayurvedic wellness spas, tea hills of Munnar, and pristine Arabian coastlines.",
    gridPhoto2: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rajasthan",
    destinationName: "Rajasthan Royal Circuit",
    subtitle: "India - Land of Forts & Palaces",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    exploreTitle: "Explore Jaipur & Jaisalmer",
    exploreDesc: "Discover golden desert dunes and grand pink stone forts.",
    tallCenterImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    stayTitle: "Heritage Haveli Stays",
    stayDesc: "Royal courtyard suites with traditional folk performances.",
    tallRightImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    cuisineTitle: "Royal Thali",
    cuisineDesc: "Savor Dal Baati Churma & rich Marwari delicacies.",
    cuisineImage: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    escapeTitle: "Regal Heritage & Desert Safaris",
    escapeDesc: "Witness sunset camel rides over Sam sand dunes and private palace dining tours.",
    gridPhoto2: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "himachal",
    destinationName: "Himachal Alpine Valleys",
    subtitle: "India - Queen of Snow Peaks",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    exploreTitle: "Explore Manali & Spiti",
    exploreDesc: "Traverse high altitude mountain passes & pine forests.",
    tallCenterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    stayTitle: "Cedar Chalets",
    stayDesc: "Warm wooden retreats overlooking snow-capped peaks.",
    tallRightImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    cuisineTitle: "Pahari Flavors",
    cuisineDesc: "Siddu, hot butter tea & mountain trout delicacies.",
    cuisineImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    escapeTitle: "Snowy Mountain Escapes Await",
    escapeDesc: "Experience Solang Valley paragliding, Rohtang snow points, and peaceful Buddhist monasteries.",
    gridPhoto2: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "goa",
    destinationName: "Goa Sunshine Coast",
    subtitle: "India - Golden Beaches & Nightlife",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    exploreTitle: "Explore Palolem & Calangute",
    exploreDesc: "Sun-soaked sandy shores, Portuguese heritage & watersports.",
    tallCenterImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    stayTitle: "Beachfront Villas",
    stayDesc: "Private sea-view resorts with infinity pool lounges.",
    tallRightImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    cuisineTitle: "Goan Seafood",
    cuisineDesc: "Spicy prawn balchão & fresh grilled kingfish feasts.",
    cuisineImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    escapeTitle: "Sun-Kissed Coastal Bliss",
    escapeDesc: "Cruise along Mandovi river at sunset and dance under coconut palm groves.",
    gridPhoto2: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];

interface BentoGalleryCarouselProps {
  interval?: number; // default 2000ms (2 seconds)
}

export const BentoGalleryCarousel: React.FC<BentoGalleryCarouselProps> = ({
  interval = 2000,
}) => {
  const [destIndex, setDestIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalDestinations = DESTINATIONS.length;
  const activeDest = DESTINATIONS[destIndex];

  const nextDestination = useCallback(() => {
    setDestIndex((prev) => (prev + 1) % totalDestinations);
  }, [totalDestinations]);

  // Real-time timer logic for auto-play (3 seconds default)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextDestination();
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, interval, nextDestination]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft Background Backdrop Glow */}
      <div className="absolute -z-10 -top-8 left-1/4 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -z-10 -bottom-8 right-1/4 w-96 h-96 bg-[#0077B6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Bento Grid Layout - Perfectly Balanced Heights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4.5">

        {/* LEFT HALF (Cols 1-6) */}
        <div className="lg:col-span-6 flex flex-col gap-4.5">
          {/* Top Hero Card */}
          <div className="relative h-[340px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group hover:shadow-2xl transition-all duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={`hero-${destIndex}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <img
                  src={activeDest.heroImage}
                  alt={activeDest.destinationName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/30 to-transparent" />
                
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between text-white">
                  <div className="flex justify-start">
                    <span className="inline-flex items-center gap-1.5 bg-[#0A2540]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#00B4D8] border border-[#00B4D8]/30 shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-[#00B4D8]" />
                      Featured Destination
                    </span>
                  </div>

                  <div className="space-y-1.5 z-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
                      {activeDest.destinationName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                      {activeDest.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Split (2 Cards side by side) */}
          <div className="grid grid-cols-2 gap-4.5 h-[170px]">
            {/* Escape Text Card */}
            <div className="relative rounded-3xl bg-[#0A2540] p-5 text-white border border-slate-700/60 hover:border-[#00B4D8]/50 flex flex-col justify-center shadow-md hover:shadow-xl transition-all duration-300 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`escape-${destIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1.5"
                >
                  <h4 className="text-xs sm:text-sm font-bold font-serif text-[#00B4D8] leading-snug group-hover:text-white transition-colors">
                    {activeDest.escapeTitle}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
                    {activeDest.escapeDesc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Photo Tile 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group hover:shadow-2xl transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`grid2-${destIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeDest.gridPhoto2}
                    alt={activeDest.destinationName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0A2540]/20 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* RIGHT HALF (Cols 7-12) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4.5">

          {/* Column A (Explore -> Tall Center -> Stay) */}
          <div className="flex flex-col gap-4.5 justify-between">
            {/* Explore Card */}
            <div className="rounded-3xl bg-[#0A2540] p-4.5 text-white border border-slate-700/60 hover:border-[#00B4D8]/50 shadow-md hover:shadow-xl transition-all duration-300 h-[115px] flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00B4D8]">
                  Explore
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`explore-${destIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xs sm:text-sm font-bold font-serif text-white group-hover:text-[#00B4D8] transition-colors">
                    {activeDest.exploreTitle}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-snug line-clamp-2 mt-0.5">
                    {activeDest.exploreDesc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tall Center Image */}
            <div className="relative h-[290px] sm:h-[305px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group hover:shadow-2xl transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`center-tall-${destIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeDest.tallCenterImage}
                    alt={activeDest.destinationName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stay Card */}
            <div className="rounded-3xl bg-[#0A2540] p-4.5 text-white border border-slate-700/60 hover:border-[#00B4D8]/50 shadow-md hover:shadow-xl transition-all duration-300 h-[120px] flex flex-col justify-between group">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00B4D8]">
                Stay
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`stay-${destIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xs sm:text-sm font-bold font-serif text-white group-hover:text-[#00B4D8] transition-colors">
                    {activeDest.stayTitle}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-snug line-clamp-2 mt-0.5">
                    {activeDest.stayDesc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Column B (Tall Right -> Cuisine -> Food Photo) */}
          <div className="flex flex-col gap-4.5 justify-between">
            {/* Tall Right Image */}
            <div className="relative h-[250px] sm:h-[265px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group hover:shadow-2xl transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-tall-${destIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeDest.tallRightImage}
                    alt={activeDest.destinationName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Cuisine Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#0A2540] p-4.5 text-white border border-[#00B4D8]/30 shadow-md hover:shadow-xl transition-all duration-300 h-[120px] flex flex-col justify-between group">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00B4D8]">
                Cuisine
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cuisine-${destIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xs sm:text-sm font-bold font-serif text-white group-hover:text-[#00B4D8] transition-colors">
                    {activeDest.cuisineTitle}
                  </h4>
                  <p className="text-[11px] text-slate-200 leading-snug line-clamp-2 mt-0.5">
                    {activeDest.cuisineDesc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Food Photo Card */}
            <div className="relative h-[140px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group hover:shadow-2xl transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`food-${destIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeDest.cuisineImage}
                    alt={activeDest.cuisineTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0A2540]/20 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
