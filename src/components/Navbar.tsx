"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bus, Phone, Menu, X, MessageSquare, Compass, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiry } from "./EnquiryContext";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A2540]/90 backdrop-blur-md border-b border-white/15 text-white transition-all shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#0A2540] flex items-center justify-center shadow-md border border-white/15">
              <Bus className="w-5 h-5 text-[#FFB703]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight font-serif text-white block">
                Vintours <span className="text-[#FFB703]">&</span> Travels
              </span>
              <span className="block text-[10px] text-slate-300 font-medium tracking-widest uppercase">
                Premium Coach & Charter Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider transition-colors relative py-2 ${
                    active
                      ? "text-[#FFB703] font-bold"
                      : "text-slate-300 hover:text-white font-semibold"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFB703] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-semibold transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => openEnquiry("Ticket Booking Enquiry", "Navbar CTA")}
              className="px-5 py-2.5 rounded-full bg-[#FFB703] hover:bg-[#e5a400] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
            >
              Book / Enquire
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white/90 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#05192D] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-[#00B4D8] text-white font-bold"
                    : "text-slate-200 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiry("Mobile Menu Booking", "Navbar");
                }}
                className="w-full py-3 bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-slate-950 font-bold rounded-xl text-center shadow-md active:scale-98 transition-transform"
              >
                Book / Enquire Now
              </button>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
