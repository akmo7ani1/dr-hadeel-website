"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BMICalculator from "@/components/BMICalculator";
import WaterIntakeCalculator from "@/components/WaterIntakeCalculator";
import Gallery from "@/components/Gallery";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to background position to simulate measuring tape moving
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);

  return (
    <main className="relative bg-[#F0EDE8] min-h-screen">
      <Navbar />

      {/* Decorative Interactive Measuring Tape Indicator */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-full z-40 border-r-2 border-[#E2DDD8] hidden md:block"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #1A601A 2px, transparent 2px), linear-gradient(to bottom, #7ED321 1px, transparent 1px)',
          backgroundSize: '100% 50px, 100% 10px',
          backgroundPositionY
        }}
      />
      <motion.div 
        className="fixed top-0 right-0 w-2 h-full z-40 border-l-2 border-[#E2DDD8] hidden md:block"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #1A601A 2px, transparent 2px), linear-gradient(to bottom, #7ED321 1px, transparent 1px)',
          backgroundSize: '100% 50px, 100% 10px',
          backgroundPositionY
        }}
      />

      {/* Gallery as a top promotional banner */}
      <Gallery />

      <Hero />
      <About />
      <Services />
      <BMICalculator />
      <WaterIntakeCalculator />

      {/* Floating Consultation Button */}
      <motion.a
        href="https://www.instagram.com/dt.hadeel_abdullah?igsh=ZnFjbmFzbjA5b2k2"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 bg-[#1A601A] text-white p-4 rounded-full shadow-2xl hover:bg-[#7ED321] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="احجز استشارتك"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-[#2C3E2C] font-bold text-sm px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          احجز استشارتك الآن
        </span>
      </motion.a>

      {/* Simple Footer */}
      <footer className="bg-[#2C3E2C] text-[#F0EDE8] py-8 text-center mt-20 border-t border-[#E2DDD8]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="opacity-80">© {new Date().getFullYear()} د. هديل عبدالله - أخصائية التغذية العلاجية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}
