import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Maximize, Minimize } from 'lucide-react';
import Hero from './components/Hero';
import WaterBackground from './components/WaterBackground';
import Topography from './components/Topography';
import Constraints from './components/Constraints';
import Engine from './components/Engine';
import Results from './components/Results';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

const slides = [
  { id: 'hero', component: Hero },
  { id: 'topography', component: Topography },
  { id: 'constraints', component: Constraints },
  { id: 'engine', component: Engine },
  { id: 'results', component: Results },
  { id: 'profiles', component: Profiles },
  { id: 'footer', component: Footer },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentComponent = slides[currentSlide].component;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1,
    }),
  };

  return (
    <div 
      ref={containerRef}
      className={`relative h-screen w-screen bg-[#050505] overflow-hidden selection:bg-[#22d3ee] selection:text-[#050505] font-sans rtl`}
    >
      <WaterBackground />
      
      {/* Fullscreen Toggle Button */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-black/40 border border-white/10 hover:border-[#22d3ee]/50 text-white/50 hover:text-[#22d3ee] transition-all backdrop-blur-md"
        title={isFullscreen ? "خروج من ملء الشاشة (F)" : "ملء الشاشة (F)"}
      >
        {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
      </button>

      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto scrollbar-hide flex flex-col items-center"
          >
            <div className="w-full max-w-full flex-grow flex items-center py-20 px-4 md:px-10">
               <CurrentComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
        <div className="max-w-full flex items-center justify-between pointer-events-auto px-4">
          
          {/* Next Button (Left as in screenshot) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`group flex items-center gap-2 px-6 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all
              ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'hover:border-[#22d3ee]/50 text-white'}`}
          >
            <ChevronLeft className="w-5 h-5 text-[#22d3ee]" />
            <span className="font-arabic text-lg font-medium">التالي</span>
          </motion.button>

          {/* Indicators (Center) */}
          <div className="flex items-center gap-1.5 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "bg-[#22d3ee] w-4" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Previous Button (Right) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`group flex items-center gap-2 px-6 py-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all
              ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'hover:border-[#22d3ee]/50 text-gray-400'}`}
          >
            <span className="font-arabic text-lg font-medium">السابق</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </motion.button>
        </div>
      </div>

      {/* Slide Counter Underlay */}
      <div className="fixed top-12 left-12 z-0 opacity-[0.02] select-none pointer-events-none">
        <span className="text-[20rem] font-bold font-mono leading-none">
          {currentSlide + 1}
        </span>
      </div>
    </div>
  );
}
