"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Globe,
  Share2,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { useEnquiry } from "@/components/EnquiryContext";

export default function ContactPage() {
  const { openEnquiry } = useEnquiry();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Bus Ticket Booking",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Vintours Travels! I'd like to get in touch regarding: ${formData.subject}. Name: ${formData.name || 'Valued Passenger'}, Phone: ${formData.phone || 'N/A'}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/911234567890?text=${encoded}`, "_blank");
  };

  return (
    <div className="space-y-16 pb-16">
      {/* HEADER BANNER */}
      <section className="relative bg-[#05192D] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80')` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/10">
            24/7 Operations & Dispatch Control
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-white">
            Contact Vintours & Travels
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Reach out to our central dispatch desk for seat availability, boarding points, charter quotes, or custom route bookings.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Clean Visual Image Collage (Matching Reference) */}
          <div className="lg:col-span-1 flex items-center justify-center relative py-4 sm:py-6 overflow-visible">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Background Circular Shape */}
              <img
                src="/images/CircleShape.webp"
                alt="Background Yellow Shape"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-md"
              />

              {/* Text Overlay inside/above the Circle */}
              <div className="absolute top-[11%] sm:top-[12%] left-0 right-0 z-30 text-center px-4 pointer-events-none flex flex-col items-center justify-center">
                <span className="block font-serif italic text-lg sm:text-xl lg:text-2xl text-[#0077B6] font-bold tracking-wide drop-shadow-sm mb-0.5">
                  Meet with
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold font-serif text-white tracking-tight leading-none drop-shadow-md whitespace-nowrap">
                  Expert Guide
                </h2>
              </div>

              {/* Foreground Traveler Image */}
              <img
                src="/images/team-l-pic.webp"
                alt="Meet with Expert Guide"
                className="relative z-20 w-full h-full object-contain object-bottom pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: 5. Contact Form */}
          <div className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-2xl font-bold font-serif text-[#0A2540]">Send Us an Instant Message</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto sm:mx-0">
                Fill out the form below and our operations manager will respond within 15 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-slate-800">Message Received!</h4>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Thank you, {formData.name || 'Valued Passenger'}. Our booking manager will contact you shortly at {formData.phone || formData.email}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#0A2540] text-white text-sm font-bold rounded-full hover:bg-[#05192D] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Enquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-slate-800"
                    >
                      <option value="Bus Ticket Booking">Bus Ticket Booking</option>
                      <option value="Private Coach Charter">Private Coach Charter</option>
                      <option value="Car / Van Rental">Car or Van Rental</option>
                      <option value="Tour Package Enquiry">Tour Package Enquiry</option>
                      <option value="Corporate Shuttle Contract">Corporate Shuttle Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Message / Route Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Specify departure city, destination, travel date, seat count, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-[#0A2540] hover:bg-[#05192D] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. EMBEDDED GOOGLE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="px-2 flex items-center justify-between">
            <h3 className="text-xl font-bold font-serif text-[#0A2540]">Find Our Central Hub on Google Maps</h3>
            <span className="text-xs text-[#0077B6] font-semibold">Interactive Map View</span>
          </div>
          <div className="h-96 w-full rounded-2xl overflow-hidden">
            <iframe
              title="Vintours Office Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7925761803734!2d72.88344731490104!3d19.0728328870894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d76a7b7df5%3A0x868b375b47a7596a!2sMumbai%20Central!5e0!3m2!1sen!2sin!4v1689100000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
