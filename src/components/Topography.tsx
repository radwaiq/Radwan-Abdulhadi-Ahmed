import { motion } from 'motion/react';

export default function Topography() {
  return (
    <section className="py-24 px-4 bg-black/40 backdrop-blur-md" id="topography">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#22d3ee] to-[#2563eb] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="topography_map.jpg" 
                alt="Aerial Map of Al-Kindi Neighborhood" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded text-xs font-mono text-[#22d3ee]">
                AERIAL_VIEW_01
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 space-y-8"
        >
          <div className="inline-block p-2 bg-[#22d3ee]/10 border border-[#22d3ee]/20 rounded-lg">
            <span className="text-[#22d3ee] font-mono text-sm uppercase tracking-tighter">Site Analysis • الموقع والطوبوغرافيا</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-arabic leading-tight">
            التحدي الهندسي: <br/>
            <span className="text-white opacity-60">حي الكندي، مدينة الموصل</span>
          </h2>
          
          <p className="text-xl text-gray-400 font-arabic leading-relaxed">
            يقع حي الكندي في الجانب الأيسر من مدينة الموصل، ويتميز بطوبوغرافيا متموجة تتبع طبيعة السهول المحيطة. تم استغلال الخطوط الكنتورية بدقة لتحديد أدنى نقطة (Outfall) لضمان تحقيق:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#22d3ee]/50 transition-colors">
              <div className="text-3xl font-bold text-[#22d3ee] mb-2 font-mono">100%</div>
              <div className="text-sm font-arabic text-gray-300">جريان بالجاذبية (Gravity Flow) دون الحاجة لمحطات ضخ.</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#2563eb]/50 transition-colors">
              <div className="text-3xl font-bold text-[#2563eb] mb-2 font-mono">Zero</div>
              <div className="text-sm font-arabic text-gray-300">استخدام للطاقة الميكانيكية للرفع، مما يقلل تكاليف التشغيل.</div>
            </div>
          </div>

          <p className="text-lg text-gray-500 font-arabic italic">
            "الهدف هو موازنة المناسيب الأرضية مع أعماق الأنابيب للحفاظ على الغطاء الهندسي الآمن مع توفير الميل الكافي للجريان."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
