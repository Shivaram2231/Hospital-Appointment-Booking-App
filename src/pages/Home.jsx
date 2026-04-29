import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import ServicesSection from "../components/home/ServicesSection";
import DoctorsPreview from "../components/home/DoctorsPreview";
import FacilitySection from "../components/home/FacilitySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import EmergencyBanner from "../components/home/EmergencyBanner";
import ScrollProgress from "../components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFBFF] font-sans">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <DoctorsPreview />
      <FacilitySection />
      <TestimonialsSection />
      <EmergencyBanner />
      <Footer />
    </div>
  );
}