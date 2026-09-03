"use client";

import React from "react";
import Link from "next/link";
import { Bus, MapPin, Phone, Mail, MessageSquare, Globe, Share2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05192D] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center shadow-lg">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-serif text-white">
                Vintours <span className="text-[#FFB703]">&</span> Travels
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to providing safe, comfortable, and affordable bus travel across the country. Our modern fleet of Volvo sleeper and seater coaches ensures you reach your destination relaxed.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00B4D8] text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00B4D8] text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#00B4D8] text-white flex items-center justify-center transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold font-serif text-lg mb-4 border-b border-slate-800 pb-2">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#00B4D8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00B4D8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00B4D8] transition-colors">Bus Services & Rentals</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#00B4D8] transition-colors">Featured Tour Packages</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#00B4D8] transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00B4D8] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Bus Routes */}
          <div>
            <h4 className="text-white font-bold font-serif text-lg mb-4 border-b border-slate-800 pb-2">Popular Connections</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Mumbai ⇄ Goa (AC Sleeper)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Delhi ⇄ Manali (Volvo Multi-Axle)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bangalore ⇄ Munnar (Night Express)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Chennai ⇄ Tirupati (Darshan Special)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hyderabad ⇄ Ooty (Premium Seater)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pune ⇄ Mahabaleshwar (Short-Haul)</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-white font-bold font-serif text-lg mb-4 border-b border-slate-800 pb-2">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB703] shrink-0 mt-0.5" />
                <span>123 Transport Highway, Sector 45, City Center, Main Hub - 100010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span>+91 12345 67890 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span>bookings@vintoursandtravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vintours & Travels. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
