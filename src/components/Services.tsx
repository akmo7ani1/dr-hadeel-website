"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Weight, 
  ActivitySquare, 
  Baby, 
  Stethoscope, 
  Dumbbell, 
  HeartHandshake, 
  CalendarCheck 
} from "lucide-react";

const services = [
  { 
    id: 1, 
    title: "الاستشارات الغذائية الفردية", 
    desc: "تقييم شامل للحالة الصحية والعادات الغذائية، مع إعداد خطة غذائية مخصصة تتناسب مع احتياجاتك وأهدافك الصحية.",
    icon: Users 
  },
  { 
    id: 2, 
    title: "إدارة الوزن (خسارة أو زيادة)", 
    desc: "برامج غذائية مصممة لمساعدتك على الوصول إلى وزن صحي بطريقة متوازنة، بعيدًا عن الحرمان والأنظمة القاسية.",
    icon: Weight 
  },
  { 
    id: 3, 
    title: "التغذية العلاجية للأمراض المزمنة", 
    desc: "خطط غذائية داعمة للحالات الصحية المختلفة مثل السكري، ارتفاع ضغط الدم، ارتفاع الكوليسترول، وأمراض القلب، بما يتوافق مع التوصيات العلمية الحديثة.",
    icon: ActivitySquare 
  },
  { 
    id: 4, 
    title: "تغذية الأطفال والمراهقين", 
    desc: "برامج غذائية تساعد على دعم النمو السليم، وتحسين العادات الغذائية، ومعالجة المشكلات الغذائية الشائعة في مختلف المراحل العمرية.",
    icon: Baby 
  },
  { 
    id: 5, 
    title: "مشكلات الجهاز الهضمي", 
    desc: "إرشادات وخطط غذائية تساعد في التعامل مع مشكلات الجهاز الهضمي مثل القولون العصبي، الارتجاع المعدي المريئي، الانتفاخات، والإمساك.",
    icon: Stethoscope 
  },
  { 
    id: 6, 
    title: "دعم الأداء الرياضي", 
    desc: "برامج غذائية تساعد على رفع كفاءة الأداء البدني وتحسين النتائج الرياضية وفق الاحتياجات الفردية.",
    icon: Dumbbell 
  },
  { 
    id: 7, 
    title: "التغذية في مراحل الأمومة", 
    desc: "برامج غذائية مصممة لدعم صحة المرأة خلال فترة الحمل والرضاعة، بما يضمن تلبية الاحتياجات الغذائية وتعزيز صحة الأم والطفل.",
    icon: HeartHandshake 
  },
  { 
    id: 8, 
    title: "المتابعة الغذائية المستمرة", 
    desc: "متابعة دورية لقياس التقدم، وتعديل الخطة الغذائية عند الحاجة، وتقديم الدعم والإرشاد لتحقيق أفضل النتائج.",
    icon: CalendarCheck 
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1A601A] font-heading font-black text-3xl sm:text-4xl mb-4 tracking-tight">الخدمات الاستشارية</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#1A601A] to-[#7ED321] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#6B6560] max-w-2xl mx-auto font-medium">
              نقدم مجموعة متكاملة من الخدمات الغذائية المبنية على أسس علمية لتناسب أسلوب حياتك واحتياجاتك الخاصة.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-[#F0EDE8]/50 p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-[#E2DDD8]"
              >
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#1A601A] group-hover:bg-gradient-to-br group-hover:from-[#1A601A] group-hover:to-[#7ED321] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#2C3E2C] mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
