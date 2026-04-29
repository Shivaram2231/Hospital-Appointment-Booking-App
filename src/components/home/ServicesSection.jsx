import React from "react";
import { Heart, Brain, Bone, Baby, Stethoscope, Eye, Activity, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Zap, title: "Emergency Care", desc: "24/7 rapid response trauma center with state-of-the-art life-support systems.", color: "text-red-500", bg: "bg-red-50" },
  { icon: Heart, title: "Cardiology", desc: "Advanced cardiac care from prevention to complex interventional procedures.", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Brain, title: "Neurology", desc: "Comprehensive brain & spine care with cutting-edge neurological treatments.", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: Bone, title: "Orthopedics", desc: "Joint replacements, sports medicine, and spinal surgery with precision robotics.", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: Baby, title: "Pediatrics", desc: "Child-centered care in a warm, calming environment families can trust.", color: "text-sky-500", bg: "bg-sky-50" },
  { icon: Stethoscope, title: "General Medicine", desc: "Holistic primary care and preventive health programs for every age.", color: "text-teal-500", bg: "bg-teal-50" },
  { icon: Eye, title: "Ophthalmology", desc: "Advanced eye care including LASIK, cataract, and retinal treatments.", color: "text-indigo-500", bg: "bg-indigo-50" },
  { icon: Activity, title: "Oncology", desc: "Comprehensive cancer care with the latest immunotherapy and radiation.", color: "text-emerald-500", bg: "bg-emerald-50" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-5">World-Class Care,<br />Every Discipline</h2>
          <p className="text-[#2D3142]/60 text-lg max-w-xl mx-auto leading-relaxed">
            From routine checkups to complex interventions — every department operates at the highest standard of medical excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-7 border border-[#0D3B66]/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <h3 className="text-[#0D3B66] font-bold text-lg mb-3">{s.title}</h3>
              <p className="text-[#2D3142]/55 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 text-[#E29578] text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/appointments" className="inline-flex items-center gap-2 bg-[#0D3B66] hover:bg-[#0a2f52] text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-xl">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}