import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-5xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block px-4 py-1 mb-6 text-sm font-mono tracking-widest text-[#22d3ee] border border-[#22d3ee]/30 rounded-full bg-[#22d3ee]/5 backdrop-blur-sm"
        >
          مشروع تخرج هندسي | ٢٠٢٦
        </motion.span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-arabic mb-8 tracking-tight leading-[1.3]">
          <span className="text-white block">التصميم الهيدروليكي لشبكة الصرف الصحي</span>
          <span className="text-transparent bg-clip-text animate-shimmer glow-text-cyan">لحي الكندي</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 font-arabic mb-12 max-w-3xl mx-auto leading-relaxed">
          نمذجة متقدمة وتحليل هيدروليكي باستخدام محرك <span className="text-white font-mono">SewerCAD</span> المتقدم لضمان انسيابية الجريان وكفاءة الشبكة.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0 mb-16">
          <div className="text-right px-8 py-4 border-l border-white/10">
            <span className="block text-[10px] uppercase text-[#22d3ee] mb-1 font-mono tracking-widest">إعداد الطالب</span>
            <span className="text-xl font-arabic font-medium text-white">رضوان عبد الهادي</span>
          </div>
          <div className="w-12 h-0.5 md:w-0.5 md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-[#22d3ee] to-[#2563eb] shadow-[0_0_10px_rgba(34,211,238,0.5)] mx-4" />
          <div className="text-right px-8 py-4 border-r border-white/10">
            <span className="block text-[10px] uppercase text-[#2563eb] mb-1 font-mono tracking-widest">بإشراف</span>
            <span className="text-xl font-arabic font-medium block text-white">م.م. محمد فارس عبد الغني</span>
            <span className="text-xs font-arabic text-gray-500">د. أفياء مؤيد يونس مصطفى الدباغ</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('topography')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 bg-transparent text-white font-arabic text-xl border border-[#22d3ee] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all hover:bg-[#22d3ee] hover:text-[#050505] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            ابدأ العرض
            <MousePointer2 className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
