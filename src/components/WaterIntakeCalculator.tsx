"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet } from "lucide-react";

type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very_active";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [waterLiters, setWaterLiters] = useState<number | null>(null);

  const calculateWater = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);

    if (w > 0) {
      // Basic logic: weight(kg) * 35ml + additional for activity
      let baseMl = w * 35;
      
      switch (activity) {
        case "sedentary": break; // no extra
        case "light": baseMl += 300; break;
        case "moderate": baseMl += 600; break;
        case "active": baseMl += 900; break;
        case "very_active": baseMl += 1200; break;
      }

      setWaterLiters(parseFloat((baseMl / 1000).toFixed(1)));
    }
  };

  const getPercentage = () => {
    if (!waterLiters) return 0;
    // Assuming max realistic water is ~5 liters for animation scaling
    return Math.min((waterLiters / 5) * 100, 100);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F0EDE8]/30 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2DDD8] relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-500 shadow-sm">
                  <Droplet size={28} />
                </div>
                <h3 className="text-2xl font-black text-[#1A601A]">حاسبة احتياج الماء</h3>
              </div>
              
              <form onSubmit={calculateWater} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#6B6560] mb-2 uppercase tracking-wider">الوزن (كجم)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="مثال: 70"
                    className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E2DDD8] focus:border-blue-400 focus:ring-0 outline-none transition-all text-xl font-bold text-[#2C3E2C] shadow-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#6B6560] mb-2 uppercase tracking-wider">مستوى النشاط</label>
                  <select 
                    value={activity}
                    onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                    className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E2DDD8] focus:border-blue-400 focus:ring-0 outline-none transition-all text-lg font-bold text-[#2C3E2C] shadow-sm appearance-none"
                  >
                    <option value="sedentary">خامل (قليل الحركة)</option>
                    <option value="light">نشاط خفيف (تمرين مرتين أسبوعياً)</option>
                    <option value="moderate">نشاط معتدل (تمرين 3-4 مرات)</option>
                    <option value="active">نشط (تمرين يومي)</option>
                    <option value="very_active">نشط جداً (رياضي محترف)</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold text-lg py-4 rounded-2xl hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl mt-4"
                >
                  احسب احتياجك
                </button>
              </form>
            </div>

            {/* Visual Result */}
            <div className="h-full flex flex-col justify-center items-center text-center mt-8 md:mt-0 bg-white rounded-3xl p-8 border border-[#E2DDD8] shadow-sm">
              <AnimatePresence mode="wait">
                {waterLiters ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center w-full"
                  >
                    <div className="relative w-32 h-48 border-4 border-blue-100 rounded-b-3xl rounded-t-xl overflow-hidden bg-[#F8FAFC] shadow-inner mb-8">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${getPercentage()}%` }}
                        transition={{ duration: 1.5, type: "spring" }}
                        className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-400 opacity-90"
                      >
                        {/* Waves */}
                        <div className="absolute top-0 w-[200%] h-4 bg-blue-300 opacity-50 rounded-[100%] -translate-y-1/2 animate-[wave_2s_linear_infinite]" />
                      </motion.div>
                    </div>
                    
                    <div className="text-5xl font-black text-blue-600 mb-2">{waterLiters} <span className="text-2xl">لتر</span></div>
                    <p className="text-[#6B6560] font-medium bg-blue-50 px-4 py-2 rounded-full text-sm">ما يعادل تقريباً {Math.ceil(waterLiters * 4)} أكواب يومياً</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                      <Droplet size={40} className="text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#6B6560] mb-2">الماء سر الحياة</h3>
                    <p className="text-[#6B6560]/70 font-medium text-sm">أدخل بياناتك لاكتشاف احتياجك اليومي من الماء</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
          0% { transform: translateX(0) translateY(-50%); }
          100% { transform: translateX(-50%) translateY(-50%); }
        }
      `}} />
    </section>
  );
}
