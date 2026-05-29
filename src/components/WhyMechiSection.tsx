import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function WhyMechiSection() {
  const traditionalPoints = [
    "Дүрст холбоосгүй механик цээжлэлт",
    "Монгол хүний сэтгэлгээнд үл нийцэх орчуулга",
    "Яриа ба сонсох дасгалын салангид холбоо",
    "Зар сурталчилгаа, сатааруулах зүйл ихтэй орчин"
  ];

  const mechiPoints = [
    "Дүрс үсэг, зурлагыг амьд зургаар холбох",
    "Монгол сурагчдад зориулсан авиа бүтцийн гүүр",
    "Унших, ярих үйлдлийг нэгдмэл заах холбоос",
    "Сатаарах зүйлгүй, зөвхөн төвлөрөх цэвэр дизайн"
  ];

  return (
    <section id="why-mechi" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
      <div className="flex-grow max-w-6xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mt-2 lg:mt-0">
        
        {/* Left Column: Heading, subtitle, and students collaboration picture */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">06 / СТРАТЕГИЙН ДАВУУ ТАЛ</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-light text-brand-charcoal tracking-tight leading-tight mb-2 font-sans leading-tight">
              Стандартыг <span className="italic font-serif text-brand-orange font-semibold">Шинэчлэх нь.</span>
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Ямар ч зохион байгуулалтгүй механик цээжлэлт болон Mechi-гийн ухаалаг системийн бодит ялгаа.
            </p>
          </div>

          {/* Premium active tutoring group photo */}
          <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#EAE7E2] bg-white p-1 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=650&q=80"
              alt="Active learning group smiling"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Column: Traditional vs Mechi Dual Comparison cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#EAE7E2]/45 border-2 border-[#EAE7E2] p-4 sm:p-5 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-charcoal/50 block font-bold mb-1">ХУУЧИРСАН СИСТЕМ</span>
              <h3 className="text-base font-display font-extrabold text-brand-charcoal/60 mb-3 block">Уламжлалт арга барил</h3>
              <div className="h-[1.5px] bg-brand-charcoal/10 mb-4"></div>
              
              <ul className="space-y-3">
                {traditionalPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-brand-charcoal/40 shrink-0 mt-0.5" />
                    <span className="text-xs text-brand-charcoal/60 font-light leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mechi Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white border-2 border-[#FF6B35]/30 p-4 sm:p-5 rounded-2xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-orange block font-bold mb-1">БИДНИЙ ШИЙДЭЛ</span>
              <h3 className="text-base font-display font-extrabold text-brand-charcoal mb-3 block">Mechi систем</h3>
              <div className="h-[1.5px] bg-[#FF6B35]/15 mb-4"></div>
              
              <ul className="space-y-3">
                {mechiPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#FF6B35]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-brand-orange" />
                    </div>
                    <span className="text-xs text-brand-charcoal font-semibold leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Slide footer spacer */}
      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
