import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5c99] text-center px-6">
        <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">We're Here For You</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">Whether it's a question, a concern, or an emergency — we are always just a call away.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0D3B66] mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Our Address", value: "1234 Emerald Sanctuary Blvd, Medical District, XXXXX", color: "bg-[#E29578]/15 text-[#E29578]" },
                  { icon: Phone, label: "Call Us", value: "+91-9010200129  |  Emergency: 108", color: "bg-green-100 text-green-700" },
                  { icon: Mail, label: "Email Us", value: "medicure@gmail.com", color: "bg-blue-50 text-blue-600" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 8:00 AM – 10:00 PM  |  Emergency: 24/7", color: "bg-purple-50 text-purple-600" },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#2D3142]/50 text-xs font-semibold tracking-wider uppercase mb-0.5">{label}</p>
                      <p className="text-[#2D3142] font-medium leading-relaxed">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Card */}
            <div className="bg-[#0D3B66] rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                <span className="font-bold text-lg">Medical Emergency?</span>
              </div>
              <p className="text-white/60 mb-5">Don't wait. Call our emergency line immediately — our trauma team is ready 24/7.</p>
              <a href="tel:108" className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all hover:shadow-xl">
                <Phone className="w-5 h-5" />
                Call 108 Now
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 bg-[#E0FBFC] border border-[#0D3B66]/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#0D3B66]/40 mx-auto mb-2" />
                <p className="text-[#0D3B66]/50 text-sm">1234 Emerald Sanctuary Blvd</p>
                <p className="text-[#0D3B66]/40 text-xs">Medical District, XXXXX</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {sent ? (
              <div className="bg-white rounded-3xl p-14 text-center shadow-xl border border-[#0D3B66]/5 h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">Message Sent!</h3>
                <p className="text-[#2D3142]/60 mb-6">Thank you for reaching out. Our care team will respond within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="bg-[#0D3B66] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#E29578] transition-colors">
                  Send Another
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#0D3B66]/5">
                <h2 className="text-2xl font-bold text-[#0D3B66] mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-2">Full Name</label>
                      <input required type="text" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-2">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+1 234 567 890"
                        className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D3142] mb-2">Email Address</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D3142] mb-2">Subject</label>
                    <select value={form.subject} onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142]">
                      <option value="">Select a subject...</option>
                      <option>General Inquiry</option>
                      <option>Appointment Question</option>
                      <option>Billing & Insurance</option>
                      <option>Medical Records</option>
                      <option>Feedback & Suggestions</option>
                      <option>Partnership & Media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2D3142] mb-2">Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} placeholder="How can we help you today?"
                      className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142] resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#0D3B66] hover:bg-[#E29578] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}