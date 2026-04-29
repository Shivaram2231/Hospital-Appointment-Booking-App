import React from "react";

const facilities = [
  {
    title: "Healing Patient Suites",
    desc: "Our patient rooms are designed as boutique sanctuaries — private, serene, and equipped with world-class amenities that speed recovery through comfort.",
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/cae8389f7_generated_image.png",
    tag: "Hospitality"
  },
  {
    title: "The Healing Garden",
    desc: "A lush therapeutic garden at the heart of our campus where patients, families, and staff reconnect with nature as a pillar of holistic healing.",
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/9bd4c9b6e_generated_image.png",
    tag: "Wellness"
  },
  {
    title: "Advanced Diagnostics",
    desc: "State-of-the-art imaging, pathology labs, and diagnostic suites delivering precise results faster — because every minute matters in care.",
    img: "https://media.base44.com/images/public/69ef55b5301dba983cfa77af/30e05a195_generated_image.png",
    tag: "Technology"
  },
];

export default function FacilitySection() {
  return (
    <section className="py-24 bg-[#FBFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E29578] text-sm font-semibold tracking-widest uppercase mb-4">Our Facilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-4">Where Hospitality<br />Meets Healing</h2>
          <p className="text-[#2D3142]/55 text-lg max-w-lg mx-auto">
            We believe the environment you heal in matters as much as the treatment you receive.
          </p>
        </div>

        {/* Facility Blocks */}
        <div className="space-y-20">
          {facilities.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
            >
              {/* Image */}
              <div className="lg:w-3/5 rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div className="lg:w-2/5 space-y-4">
                <span className="inline-block bg-[#E29578]/15 text-[#E29578] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                  {f.tag}
                </span>
                <h3 className="text-3xl font-bold text-[#0D3B66] leading-snug">{f.title}</h3>
                <p className="text-[#2D3142]/60 text-lg leading-relaxed">{f.desc}</p>
                <div className="w-16 h-1 bg-[#E29578] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}