import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D3B66] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="font-bold text-xl leading-none">MediCare</div>
                <div className="text-xs tracking-widest uppercase text-white/60">Sanctuary</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Redefining healthcare through compassion, precision, and the finest medical expertise. Your health is our highest calling.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E29578] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {["Emergency Care", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Radiology", "Surgery"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-white/60 hover:text-[#E29578] text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patients */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Patients</h4>
            <ul className="space-y-3">
              {["Book Appointment", "Find a Doctor", "Patient Portal", "Insurance", "Medical Records", "Health Packages", "Lab Results", "Visitor Info"].map((s) => (
                <li key={s}>
                  <Link to="/appointments" className="text-white/60 hover:text-[#E29578] text-sm transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E29578] mt-1 shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  1234 Emerald Sanctuary Blvd,<br />
                  Medical District, XXXXX
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E29578] shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">+1 (234) 567-890</p>
                  <p className="text-[#E29578] text-sm font-semibold">Emergency: 108</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E29578] shrink-0" />
                <p className="text-white/60 text-sm">care@medicaresan.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E29578] mt-1 shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p className="text-[#E29578] text-sm font-semibold">Emergency: 24 / 7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Banner */}
      <div className="border-t border-white/10 bg-[#091f36]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <MapPin className="w-4 h-4 text-[#E29578]" />
            <span>1234 Emerald Sanctuary Blvd, Medical District, XXXXX — All Rights Reserved © 2026 MediCare Sanctuary</span>
          </div>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}