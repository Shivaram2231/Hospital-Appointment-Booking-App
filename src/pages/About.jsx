import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import { Award, Heart, Shield, Users, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Heart, title: "Compassion First", desc: "Every patient is treated with warmth, dignity, and deep human empathy — always." },
  { icon: Shield, title: "Clinical Excellence", desc: "We set and uphold the highest standards of medical science and safety." },
  { icon: Target, title: "Precision Care", desc: "Evidence-based protocols and cutting-edge technology guide every decision." },
  { icon: Users, title: "Patient-Centered", desc: "Your comfort, understanding, and peace of mind are central to our care model." },
  { icon: Award, title: "Continuous Innovation", desc: "We invest relentlessly in the latest medical research and technology." },
  { icon: Eye, title: "Transparency", desc: "We believe in open communication and absolute clarity with patients and families." },
];

const milestones = [
  { year: "1996", event: "MediCare Sanctuary founded as a 50-bed general hospital." },
  { year: "2003", event: "Expanded to 200 beds; launched Cardiology and Neurology departments." },
  { year: "2010", event: "Received NABH Accreditation — highest hospital quality standard in the nation." },
  { year: "2015", event: "Opened the state-of-the-art Oncology Centre and Robotic Surgery Wing." },
  { year: "2020", event: "Launched 24/7 Emergency & Trauma Centre — among the finest in the region." },
  { year: "2026", event: "Serving 50,000+ patients annually across 15 specialties with 250+ specialists." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5c99] text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E29578]/10 rounded-full -translate-y-1/3 translate-x-1/4" />
        <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">30 Years of<br />Healing Excellence</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          MediCare Sanctuary was founded with a singular vision — to transform the hospital experience from clinical to celestial. Three decades later, we remain true to that promise.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://media.base44.com/images/public/69ef55b5301dba983cfa77af/2d7fefa05_generated_image.png"
              alt="Hospital Lobby"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-[#E29578] text-sm font-semibold tracking-widest uppercase">Our Mission</span>
              <h2 className="text-3xl font-bold text-[#0D3B66] mt-2 mb-3">To Heal with Science, Serve with Soul</h2>
              <p className="text-[#2D3142]/60 leading-relaxed text-lg">
                We exist to deliver medical care of the highest caliber within an environment that honors the full humanity of every patient. We do not merely treat conditions — we restore lives.
              </p>
            </div>
            <div className="h-px bg-[#0D3B66]/10" />
            <div>
              <span className="text-[#E29578] text-sm font-semibold tracking-widest uppercase">Our Vision</span>
              <h2 className="text-3xl font-bold text-[#0D3B66] mt-2 mb-3">The Sanctuary Standard</h2>
              <p className="text-[#2D3142]/60 leading-relaxed text-lg">
                A future where every patient walks into MediCare Sanctuary and immediately feels — not fear — but relief, calm, and absolute confidence that they are in the finest hands.
              </p>
            </div>
            <Link to="/appointments" className="inline-flex items-center gap-2 bg-[#E29578] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#c97d62] transition-colors shadow-lg">
              Begin Your Care Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#E0FBFC]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4 block">What We Stand For</span>
            <h2 className="text-4xl font-bold text-[#0D3B66]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-[#0D3B66]/5 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#0D3B66]/8 flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7 text-[#0D3B66]" />
                </div>
                <h3 className="text-[#0D3B66] font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-[#2D3142]/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Journey</span>
          <h2 className="text-4xl font-bold text-[#0D3B66]">30 Years of Milestones</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#0D3B66]/15" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-full bg-[#0D3B66] flex items-center justify-center text-white font-bold text-sm shrink-0 relative z-10">
                  {m.year}
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[#0D3B66]/5 flex-1 hover:shadow-md transition-shadow">
                  <p className="text-[#2D3142]/70 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}