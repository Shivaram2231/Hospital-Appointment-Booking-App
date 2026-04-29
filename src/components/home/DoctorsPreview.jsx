import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. James Whitfield",
    specialty: "Chief Cardiologist",
    experience: "22 Years",
    rating: 4.9,
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/85f5816f5_generated_image.png",
    philosophy: "Healing hearts with both science and empathy.",
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Head of Neurology",
    experience: "18 Years",
    rating: 4.8,
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/bf34fa5d4_generated_image.png",
    philosophy: "Every mind deserves the finest care available.",
  },
  {
    name: "Dr. Arjun Mehta",
    specialty: "Senior Surgeon",
    experience: "20 Years",
    rating: 4.9,
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/7f58afbd9_generated_image.png",
    philosophy: "Precision in every procedure, compassion in every moment.",
  },
  {
    name: "Dr. Sofia Chen",
    specialty: "Pediatric Specialist",
    experience: "15 Years",
    rating: 5.0,
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/505a975e1_generated_image.png",
    philosophy: "Children deserve a healing environment that feels like home.",
  },
];

export default function DoctorsPreview() {
  return (
    <section className="py-24 bg-[#E0FBFC]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66]">Meet the Healers<br />Behind the Mission</h2>
          </div>
          <Link to="/doctors" className="inline-flex items-center gap-2 text-[#0D3B66] font-semibold border border-[#0D3B66]/20 hover:border-[#0D3B66] px-6 py-3 rounded-2xl transition-all group">
            All Doctors <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-[#0D3B66]/5 hover:shadow-2xl transition-all duration-400 cursor-pointer"
            >
              {/* Portrait */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white/90 text-sm italic">"{doc.philosophy}"</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-[#0D3B66] text-lg">{doc.name}</h3>
                <p className="text-[#E29578] text-sm font-medium mt-0.5">{doc.specialty}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#2D3142]/50 text-xs">{doc.experience} exp.</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-[#2D3142] text-xs font-semibold">{doc.rating}</span>
                  </div>
                </div>
                <Link
                  to="/appointments"
                  className="mt-4 w-full block text-center bg-[#0D3B66] hover:bg-[#E29578] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}