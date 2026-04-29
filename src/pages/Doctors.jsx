import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import { Star, Phone, Calendar, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ALL_DOCTORS = [
  { name: "Dr. P.Shiva Ram", specialty: "Cardiology", dept: "Cardiology", experience: "22 Years", rating: 4.9, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/85f5816f5_generated_image.png", available: true, bio: "A pioneer in interventional cardiology with over 3,000 complex procedures. Trained at Johns Hopkins Medical Center." },
  { name: "Dr. Sriram", specialty: "Neurology", dept: "Neurology", experience: "18 Years", rating: 4.8, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/bf34fa5d4_generated_image.png", available: true, bio: "Specialist in stroke management and epilepsy. Published 40+ research papers on neurological disorders." },
  { name: "Dr. Raghuvaran", specialty: "General Surgery", dept: "Surgery", experience: "20 Years", rating: 4.9, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/7f58afbd9_generated_image.png", available: false, bio: "Expert in minimally invasive and robotic surgery. Performed over 5,000 successful surgeries." },
  { name: "Dr. Bhaskar", specialty: "Pediatrics", dept: "Pediatrics", experience: "15 Years", rating: 5.0, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/505a975e1_generated_image.png", available: true, bio: "Dedicated pediatric specialist focused on child development and complex pediatric conditions." },
  { name: "Dr. Eshwar", specialty: "Orthopedics", dept: "Orthopedics", experience: "17 Years", rating: 4.7, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/85f5816f5_generated_image.png", available: true, bio: "Robotic joint replacement specialist. Expert in sports injuries and spinal surgeries." },
  { name: "Dr. Mahesh", specialty: "Oncology", dept: "Oncology", experience: "14 Years", rating: 4.8, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/bf34fa5d4_generated_image.png", available: true, bio: "Comprehensive cancer care specialist with expertise in immunotherapy and targeted treatments." },
  { name: "Dr. Kalyan", specialty: "Emergency Medicine", dept: "Emergency", experience: "12 Years", rating: 4.9, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/7f58afbd9_generated_image.png", available: true, bio: "Trauma and emergency medicine expert. Leads the 24/7 emergency response team." },
  { name: "Dr. Rajesh", specialty: "Ophthalmology", dept: "Ophthalmology", experience: "16 Years", rating: 4.8, img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/505a975e1_generated_image.png", available: false, bio: "Specialist in LASIK, cataract, and retinal surgeries with a 99% success rate." },
];

const DEPTS = ["All", "Cardiology", "Neurology", "Surgery", "Pediatrics", "Orthopedics", "Oncology", "Emergency", "Ophthalmology"];

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = ALL_DOCTORS.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "All" || d.dept === dept;
    return matchSearch && matchDept;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5c99] text-center px-6">
        <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Our Specialists</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">The Healers</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">Meet our world-class team of specialists dedicated to your health and recovery.</p>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b border-[#0D3B66]/5 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D3142]/40" />
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#0D3B66]/15 bg-[#FBFBFF] text-[#2D3142] text-sm focus:outline-none focus:border-[#0D3B66]/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {DEPTS.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${dept === d ? "bg-[#0D3B66] text-white" : "bg-[#0D3B66]/8 text-[#0D3B66] hover:bg-[#0D3B66]/15"
                  }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((doc, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-[#0D3B66]/5 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${doc.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                  {doc.available ? "Available" : "On Leave"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#0D3B66] text-lg">{doc.name}</h3>
                <p className="text-[#E29578] text-sm font-medium">{doc.specialty}</p>
                <p className="text-[#2D3142]/50 text-sm mt-2 leading-relaxed">{doc.bio}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#0D3B66]/5">
                  <span className="text-[#2D3142]/40 text-xs">{doc.experience}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-[#2D3142] text-xs font-semibold">{doc.rating}</span>
                  </div>
                </div>
                <Link to="/appointments" className="mt-4 w-full block text-center bg-[#0D3B66] hover:bg-[#E29578] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#2D3142]/40">No doctors found for your search.</div>
        )}
      </section>

      <Footer />
    </div>
  );
}