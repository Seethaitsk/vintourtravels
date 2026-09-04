"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useEnquiry } from "@/components/EnquiryContext";

interface PromoBannerProps {
  subTitle?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  whatsappNumber?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function PromoBanner({
  subTitle = "Limited Time Offer",
  titlePrefix = "Get up to ",
  titleHighlight = "30% OFF",
  titleSuffix = "on your next adventure",
  buttonText = "Explore Deals",
  secondaryButtonText,
  whatsappNumber = "911234567890",
  onButtonClick,
  className = "",
}: PromoBannerProps) {
  const { openEnquiry } = useEnquiry();

  const handlePrimaryClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      openEnquiry("Promo Banner - 30% OFF Offer", "Special Discount Offer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-[26px] sm:rounded-[32px] bg-gradient-to-r from-[#051728] via-[#0A2038] to-[#0E2D50] text-white shadow-2xl min-h-[250px] sm:min-h-[270px] flex items-center border border-white/15 ${className}`}
    >
      {/* Subtle ambient glow behind left text */}
      <div className="absolute top-0 left-0 w-96 h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-500/15 via-transparent to-transparent pointer-events-none z-0" />

      {/* Vibrant Right-side Mountain Traveler Image */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[55%] lg:w-[50%] h-full z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
          alt="Adventure Traveler"
          className="w-full h-full object-cover object-center sm:object-right"
        />
        {/* Soft Directional Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2038] via-[#0A2038]/80 via-30% to-transparent z-10" />
      </div>

      {/* Left Content Column */}
      <div className="relative z-20 p-6 sm:p-10 lg:p-14 max-w-xl space-y-4">
        {/* Subtitle / Tag */}
        {subTitle && (
          <span className="text-sm font-serif font-semibold text-[#FFC107] tracking-wider block drop-shadow-sm">
            {subTitle}
          </span>
        )}

        {/* Main Headline with Serif Typography */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-[1.18] text-white tracking-tight drop-shadow-md">
          {titlePrefix}
          {titleHighlight && (
            <span className="text-[#FFC107] font-serif font-normal">{titleHighlight} </span>
          )}
          <br className="hidden sm:inline" />
          <span className="text-slate-100 font-serif">{titleSuffix}</span>
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
          <button
            onClick={handlePrimaryClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-white hover:bg-slate-100 text-[#051728] font-extrabold text-sm rounded-full shadow-xl transition-all cursor-pointer border border-white text-center"
          >
            <span>{buttonText}</span>
          </button>

          {secondaryButtonText && (
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Vintours%20Travels,%20I'd%20like%20to%20enquire%20about%20special%20offers.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-full shadow-xl transition-all cursor-pointer border border-emerald-500/40 text-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-white" />
              <span>{secondaryButtonText}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
