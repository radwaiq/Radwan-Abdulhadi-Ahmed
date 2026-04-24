import { motion, AnimatePresence } from 'motion/react';
import { Search, Map as MapIcon, Database, ZoomIn, X, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

const resultsData = [
  { id: 'CO-22', velocity: 2.43, slope: 0.001, cover: 1.85, flow: 12.5 },
  { id: 'CO-23', velocity: 1.84, slope: 0.002, cover: 2.10, flow: 8.8 },
  { id: 'CO-24', velocity: 2.15, slope: 0.001, cover: 1.95, flow: 15.2 },
  { id: 'CO-25', velocity: 1.92, slope: 0.003, cover: 2.40, flow: 9.4 },
  { id: 'CO-27', velocity: 1.59, slope: 0.002, cover: 2.65, flow: 11.8 },
  { id: 'CO-28', velocity: 1.72, slope: 0.004, cover: 2.20, flow: 7.6 },
  { id: 'CO-29', velocity: 2.34, slope: 0.001, cover: 1.75, flow: 21.3 },
  { id: 'CO-30', velocity: 1.28, slope: 0.005, cover: 3.10, flow: 5.4 },
];

const galleryStages = [
  {
    title: "مرحلة جمع البيانات",
    subtitle: "Data Collection",
    desc: "دراسة الخرائط الجوية والبيانات الكنتورية لتحديد المسارات.",
    img: "topography_map.jpg"
  },
  {
    title: "مرحلة تخطيط الشبكة",
    subtitle: "Network Layout",
    desc: "توزيع المانهولات وربط الأنابيب بناءً على طوبوغرافيا الأرض.",
    img: "v8_network_map.jpg"
  },
  {
    title: "مرحلة النمذجة الهيدروليكية",
    subtitle: "Hydraulic Modeling",
    desc: "إجراء الحسابات واختبار استقرار التدفق داخل الأنابيب.",
    img: "v9_profile_1.jpg"
  },
  {
    title: "مرحلة التصميم النهائي",
    subtitle: "Final Design",
    desc: "تصدير المقاطع الطولية والجداول النهائية للتنفيذ.",
    img: "v10_profile_2.jpg"
  }
];

export default function Results() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredData = resultsData.filter(item => 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 px-4 bg-[#050505]" id="results">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Network Map Section */}
        <div>
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#22d3ee]">
                <MapIcon className="w-6 h-6" />
                <span className="font-mono text-sm tracking-tighter uppercase">Visual Proof • مخطط مسارات الشبكة</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-arabic">خريطة التدفق واتجاهات الجريان</h2>
              <p className="text-gray-400 font-arabic max-w-2xl">
                مخطط نهائي يوضح اتجاهات الجريان بالجاذبية نحو نقطة المصب، مع توزيع دقيق للمانهولات والمواسير.
              </p>
            </div>
          </div>
          
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <img 
              src="v8_network_map.jpg" 
              alt="Network Map With Flow Arrows" 
              className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            
            <div className="absolute bottom-8 right-8 flex gap-4">
              <div className="px-6 py-4 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl">
                <span className="block text-[#22d3ee] font-mono text-xs mb-1">NETWORK_STATUS</span>
                <span className="text-white font-arabic font-bold">نشط ومستقر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 text-[#22d3ee]">
            <ImageIcon className="w-6 h-6" />
            <span className="font-mono text-sm tracking-tighter uppercase">Process Gallery • معرض مراحل العمل</span>
          </div>
          <h2 className="text-4xl font-bold font-arabic">مراحل نمذجة وتصميم الشبكة</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryStages.map((stage, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImg(stage.img)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={stage.img} 
                    alt={stage.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-[#22d3ee]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-[#22d3ee] uppercase tracking-widest">{stage.subtitle}</span>
                  <h3 className="text-lg font-bold font-arabic text-white">{stage.title}</h3>
                  <p className="text-xs text-gray-500 font-arabic leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results Table Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-[#22d3ee]">
              <Database className="w-6 h-6" />
              <span className="font-mono text-sm tracking-tighter uppercase">Data Analytics • نتائج التحليل</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-arabic">جدول المخرجات الهيدروليكية</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
            <div className="p-6 border-bottom border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="ابحث عن ماسورة (مثلاً CO-22)..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#22d3ee]/50 font-arabic"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-[#22d3ee]/10 text-[#22d3ee] text-xs font-mono rounded border border-[#22d3ee]/20">CSV EXPORT</div>
                <div className="px-3 py-1 bg-white/5 text-gray-500 text-xs font-mono rounded border border-white/10">SewerCAD v10.0</div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead className="bg-white/5 text-gray-400">
                  <tr>
                    <th className="px-8 py-5 font-arabic font-medium border-b border-white/10">المعرف (Label)</th>
                    <th className="px-8 py-5 font-arabic font-medium border-b border-white/10">السرعة (م/ث)</th>
                    <th className="px-8 py-5 font-arabic font-medium border-b border-white/10">الميل (Slope)</th>
                    <th className="px-8 py-5 font-arabic font-medium border-b border-white/10">الغطاء (م)</th>
                    <th className="px-8 py-5 font-arabic font-medium border-b border-white/10">التدفق (لتر/ث)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-8 py-4 font-mono font-bold text-white group-hover:text-[#22d3ee]">{item.id}</td>
                      <td className="px-8 py-4 font-mono text-gray-300">
                        <span className={`px-2 py-1 rounded ${item.velocity > 0.6 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                          {item.velocity.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-8 py-4 font-mono text-gray-400">{item.slope.toFixed(4)}</td>
                      <td className="px-8 py-4 font-mono text-gray-400 underline decoration-[#22d3ee]/20">{item.cover.toFixed(2)}</td>
                      <td className="px-8 py-4 font-mono text-[#22d3ee]">{item.flow.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredData.length === 0 && (
              <div className="py-20 text-center text-gray-600 font-arabic">
                لا توجد نتائج مطابقة لبحثك...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

