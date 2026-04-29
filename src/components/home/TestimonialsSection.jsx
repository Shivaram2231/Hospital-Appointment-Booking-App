import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Cardiac Patient",
    text: "The care I received at MediCare Sanctuary was unlike anything I had experienced before. The doctors were not just skilled — they were genuinely compassionate. I felt like I was in a five-star hotel, not a hospital.",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Anita Sharma",
    role: "Mother of a Pediatric Patient",
    text: "My daughter was treated here for a complex condition. The pediatric team was extraordinary. They made her feel safe and comfortable throughout. The facility itself felt like a healing sanctuary — warm, clean, and reassuring.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Dr. Marcus Lee",
    role: "Referred Patient, Neurology",
    text: "As a doctor myself, I know what to look for. MediCare Sanctuary operates at the highest level — clinical protocols, equipment, and most importantly, the patient-first culture that every hospital should aspire to.",
    rating: 5,
    initials: "ML",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Orthopedic Surgery Patient",
    text: "My knee replacement surgery and recovery were handled with absolute professionalism. The physio team was incredible and the suites felt like a boutique hotel. I healed faster because I was so relaxed.",
    rating: 5,
    initials: "FA",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-[#0D3B66] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E29578]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Patient Stories</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Voices of Trust</h2>

        <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-10 md:p-14">
          <Quote className="w-10 h-10 text-[#E29578] mx-auto mb-6 opacity-70" />

          <p className="text-white/85 text-xl leading-relaxed italic mb-8">"{t.text}"</p>

          <div className="flex items-center justify-center gap-1 mb-6">
            {Array(t.rating).fill(0).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E29578] flex items-center justify-center text-white font-bold">
              {t.initials}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-white/50 text-sm">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#E29578] w-6" : "bg-white/30"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}