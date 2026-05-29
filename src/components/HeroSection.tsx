import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg select-none">
      {/* Background Large Typography Watermark */}
      <div className="absolute bottom-6 left-12 text-brand-orange opacity-[0.03] font-bold text-[140px] md:text-[220px] leading-none select-none pointer-events-none z-0">
        MECHI
      </div>

      {/* Slide Upper Header Bar */}
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-16 h-1.5 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base font-bold text-[#8A8A8A]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center z-10 relative mt-2 lg:mt-0">
        {/* Left Core Value Presentation */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none text-brand-charcoal mb-4"
          >
            Mechi<span className="text-brand-orange">.</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-brand-charcoal/95 leading-snug mb-4 tracking-wide font-sans"
          >
            Хятад хэл сурах хамгийн <span className="italic font-serif text-brand-orange font-semibold">ухаалаг</span> зам.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-[#5A5A5A] max-w-xl font-light leading-relaxed mb-4"
          >
            Монгол сурагчдын сэтгэлгээнд тусгайлан зориулж бүтээсэн, дүрст санах ойд суурилсан шинэ үеийн боловсрол.
          </motion.p>
        </div>

        {/* Right Side Visual Component with Premium Photo and Overlay Card */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end h-full">
          <div className="relative w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="relative aspect-4/3 w-full rounded-2xl md:rounded-3xl border-2 border-[#EAE7E2] overflow-hidden shadow-[0_20px_50px_rgba(28,27,24,0.08)] bg-white p-2"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=650&q=80"
                alt="Active and happy digital learning"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Info Badge pointing on active service */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 1, delay: 0.7, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-brand-orange text-white px-5 py-3 rounded-2xl shadow-xl shadow-brand-orange/20 rotate-[-4deg] z-20"
            >
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-cream animate-pulse" />
                <p className="text-[9px] font-mono font-bold tracking-widest text-[#FFF2EE]">ONLINE PLATFORM</p>
              </div>
              <p className="text-xl sm:text-2xl font-bold leading-none tracking-tight">mechi.edu</p>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Slide Footer */}
      <footer className="mt-4 pt-4 border-t border-brand-beige grid grid-cols-4 gap-4 md:gap-12 text-left z-10 shrink-0">
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-1 font-bold">Асуудалд чиглэх нь</p>
          <p className="text-xs font-semibold text-brand-charcoal/90 leading-tight">Хэл сурахад тохиолддог урам зоригийн зөрүүг арилгах.</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-1 font-bold">Шийдлийн зам</p>
          <p className="text-xs font-semibold text-brand-charcoal/90 leading-tight">Шат дараалсан, анхан шатанд хялбар, соёлд нийцсэн.</p>
        </div>
        <div className="col-span-2 md:col-span-1 hidden md:block">
          <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-1 font-bold">Үндсэн модулиуд</p>
          <div className="flex gap-2 mt-1">
            <span className="text-[10px] font-extrabold text-brand-charcoal uppercase tracking-wider">Унших</span>
            <span className="text-[10px] font-bold text-brand-charcoal/30">/</span>
            <span className="text-[10px] font-extrabold text-brand-charcoal uppercase tracking-wider">Сонсох</span>
            <span className="text-[10px] font-bold text-brand-charcoal/30">/</span>
            <span className="text-[10px] font-extrabold text-brand-charcoal uppercase tracking-wider">Ханз</span>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-end justify-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif italic text-brand-charcoal/70 font-semibold">Хятад хэлийг ухаалгаар сур.</span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
        </div>
      </footer>
    </section>
  );
}
