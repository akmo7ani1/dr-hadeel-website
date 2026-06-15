"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "الخدمات", href: "#services" },
    { name: "حاسبة الكتلة", href: "#bmi" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.05)] py-3 border-b border-[#E2DDD8]/50" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#1A601A]/20 group-hover:border-[#7ED321] transition-colors duration-300">
                <Image src="/logo.png" alt="شعار د. هديل عبدالله" fill className="object-cover" />
              </div>
              <span className="font-heading font-black text-2xl text-[#1A601A] tracking-tight group-hover:text-[#7ED321] transition-colors">د. هديل عبدالله</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[#2C3E2C] font-semibold text-[15px] hover:text-[#1A601A] transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#7ED321] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://www.instagram.com/dt.hadeel_abdullah?igsh=ZnFjbmFzbjA5b2k2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A601A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#7ED321] transition-all shadow-[0_4px_14px_0_rgba(26,96,26,0.39)] hover:shadow-[0_6px_20px_rgba(126,211,33,0.23)] hover:-translate-y-0.5"
            >
              احجز استشارتك
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#2C3E2C] hover:text-[#1A601A] focus:outline-none p-2 rounded-lg bg-[#E2DDD8]/30"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-[#E2DDD8]/50 shadow-xl overflow-hidden"
        >
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-bold text-[#2C3E2C] hover:text-[#1A601A] hover:bg-[#1A601A]/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://www.instagram.com/dt.hadeel_abdullah?igsh=ZnFjbmFzbjA5b2k2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#1A601A] text-white px-5 py-4 rounded-xl text-base font-bold hover:bg-[#7ED321] transition-colors shadow-md"
              >
                احجز استشارتك الآن
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
