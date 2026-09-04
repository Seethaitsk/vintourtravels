"use client";

import React, { useState } from "react";
import { MessageSquare, PhoneCall, Bus, X, Sparkles } from "lucide-react";
import { useEnquiry } from "./EnquiryContext";

export const FloatingContact: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { openEnquiry } = useEnquiry();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 group">
      {/* Option menu pops up when expanded */}
      {expanded && (
        <div className="flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-200 mb-1">
          <a
            href="https://wa.me/911234567890?text=Hi%20Vintours%20Travels,%20I'd%20like%20to%20enquire%20about%20your%20bus%20services%20and%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs px-3.5 py-2 rounded-full shadow-lg transition-all"
          >
            <span>WhatsApp Us Directly</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
            </div>
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 bg-[#0A2540] hover:bg-[#05192D] text-white font-medium text-xs px-3.5 py-2 rounded-full shadow-lg transition-all"
          >
            <span>Call 24/7 Helpline</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              openEnquiry("Quick General Enquiry", "Floating Contact");
            }}
            className="flex items-center gap-2.5 bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#FFB703] text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-full shadow-xl transition-all cursor-pointer border border-[#FFB703]/40"
          >
            <span>Book / Instant Quote</span>
            <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center shrink-0">
              <Bus className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#0A2540] via-[#0077B6] to-[#00B4D8] text-white rounded-full shadow-2xl transition-all duration-300 ring-2 sm:ring-4 ring-white/50 active:scale-95 cursor-pointer"
        aria-label="Contact options"
      >
        {expanded ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 rotate-90" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </button>
    </div>
  );
};
