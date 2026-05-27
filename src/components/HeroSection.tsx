import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg select-none">
      <div className="absolute bottom-6 left-12 text-brand-orange opacity-[0.03] font-bold text-[140px] md:text-[220px] leading-none select-none pointer-events-none z-0">
        MECHI
      </div>

      <header className="flex justify-between items-start z-10 w-full">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Mechi Танилцуулга / 2026 он
          </span>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-12 gap-8 items-center z-10 relative mt-4 md:mt-0">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[75px] sm:text-[90px] md:text-[110px] font-display font-bold tracking-tight leading-[0.95] text-brand-charcoal mb-6"
          >
            Mechi<span className="text-brand-orange">.</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-brand-charcoal/90 leading-snug mb-8 tracking-wide max-w-2xl font-sans"
          >
            Монгол сурагчдад хятад хэл сурах хамгийн <span className="italic font-serif text-brand-orange font-medium">хялбар</span> арга.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-[#7A7A7A] max-w-xl font-light leading-relaxed mb-6"
          >
            Монгол хэлний онцлогт тохирсон ухаалаг системээр хятад хэлийг хялбархан сурна.
          </motion.p>
        </div>

        <div className="col-span-12 lg:col-span-5 hidden lg:flex items-center justify-end">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="w-80 h-[430px] bg-white rounded-[40px] shadow-2xl shadow-brand-charcoal/5 p-8 flex flex-col justify-between border border-white"
            >
              <div className="w-full aspect-square bg-[#FDFBF7] rounded-3xl flex items-center justify-center mb-6">
                <span className="text-8xl text-brand-orange font-serif opacity-90 select-none">
                  美
                </span>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-brand-orange font-bold">Гол асуудал</p>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                    Хуучин цээжлэх аргууд хэт түвэгтэй. Анхлан суралцагчдын хувьд ханз үсэг нь хүрэхийн аргагүй мэт санагддаг.
                  </p>
                </div>
                <div className="h-[1px] w-full bg-[#F0F0F0]" />
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#A5A5A5] font-bold">Танилцуулгын дараалал</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EAE7E2]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EAE7E2]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EAE7E2]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EAE7E2]" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 1, delay: 0.9, type: "spring" }}
              className="absolute -bottom-4 -left-10 bg-brand-orange text-white p-5 rounded-3xl shadow-xl shadow-brand-orange/15 rotate-[-4deg]"
            >
              <p className="text-[36px] font-bold leading-none tracking-tight">3,600+</p>
              <p className="text-[9px] uppercase tracking-wider font-semibold opacity-85 mt-1">
                Ханзнууд
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="mt-8 pt-6 border-t border-brand-beige grid grid-cols-4 gap-4 md:gap-12 text-left z-10">
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#A5A5A5] text-[10px] uppercase tracking-widest mb-1.5">Асуудалд чиглэх нь</p>
          <p className="text-xs font-medium text-brand-charcoal/80">Хэл сурахад тохиолддог урам зоригийн зөрүүг арилгах.</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#A5A5A5] text-[10px] uppercase tracking-widest mb-1.5">Шийдлийн зам</p>
          <p className="text-xs font-medium text-brand-charcoal/80">Шат дараалсан, анхан шатанд хялбар, соёлд нийцсэн.</p>
        </div>
        <div className="col-span-2 md:col-span-1 hidden md:block">
          <p className="text-[#A5A5A5] text-[10px] uppercase tracking-widest mb-1.5">Үндсэн модулиуд</p>
          <div className="flex gap-2.5 mt-1">
            <span className="text-[10px] font-bold text-brand-charcoal">Унших</span>
            <span className="text-[10px] font-bold text-brand-charcoal/30">/</span>
            <span className="text-[10px] font-bold text-brand-charcoal">Сонсох</span>
            <span className="text-[10px] font-bold text-brand-charcoal/30">/</span>
            <span className="text-[10px] font-bold text-brand-charcoal">Ханз</span>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-end justify-center">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-serif italic text-brand-charcoal/50">Хятад хэлийг ухаалгаар сур.</span>
            <div className="w-8 h-[1px] bg-brand-orange" />
          </div>
        </div>
      </footer>
    </section>
  );
}
