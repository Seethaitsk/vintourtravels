"use client";

import React from "react";

export const FloatingContact: React.FC = () => {
  return (
    <aside className="fixed bottom-5 right-5 z-50">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/911234567890?text=Hi%20Vintours%20Travels,%20I'd%20like%20to%20enquire%20about%20your%20bus%20services%20and%20packages."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Periodic Glowing Pulse Rings */}
        <span className="absolute -inset-2.5 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />

        {/* Outline WhatsApp Icon matching requested screenshot */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.6828 3.46194 15.2582 4.26786 16.6111L3.25 20.75L7.49509 19.7891C8.80949 20.5599 10.3541 21 12 21Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 9.75C9.25 9.33579 9.58579 9 10 9H10.5C10.74 9 10.95 9.17 10.99 9.41L11.4 11.41C11.44 11.64 11.34 11.87 11.16 12L10.5 12.5C11.12 13.74 12.26 14.88 13.5 15.5L14 14.84C14.13 14.66 14.36 14.56 14.59 14.6L16.59 15.01C16.83 15.05 17 15.26 17 15.5V16C17 16.4142 16.6642 16.75 16.25 16.75C12.384 16.75 9.25 13.616 9.25 9.75Z"
            fill="white"
          />
        </svg>
      </a>
    </aside>
  );
};








