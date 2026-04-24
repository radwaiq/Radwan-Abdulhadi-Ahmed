import { motion } from 'motion/react';
import { Database, Cpu, Network, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Engine() {
  const steps = [
    {
      title: "تجميع البيانات والقيود",
      subtitle: "Raw Data & Constraints",
      icon: Database,
      desc: "إدخال المناسيب الأرضية، مسارات الشوراع، وتوزيع الأحمال السائلة لكل مانهول.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "محرك التصميم الآلي",
      subtitle: "SewerCAD Design Engine",
      icon: Cpu,
      desc: "تفعيل خيار Automated Design للبحث عن أصغر قطر يحقق السرعة المطلوبة.",
      highlight: "Shift from 'Analysis' to 'Design' mode",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "تحسين واستقرار المحاكاة",
      subtitle: "Network Optimization",
      icon: Network,
      desc: "معالجة السرعات العالية بزيادة أعماق الحفر عند المنعطفات الحادة لضمان استقرار التدفق.",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black relative" id="engine">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-arabic mb-4"
          >
            آلية العمل والنمذجة الرقمية
          </motion.h2>
          <p className="text-gray-500 font-arabic text-lg max-w-2xl mx-auto">
            الانتقال من الحسابات اليدوية المعقدة إلى المحاكاة الحاسوبية المعتمدة على الذكاء الهندسي.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />
                
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-4xl font-mono opacity-10 font-bold">0{i + 1}</span>
                </div>

                <h3 className="text-2xl font-bold font-arabic mb-2">{step.title}</h3>
                <h4 className="text-sm font-mono text-[#22d3ee] mb-6 uppercase tracking-widest">{step.subtitle}</h4>
                
                <p className="text-gray-400 font-arabic mb-6 leading-relaxed">
                  {step.desc}
                </p>

                {step.highlight && (
                  <div className="mt-auto p-4 bg-[#22d3ee]/5 border border-[#22d3ee]/20 rounded-xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#22d3ee] mb-1">
                      <AlertCircle className="w-3 h-3" />
                      CRITICAL SHIFT
                    </div>
                    <span className="text-sm font-arabic font-medium text-white italic">
                      "{step.highlight}"
                    </span>
                  </div>
                )}
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center py-4 opacity-20">
                  <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-center gap-4 bg-emerald-500/10 border border-emerald-500/20 py-8 px-12 rounded-full mx-auto max-w-fit"
        >
          <CheckCircle2 className="w-8 h-8 text-emerald-500 shrink-0" />
          <span className="text-xl md:text-2xl font-arabic font-bold text-emerald-500">
            تم استقرار جميع العقد والمواسير بنجاح
          </span>
        </motion.div>
      </div>
    </section>
  );
}
