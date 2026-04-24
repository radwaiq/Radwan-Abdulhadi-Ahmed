import { motion } from 'motion/react';
import { Gauge, ArrowDownToLine, TrendingUp, CircleDot, Layers, Users } from 'lucide-react';

const constraints = [
  {
    title: "السرعة (Velocity)",
    desc: "0.60 - 2.50 م/ث",
    detail: "تم الضبط لضمان التنظيف الذاتي (Self-cleansing) ومنع تآكل الجدران الداخلية (Erosion).",
    icon: Gauge,
    color: "text-cyan-400"
  },
  {
    title: "الغطاء (Cover)",
    desc: "1.50 - 6.00 متر",
    detail: "لحماية الأنابيب من أوزان المركبات العالية وتقليل تكاليف الحفر العميقة.",
    icon: ArrowDownToLine,
    color: "text-blue-400"
  },
  {
    title: "الميل (Slope)",
    desc: "0.001 - 0.200 م/م",
    detail: "موازنة الميل الهيدروليكي مع الميل الطبيعي للأرض لتقليل الحفريات.",
    icon: TrendingUp,
    color: "text-indigo-400"
  },
  {
    title: "نسبة الامتلاء (d/D)",
    desc: "بحد أقصى 80%",
    detail: "ترك مساحة هوائية (Partial Flow) بنسبة 20% لضمان التهوية الجيدة للشبكة.",
    icon: CircleDot,
    color: "text-teal-400"
  },
  {
    title: "تطابق التيجان (Crowns)",
    desc: "Crown Matching",
    detail: "ربط الأقطار المختلفة عند مستوى التاج العلوي لمنع تجمع المياه العكسي (Backwater).",
    icon: Layers,
    color: "text-sky-400"
  },
  {
    title: "معامل الذروة (P.F)",
    desc: "Constant = 4.0",
    detail: "تطبيق Peaking Factor عالٍ لمواجهة أقصى تصريفات محتملة من المنازل والمولات.",
    icon: Users,
    color: "text-cyan-500"
  }
];

export default function Constraints() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-[#050505]" id="constraints">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-arabic mb-4"
          >
            المحددات التصميمية والقيود الهيدروليكية
          </motion.h2>
          <div className="h-1 w-24 bg-[#22d3ee] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constraints.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#22d3ee]/50 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`${c.color} mb-6`}>
                <c.icon className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold font-arabic mb-2 text-white group-hover:text-[#22d3ee] transition-colors">
                {c.title}
              </h3>
              
              <div className="text-lg font-mono text-[#22d3ee] mb-4 bg-[#22d3ee]/5 px-3 py-1 rounded inline-block">
                {c.desc}
              </div>
              
              <p className="text-gray-400 font-arabic leading-relaxed leading-snug">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-[#22d3ee]/5 border border-[#22d3ee]/20 rounded-2xl flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <h4 className="text-xl font-bold font-arabic mb-4 text-[#22d3ee]">الأحمال التشغيلية المعتمدة</h4>
            <ul className="grid grid-cols-2 gap-4 text-gray-300 font-arabic">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee]" />
                المناطق السكنية (Residential)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee]" />
                المراكز التجارية (Malls)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee]" />
                المؤسسات التعليمية (Schools)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee]" />
                المؤسسات الصحية (Health Centers)
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto px-10 py-6 border-r-0 md:border-r border-white/10 text-center">
            <span className="block text-gray-500 font-mono text-sm mb-2">EXTREME FLOW PARAMETER</span>
            <span className="text-5xl font-bold font-mono text-white">4.00</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
