"use client";

import { useState, useEffect } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<{ bmi: number, categoryIndex: number } | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      const hm = h / 100;
      const bmiValue = w / (hm * hm);
      
      let catIndex = 0;
      if (bmiValue < 18.5) catIndex = 0;
      else if (bmiValue < 25) catIndex = 1;
      else if (bmiValue < 30) catIndex = 2;
      else if (bmiValue < 35) catIndex = 3;
      else if (bmiValue < 40) catIndex = 4;
      else catIndex = 5;

      setResult({
        bmi: parseFloat(bmiValue.toFixed(2)),
        categoryIndex: catIndex
      });
    } else {
      setResult(null);
    }
  };

  const clearFields = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  const getPinPosition = (bmi: number) => {
    if (bmi < 18.5) return Math.max(0, ((bmi - 10) / 8.5) * 16.66);
    if (bmi < 25) return 16.66 + ((bmi - 18.5) / 6.5) * 16.66;
    if (bmi < 30) return 33.33 + ((bmi - 25) / 5) * 16.66;
    if (bmi < 35) return 50 + ((bmi - 30) / 5) * 16.66;
    if (bmi < 40) return 66.66 + ((bmi - 35) / 5) * 16.66;
    return Math.min(100, 83.33 + ((bmi - 40) / 10) * 16.66);
  };

  const categories = [
    { label: "أقل من الوزن الطبيعي", status: "أقل من الوزن الطبيعي", range: "أقل من 18.5" },
    { label: "وزن طبيعي", status: "وزن طبيعي", range: "18.5-24.9" },
    { label: "وزن زائد", status: "وزن زائد", range: "25.0-29.9" },
    { label: "بدانة درجة أولى", status: "بدانة درجة أولى", range: "30.0-34.9" },
    { label: "بدانة درجة ثانية", status: "بدانة درجة ثانية", range: "35.0-39.9" },
    { label: "بدانة درجة ثالثة", status: "بدانة درجة ثالثة", range: "أكثر من 40" },
  ];

  return (
    <section id="bmi" className="py-20 bg-[#F6F4EB] font-sans relative" dir="rtl">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        
        {/* Top Header */}
        <div className="flex justify-end mb-12">
          <h2 className="text-[#2B7688] font-bold text-xl sm:text-2xl">حاسبة مؤشر كتلة الجسم</h2>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-black mb-12 text-right">احسب مؤشر كتلة الجسم</h1>

        {/* Form */}
        <div className="space-y-8">
          <div className="text-right">
            <label className="block text-black font-bold text-lg mb-3">الطول</label>
            <input 
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full bg-white border border-[#DCD7C9] rounded-lg px-4 py-3 text-right text-lg focus:outline-none focus:border-[#1E4633] transition-colors shadow-sm"
              dir="rtl"
            />
            <div className="text-black font-bold text-lg mt-3 text-right">سم</div>
          </div>

          <div className="text-right">
            <label className="block text-black font-bold text-lg mb-3">الوزن</label>
            <input 
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-white border border-[#DCD7C9] rounded-lg px-4 py-3 text-right text-lg focus:outline-none focus:border-[#1E4633] transition-colors shadow-sm"
              dir="rtl"
            />
            <div className="text-black font-bold text-lg mt-3 text-right">كجم</div>
          </div>

          <div className="flex items-center justify-between pt-8">
            <button 
              onClick={clearFields}
              className="text-[#1E4633] font-bold text-lg underline underline-offset-8 decoration-2 hover:text-[#2C6E4F] transition-colors"
            >
              مسح الحقول
            </button>
            <button 
              onClick={calculateBMI}
              className="bg-[#338555] text-white font-bold text-lg py-4 px-6 sm:px-10 rounded-lg hover:bg-[#256840] transition-colors shadow-md"
            >
              احسب مؤشر كتلة الجسم
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* Green Box */}
            <div className="bg-[#194431] text-white p-8 sm:p-10 rounded-xl shadow-lg">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3" dir="rtl">كتلة الجسم : {result.bmi}</h3>
                <p className="text-white/90 text-lg">أنت في مرحلة {categories[result.categoryIndex].status}</p>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-bold underline mb-8 underline-offset-8 decoration-white">اكتشف سبب أهمية هذه النتائج</h4>
                <div className="flex flex-col gap-4">
                  {categories.map((c, i) => (
                    <div key={i} className="text-base sm:text-lg font-medium text-white/95">
                      {c.range} ={c.status}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Scale */}
            <div className="mt-16 pb-12">
              <h3 className="text-2xl font-bold text-center mb-16 text-black" dir="rtl">كتلة الجسم : {result.bmi}</h3>
              
              <div className="relative pt-8 px-0 sm:px-4" dir="ltr">
                
                {/* The Pin */}
                <div 
                  className="absolute top-0 transition-all duration-1000 ease-out z-10"
                  style={{ left: `${getPinPosition(result.bmi)}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="bg-[#429583] text-white px-3 py-1.5 rounded text-sm font-bold shadow-md relative flex items-center justify-center min-w-[45px]">
                    {result.bmi}
                    {/* Triangle pointer */}
                    <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 border-4 border-transparent border-t-[#429583]"></div>
                  </div>
                </div>

                {/* Tick Values */}
                <div className="flex w-full mb-1.5 relative h-4">
                  <div className="absolute left-[16.66%] -translate-x-1/2 text-[8px] font-bold text-black/60">18.5</div>
                  <div className="absolute left-[33.33%] -translate-x-1/2 text-[8px] font-bold text-black/60">24.9</div>
                  <div className="absolute left-[50%] -translate-x-1/2 text-[8px] font-bold text-black/60">29.9</div>
                  <div className="absolute left-[66.66%] -translate-x-1/2 text-[8px] font-bold text-black/60">34.9</div>
                  <div className="absolute left-[83.33%] -translate-x-1/2 text-[8px] font-bold text-black/60">39.9</div>
                </div>

                {/* The Gradient Bar */}
                <div className="relative w-full h-12 rounded-sm overflow-hidden flex shadow-inner" style={{ background: 'linear-gradient(to right, #5294DE, #439C86, #7BB446, #C7B735, #DF913C, #D65830)' }}>
                  {[0,1,2,3,4,5].map(i => (
                    <div key={i} className={`flex-1 ${i !== 5 ? 'border-r border-black/10' : ''}`}></div>
                  ))}
                </div>

                {/* Labels */}
                <div className="flex w-full mt-3">
                  <div className="flex-1 text-[7px] sm:text-[9px] font-bold text-center text-black/70 px-0.5 leading-tight">أقل من الوزن الطبيعي</div>
                  <div className="flex-1 text-[7px] sm:text-[9px] font-bold text-center text-black/70 px-0.5 leading-tight">وزن طبيعي</div>
                  <div className="flex-1 text-[7px] sm:text-[9px] font-bold text-center text-black/70 px-0.5 leading-tight">وزن زائد</div>
                  <div className="flex-1 text-[7px] sm:text-[9px] font-bold text-center text-black/70 px-0.5 leading-tight">بدانة درجة أولى</div>
                  <div className="flex-1 text-[7px] sm:text-[9px] font-bold text-center text-black/70 px-0.5 leading-tight">بدانة درجة ثانية</div>
                  <div className="flex-1 text-[7px] sm:text-[9px] font-bold text-center text-black/70 px-0.5 leading-tight">بدانة درجة ثالثة</div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
