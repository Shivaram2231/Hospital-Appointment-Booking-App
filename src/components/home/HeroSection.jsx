import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/2d7fefa05_generated_image.png";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${offsetY * 0.3}px)`, willChange: "transform" }}
      >
        <img
          src={HERO_IMG}
          alt="MediCare Sanctuary Lobby"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66]/85 via-[#0D3B66]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-white/90 text-sm">
              <div className="w-2 h-2 bg-[#E29578] rounded-full animate-pulse" />
              <span className="tracking-wide">General Hospital & Emergency Care</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Your Health,{" "}
              <span className="block text-[#E29578]">Artfully</span>
              <span className="block">Managed.</span>
            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              World-class medical care delivered with the warmth of a sanctuary. Where precision meets compassion, every single day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-3 bg-[#E29578] hover:bg-[#c97d62] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 group"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm hover:bg-white/25 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
              >
                Meet Our Doctors
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { icon: Shield, text: "NABH Accredited" },
                { icon: Star, text: "4.9★ Patient Rating" },
                { icon: Users, text: "50,000+ Patients Served" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-[#E29578]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}