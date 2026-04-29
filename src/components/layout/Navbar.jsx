import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Doctors", path: "/doctors" },
  { label: "Appointments", path: "/appointments" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-[#0D3B66] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <div className={`font-bold text-xl leading-none transition-colors ${scrolled ? "text-[#0D3B66]" : "text-white"}`}>
                MediCare
              </div>
              <div className={`text-xs tracking-widest uppercase transition-colors ${scrolled ? "text-[#E29578]" : "text-white/70"}`}>
                Sanctuary
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? scrolled ? "text-[#0D3B66]" : "text-white"
                    : scrolled ? "text-[#2D3142] hover:text-[#0D3B66]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E29578] transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? "text-[#0D3B66]" : "text-white"}`}>
              <Phone className="w-4 h-4" />
              <span>Emergency: 108</span>
            </a>
            <Link
              to="/appointments"
              className="bg-[#E29578] hover:bg-[#c97d62] text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-[#0D3B66]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D3B66] flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl font-light tracking-wider hover:text-[#E29578] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/appointments"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#E29578] text-white px-8 py-3 rounded-2xl font-semibold text-lg"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </>
  );
}