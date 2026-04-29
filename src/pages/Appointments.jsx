import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ChevronRight } from "lucide-react";

const DEPARTMENTS = ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "General Medicine", "Emergency Care", "Oncology", "Ophthalmology", "Surgery"];
const DOCTORS = {
  Cardiology: ["Dr. James Whitfield", "Dr. Arun Sharma"],
  Neurology: ["Dr. Priya Nair", "Dr. Kim Sung"],
  Orthopedics: ["Dr. Rajan Pillai"],
  Pediatrics: ["Dr. Sofia Chen"],
  "General Medicine": ["Dr. Rohan Das", "Dr. Meena Iyer"],
  "Emergency Care": ["Dr. Samuel Osei"],
  Oncology: ["Dr. Meera Kapoor"],
  Ophthalmology: ["Dr. Aisha Patel"],
  Surgery: ["Dr. Arjun Mehta"],
};
const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

export default function Appointments() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ dept: "", doctor: "", date: "", time: "", name: "", phone: "", email: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5c99] text-center px-6">
        <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Schedule a Visit</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Book an Appointment</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">Your care journey begins with a single step. We'll take care of the rest.</p>
      </section>

      <section className="py-20 max-w-3xl mx-auto px-6">
        {submitted ? (
          <div className="bg-white rounded-3xl p-14 text-center shadow-xl border border-[#0D3B66]/5">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-[#0D3B66] mb-3">Appointment Confirmed!</h2>
            <p className="text-[#2D3142]/60 text-lg mb-2">Thank you, <strong>{form.name}</strong>.</p>
            <p className="text-[#2D3142]/60 mb-8">
              Your appointment with <strong>{form.doctor}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong> has been scheduled. A confirmation will be sent to <strong>{form.email}</strong>.
            </p>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setForm({ dept: "", doctor: "", date: "", time: "", name: "", phone: "", email: "", reason: "" }); }}
              className="bg-[#0D3B66] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#E29578] transition-colors"
            >
              Book Another
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl border border-[#0D3B66]/5 overflow-hidden">
            {/* Stepper */}
            <div className="bg-[#0D3B66]/5 px-8 py-5 flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className={`flex items-center gap-2 ${step >= s ? "text-[#0D3B66]" : "text-[#2D3142]/30"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= s ? "bg-[#0D3B66] text-white" : "bg-[#0D3B66]/10"}`}>{s}</div>
                    <span className="text-sm font-medium hidden sm:block">{["Select Service", "Pick Date & Time", "Your Details"][s - 1]}</span>
                  </div>
                  {s < 3 && <ChevronRight className="w-4 h-4 text-[#0D3B66]/30 flex-shrink-0" />}
                </React.Fragment>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0D3B66]">Choose Department & Doctor</h3>
                  <div>
                    <label className="block text-[#2D3142] font-medium mb-2 text-sm">Department</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {DEPARTMENTS.map((d) => (
                        <button type="button" key={d} onClick={() => { update("dept", d); update("doctor", ""); }}
                          className={`px-4 py-3 rounded-2xl text-sm font-medium border transition-all text-left ${form.dept === d ? "bg-[#0D3B66] text-white border-[#0D3B66]" : "border-[#0D3B66]/15 text-[#2D3142] hover:border-[#0D3B66]/40"}`}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                  {form.dept && (
                    <div>
                      <label className="block text-[#2D3142] font-medium mb-2 text-sm">Select Doctor</label>
                      <div className="space-y-2">
                        {(DOCTORS[form.dept] || []).map((doc) => (
                          <button type="button" key={doc} onClick={() => update("doctor", doc)}
                            className={`w-full px-4 py-3 rounded-2xl text-sm font-medium border transition-all text-left ${form.doctor === doc ? "bg-[#0D3B66] text-white border-[#0D3B66]" : "border-[#0D3B66]/15 text-[#2D3142] hover:border-[#0D3B66]/40"}`}>
                            {doc}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <button type="button" disabled={!form.dept || !form.doctor} onClick={() => setStep(2)}
                    className="w-full bg-[#0D3B66] disabled:opacity-40 text-white py-4 rounded-2xl font-semibold hover:bg-[#E29578] transition-colors">
                    Continue →
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0D3B66]">Choose Date & Time</h3>
                  <div>
                    <label className="block text-[#2D3142] font-medium mb-2 text-sm">Preferred Date</label>
                    <input type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={(e) => update("date", e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142]" />
                  </div>
                  <div>
                    <label className="block text-[#2D3142] font-medium mb-3 text-sm">Available Time Slots</label>
                    <div className="grid grid-cols-4 gap-3">
                      {TIME_SLOTS.map((t) => (
                        <button type="button" key={t} onClick={() => update("time", t)}
                          className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all ${form.time === t ? "bg-[#0D3B66] text-white border-[#0D3B66]" : "border-[#0D3B66]/15 text-[#2D3142] hover:border-[#0D3B66]/40"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 border border-[#0D3B66]/20 text-[#0D3B66] py-4 rounded-2xl font-semibold hover:bg-[#0D3B66]/5 transition-colors">
                      ← Back
                    </button>
                    <button type="button" disabled={!form.date || !form.time} onClick={() => setStep(3)}
                      className="flex-1 bg-[#0D3B66] disabled:opacity-40 text-white py-4 rounded-2xl font-semibold hover:bg-[#E29578] transition-colors">
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-[#0D3B66]">Your Details</h3>
                  {[
                    { label: "Full Name", key: "name", type: "text", icon: User, placeholder: "John Doe" },
                    { label: "Phone Number", key: "phone", type: "tel", icon: Phone, placeholder: "+1 234 567 890" },
                    { label: "Email Address", key: "email", type: "email", icon: Mail, placeholder: "you@example.com" },
                  ].map(({ label, key, type, icon: Icon, placeholder }) => (
                    <div key={key}>
                      <label className="block text-[#2D3142] font-medium mb-2 text-sm">{label}</label>
                      <div className="relative">
                        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D3142]/40" />
                        <input required type={type} placeholder={placeholder} value={form[key]} onChange={(e) => update(key, e.target.value)}
                          className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142]" />
                      </div>
                    </div>
                  ))}
                  <div>
                    <label className="block text-[#2D3142] font-medium mb-2 text-sm">Reason for Visit (Optional)</label>
                    <textarea rows={3} placeholder="Brief description of your symptoms or reason..." value={form.reason} onChange={(e) => update("reason", e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#0D3B66]/15 focus:outline-none focus:border-[#0D3B66]/50 text-[#2D3142] resize-none" />
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 border border-[#0D3B66]/20 text-[#0D3B66] py-4 rounded-2xl font-semibold hover:bg-[#0D3B66]/5 transition-colors">
                      ← Back
                    </button>
                    <button type="submit" className="flex-1 bg-[#E29578] text-white py-4 rounded-2xl font-semibold hover:bg-[#c97d62] transition-colors shadow-lg">
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}