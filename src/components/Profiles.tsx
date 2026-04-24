import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Info, Maximize2 } from 'lucide-react';

export default function Profiles() {
  const [activeTab, setActiveTab] = useState('main');
  const [showComparison, setShowComparison] = useState(false);

  const profiles = {
    main: {
      title: "المقطع الطولي الرئيسي (Main Profile)",
      desc: "يمثل المسار الأطول للشبكة والواصل إلى نقطة المصب، يوضح استمرارية الجريان بالجاذبية.",
      img: "v9_profile_1.jpg",
      id: "Profile-1"
    },
    branch: {
      title: "المقطع الطولي الفرعي (Branch Profile)",
      desc: "يمثل أحد المسارات الجانبية التي تصب في الخط الرئيسي، يوضح آلية ربط التيجان.",
      img: "v10_profile_2.jpg",
      id: "Profile-2"
    }
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-t from-black to-[#050505]" id="profiles">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold font-arabic">التحليل البصري (Profiles)</h2>
          <p className="text-gray-400 font-arabic text-sm md:text-base">
            مقاطع طولية توضح العلاقة بين منسوب الأرض وارتفاع خط الطاقة الهيدروليكي (HGL).
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl">
            <button
              onClick={() => { setActiveTab('main'); setShowComparison(false); }}
              className={`px-6 py-2 rounded-xl font-arabic transition-all text-sm ${activeTab === 'main' && !showComparison ? 'bg-[#22d3ee] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              المسار الرئيسي
            </button>
            <button
              onClick={() => { setActiveTab('branch'); setShowComparison(false); }}
              className={`px-6 py-2 rounded-xl font-arabic transition-all text-sm ${activeTab === 'branch' && !showComparison ? 'bg-[#22d3ee] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              المسار الفرعي
            </button>
          </div>
          
          <button
            onClick={() => setShowComparison(!showComparison)}
            className={`px-6 py-2 rounded-2xl font-arabic border transition-all text-sm ${showComparison ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'border-white/10 text-gray-400 hover:border-[#22d3ee]'}`}
          >
            {showComparison ? 'إغلاق المقارنة' : 'عرض مقارنة جانبية'}
          </button>
        </div>

        {!showComparison ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="relative group rounded-3xl overflow-hidden border border-white/10 bg-black aspect-video"
                >
                  <img 
                    src={profiles[activeTab as keyof typeof profiles].img} 
                    alt={profiles[activeTab as keyof typeof profiles].title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-[#22d3ee]/10 backdrop-blur-md border border-[#22d3ee]/30 px-3 py-1 rounded-xl text-white font-mono text-[10px]">
                      {profiles[activeTab as keyof typeof profiles].id}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                <h3 className="text-xl font-bold font-arabic text-[#22d3ee]">
                  {profiles[activeTab as keyof typeof profiles].title}
                </h3>
                <p className="text-gray-400 font-arabic leading-relaxed text-sm">
                  {profiles[activeTab as keyof typeof profiles].desc}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1 bg-red-500 rounded-full" />
                    <span className="text-gray-300">منسوب الأرض الطبيعية (Ground)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">خط الطاقة الهيدروليكي (HGL)</span>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl flex gap-2">
                  <Info className="w-4 h-4 text-blue-400 shrink-0" />
                  <p className="text-[10px] font-arabic text-blue-200">
                    خط الـ HGL الأزرق يقع بأمان تحت مستوى الأرض، مما يؤكد عدم وجود ضغوط عكسية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {Object.entries(profiles).map(([key, p], i) => (
              <div key={key} className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-video relative group">
                  <img src={p.img} alt={p.title} className="w-full h-full object-contain p-2" />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 rounded text-[10px] font-mono text-[#22d3ee] border border-[#22d3ee]/20">
                    {p.id}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-arabic font-bold text-sm text-[#22d3ee]">{p.title}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
