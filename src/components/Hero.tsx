"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 overflow-hidden bg-[#F0EDE8]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#7ED321]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#1A601A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-right"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6 bg-[#1A601A]/10 text-[#1A601A] px-5 py-2 rounded-full text-sm font-bold tracking-wide"
            >
              مرحباً بك في عالم الصحة
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-[#1A601A] leading-tight mb-4">
              د. هديل عبدالله
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#2C3E2C] font-bold mb-6">
              أخصائية التغذية العلاجية
            </h2>
            <p className="text-lg text-[#6B6560] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              خطط غذائية علمية وعملية تساعدك على تحقيق أهدافك الصحية بأسلوب متوازن ومستدام، بعيداً عن الحرمان القاسي.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/dt.hadeel_abdullah?igsh=ZnFjbmFzbjA5b2k2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A601A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7ED321] transition-all duration-300 shadow-[0_4px_20px_rgba(26,96,26,0.3)] hover:shadow-[0_6px_25px_rgba(126,211,33,0.4)] flex items-center justify-center hover:-translate-y-1"
              >
                ابدأ رحلتك الآن
              </a>
              <a
                href="#bmi"
                className="bg-white text-[#1A601A] border-2 border-[#1A601A]/20 px-8 py-4 rounded-full font-bold text-lg hover:border-[#1A601A] transition-all duration-300 flex items-center justify-center hover:bg-[#1A601A]/5"
              >
                احسب كتلة جسمك
              </a>
            </div>
          </motion.div>

          {/* Image/Logo Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-64 h-64 sm:w-[400px] sm:h-[400px]">
              {/* Premium Glow around Logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A601A]/20 to-[#7ED321]/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Logo without glass container for pure display */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image 
                  src="/logo.png" 
                  alt="شعار الدكتورة هديل عبدالله" 
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
