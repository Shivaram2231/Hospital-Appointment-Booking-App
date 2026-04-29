import React from "react";

const stats = [
  { value: "250+", label: "Specialist Doctors" },
  { value: "50K+", label: "Patients Treated" },
  { value: "24/7", label: "Emergency Care" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "15+", label: "Departments" },
  { value: "30yr", label: "Years of Excellence" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0D3B66] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="text-white">
              <div className="text-3xl font-bold text-[#E29578]">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}