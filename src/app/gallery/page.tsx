"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Eye, X, Bus, MapPin, Sparkles } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryContext";

export default function GalleryPage() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const categories = ["All", "Travel & Highways", "Vehicles & Fleet", "Locations", "Events & Charters"];

  const galleryItems = [
    {
      id: "g1",
      title: "Volvo Sleeper Night Transit",
      subtitle: "Intercity Highway Express",
      category: "Vehicles & Fleet",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g2",
      title: "Luxury Berth & AC Comfort",
      subtitle: "Volvo AC Sleeper Interior",
      category: "Vehicles & Fleet",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g3",
      title: "Scenic Western Ghats Route",
      subtitle: "Mumbai to Goa Highway",
      category: "Travel & Highways",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g4",
      title: "Solang Valley Mountain Pass",
      subtitle: "Manali Volvo Expedition",
      category: "Locations",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g5",
      title: "Corporate Fleet Lineup",
      subtitle: "MNC Annual Outing Event",
      category: "Events & Charters",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g6",
      title: "Munnar Tea Estates Stopover",
      subtitle: "Kerala Weekend Bus Tour",
      category: "Locations",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g7",
      title: "Chauffeur Driven Luxury SUV",
      subtitle: "VIP Private Travel Service",
      category: "Vehicles & Fleet",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g8",
      title: "Wedding Party Bus Escort",
      subtitle: "Destination Marriage Charter",
      category: "Events & Charters",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "g9",
      title: "Sunset Expressway Drive",
      subtitle: "Express Intercity Highway",
      category: "Travel & Highways",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      {/* HEADER BANNER */}
      <section className="relative bg-[#05192D] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80')` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
            Life on the Highway
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-white">
            Photo Gallery & Fleet Moments
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Explore photos of our vehicles, highway journeys, scenic destinations, and corporate charter events.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS & GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#0A2540] text-[#00B4D8] shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg({ src: item.image, title: item.title, subtitle: item.subtitle })}
              className="relative h-72 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer group border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <span className="self-end bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>

                <div>
                  <span className="text-xs text-[#FFB703] font-medium block">{item.subtitle}</span>
                  <h3 className="text-xl font-bold font-serif">{item.title}</h3>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 rounded-full p-3 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <img src={lightboxImg.src} alt={lightboxImg.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#00B4D8] uppercase tracking-wider font-semibold">
                  {lightboxImg.subtitle}
                </span>
                <h3 className="text-2xl font-bold font-serif">{lightboxImg.title}</h3>
              </div>
              <button
                onClick={() => {
                  setLightboxImg(null);
                  openEnquiry(`Gallery Image: ${lightboxImg.title}`, "Gallery Enquiry");
                }}
                className="px-6 py-2.5 rounded-full bg-[#FFB703] text-slate-950 font-bold text-xs hover:bg-[#FB8500] transition-colors"
              >
                Enquire Route / Vehicle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
