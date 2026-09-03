"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GallerySlide {
  id: string | number;
  image: string;
  title: string;
  subtitle: string;
  category?: string;
}

interface GalleryCarouselProps {
  slides: GallerySlide[];
  interval?: number; // duration in ms, default 2000
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  slides,
  interval = 2000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;
  const intervalSeconds = Math.floor(interval / 1000);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Timer logic for auto-play
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, interval, nextSlide]);

  // Helper to compute modular offset in [-2, -1, 0, 1, 2]
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > Math.floor(totalSlides / 2)) diff -= totalSlides;
    if (diff < -Math.floor(totalSlides / 2)) diff += totalSlides;
    return diff;
  };

  return (
    <div
      className="relative w-full overflow-hidden py-2 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* DESKTOP 5-SLIDE COVERFLOW LAYOUT */}
      <div className="hidden md:block relative h-[360px] lg:h-[390px] w-full max-w-6xl mx-auto px-4">
        {slides.map((slide, index) => {
          const offset = getOffset(index);
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          let leftPercent = "50%";
          let transform = "translate(-50%, 0) scale(1)";
          let width = "42%";
          let opacity = 1;
          let zIndex = 30;
          let filter = "none";

          if (offset === 0) {
            // Active Center Slide
            leftPercent = "50%";
            transform = "translate(-50%, 0) scale(1)";
            width = "42%";
            opacity = 1;
            zIndex = 30;
          } else if (offset === -1) {
            // Immediate Left Slide
            leftPercent = "26%";
            transform = "translate(-50%, 0) scale(0.85)";
            width = "34%";
            opacity = 0.55;
            zIndex = 20;
            filter = "brightness(0.65)";
          } else if (offset === 1) {
            // Immediate Right Slide
            leftPercent = "74%";
            transform = "translate(-50%, 0) scale(0.85)";
            width = "34%";
            opacity = 0.55;
            zIndex = 20;
            filter = "brightness(0.65)";
          } else if (offset === -2) {
            // Outer Left Slide
            leftPercent = "10%";
            transform = "translate(-50%, 0) scale(0.72)";
            width = "26%";
            opacity = 0.25;
            zIndex = 10;
            filter = "brightness(0.4)";
          } else if (offset === 2) {
            // Outer Right Slide
            leftPercent = "90%";
            transform = "translate(-50%, 0) scale(0.72)";
            width = "26%";
            opacity = 0.25;
            zIndex = 10;
            filter = "brightness(0.4)";
          }

          const isActive = offset === 0;

          return (
            <div
              key={slide.id}
              onClick={() => !isActive && goToSlide(index)}
              style={{
                left: leftPercent,
                transform,
                width,
                opacity,
                zIndex,
                filter,
              }}
              className={`absolute top-0 bottom-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-out border border-white/20 ${
                !isActive ? "cursor-pointer hover:opacity-75" : ""
              }`}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />

              {/* Bottom Dark Gradient for Legibility */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent transition-opacity duration-500 ${
                  isActive ? "opacity-90" : "opacity-60"
                }`}
              />

              {/* Content (Active Slide Only) */}
              {isActive && (
                <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-between text-white pointer-events-none">
                  {/* Top Category Badge */}
                  <div className="flex justify-start">
                    {slide.category && (
                      <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#FFB703] border border-white/20 shadow-md">
                        <MapPin className="w-3 h-3 text-[#FFB703]" />
                        {slide.category}
                      </span>
                    )}
                  </div>

                  {/* Text Fade-Up Animation Positioned at Bottom of Image */}
                  <div className="mt-auto mb-2 text-center w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`text-${activeIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="space-y-1 px-4"
                      >
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-extrabold text-white tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          {slide.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                          {slide.subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Circular Left Navigation Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl transition-all cursor-pointer z-40 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Circular Right Navigation Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl transition-all cursor-pointer z-40 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* MOBILE RESPONSIVE CAROUSEL LAYOUT */}
      <div className="block md:hidden px-4">
        <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex justify-start">
                  {slides[activeIndex].category && (
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#FFB703] border border-white/20">
                      {slides[activeIndex].category}
                    </span>
                  )}
                </div>

                {/* Mobile Bottom Text Fade Up */}
                <div className="mt-auto mb-2 text-center">
                  <motion.div
                    key={`mob-text-${activeIndex}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-1"
                  >
                    <h3 className="text-base font-serif font-bold text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                      {slides[activeIndex].title}
                    </h3>
                    <p className="text-xs text-slate-200 font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {slides[activeIndex].subtitle}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Mobile Touch Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 z-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 z-30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-6 bg-[#0A2540]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
