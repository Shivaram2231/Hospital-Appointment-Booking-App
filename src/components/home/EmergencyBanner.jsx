import React from "react";
import { Phone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmergencyBanner() {
  return (
    <section className="py-16 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#0D3B66] to-[#1a5c99] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shrink-0 animate-pulse">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">24/7 Emergency Care</h3>
              <p className="text-white/60 text-base">Our trauma team is always ready. Call immediately in any emergency.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:108"
              className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Call 108
            </a>
            <Link
              to="/appointments"
              className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}