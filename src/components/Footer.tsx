import { motion } from 'motion/react';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 px-4 bg-black border-t border-white/10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-8 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-arabic">
            <Cpu className="w-4 h-4" />
            التصميم مطابق للكود العراقي وكافة المحددات العالمية
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-arabic leading-tight">
            نحو بنية تحتية مستدامة <br/>
            <span className="text-[#22d3ee] glow-text-cyan">لمستقبل مدينة الموصل</span>
          </h2>
          
          <p className="text-xl text-gray-400 font-arabic">
            تم بنجاح تصميم شبكة صرف صحي متكاملة تعمل بكفاءة هيدروليكية تامة بنظام الجريان بالجاذبية (Gravity Flow) بنسبة 100%، مما يضمن طول عمر المنشأ وتقليل تكاليف الصيانة التشغيلية.
          </p>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-white/5">
          <div className="text-right space-y-1">
            <span className="block text-sm font-mono text-gray-500 uppercase tracking-widest">Digital Twin Project</span>
            <span className="text-lg font-arabic font-bold text-white">رضوان عبد الهادي أحمد</span>
            <span className="block text-xs font-mono text-gray-600">© 2026 UNIVERSITY OF MOSUL</span>
          </div>

          <div className="flex gap-6">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#22d3ee] hover:border-[#22d3ee]/50 transition-all hover:bg-[#22d3ee]/5 group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-[#22d3ee]" />
              <span className="text-gray-400 font-arabic text-sm">تم التطوير بواسطة تقنيات الويب الحديثة</span>
            </div>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Built with React, Tailwind & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
