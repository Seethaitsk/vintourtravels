"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiry } from "./EnquiryContext";
import { X, Send, MessageSquare, CheckCircle2, Bus, Phone, Mail, User, Calendar, MapPin } from "lucide-react";

export const EnquiryModal: React.FC = () => {
  const { isOpen, itemTitle, itemCategory, closeEnquiry } = useEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    passengers: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeEnquiry();
    }, 2500);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Vintours Travels! I'm interested in: ${itemTitle} (${itemCategory}). Date: ${formData.date || 'Flexible'}, Passengers: ${formData.passengers}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/911234567890?text=${encoded}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeEnquiry}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[88vh] sm:max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden my-auto"
          >
            {/* Header (Shrink-0 so it stays fixed at top) */}
            <div className="bg-gradient-to-r from-[#0A2540] to-[#0077B6] p-4 sm:p-6 text-white relative shrink-0">
              <button
                onClick={closeEnquiry}
                className="absolute top-3.5 right-3.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 mb-1 text-[#FFB703] text-sm uppercase tracking-wider font-semibold">
                <Bus className="w-4 h-4" />
                <span>{itemCategory} Enquiry</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif pr-8 leading-snug">
                {itemTitle || "Enquire with Vintours Travels"}
              </h3>
              <p className="text-white/80 text-sm mt-0.5">Get instant availability & quotes within 15 minutes</p>
            </div>

            {/* Content Body (Scrollable flex-1 for mobile viewports) */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Enquiry Received!</h4>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    Thank you, {formData.name || 'Valued Passenger'}. Our transport manager will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number *</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3 top-3.5 text-slate-400 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Travel Date</label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 absolute left-3 top-3.5 text-slate-400 pointer-events-none" />
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all text-slate-800"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Special Requirements / Notes</label>
                      <textarea
                        rows={2}
                        placeholder="Pickup location, seat preference, or special requests..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all text-slate-800 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0A2540] hover:bg-[#05192D] text-white font-extrabold rounded-xl text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Instant Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat directly on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
  )}
</AnimatePresence>
  );
};
