"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const badges = [
    "خطط غذائية مخصصة",
    "متابعة مستمرة",
    "تغذية علاجية",
    "مبنية على الأدلة العلمية",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Element (Logo/Badge replacement for photo) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-6 transition-transform hover:rotate-12 duration-500" />
              <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform -rotate-3 transition-transform hover:-rotate-6 duration-500" />
              
              <div className="absolute inset-0 glass rounded-[2rem] flex flex-col items-center justify-center p-12 border border-white/50 shadow-lg">
                 <Image 
                    src="/لوجو.png" 
                    alt="شعار د. هديل" 
                    width={200}
                    height={200}
                    className="opacity-90 mb-8"
                  />
                  <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
                  <h3 className="font-heading text-2xl text-primary font-bold text-center">بناء علاقة صحية مع الطعام</h3>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <h2 className="text-primary font-heading font-bold text-3xl">نبذة تعريفية</h2>
            </div>
            
            <div className="space-y-6 text-lg text-text/80 leading-relaxed mb-10">
              <p>
                <strong className="text-primary font-bold">د. هديل عبدالله</strong> أخصائية تغذية علاجية حاصلة على درجة البكالوريوس في التغذية العلاجية والحميات.
              </p>
              <p>
                أعمل على تقديم خطط غذائية علمية وعملية تناسب احتياجات كل شخص وأهدافه الصحية، مع متابعة مستمرة ودعم يساعد على تحقيق نتائج واقعية.
              </p>
              <p>
                وأسعى إلى تبسيط المعلومات الغذائية ونشر الوعي الصحي المبني على الأدلة العلمية، ومساعدة الأفراد على بناء علاقة صحية ومتوازنة مع الطعام.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3 bg-background p-4 rounded-xl border border-borderLight/30 shadow-sm"
                >
                  <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-text">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
