import { motion } from "motion/react";
import { Sparkles, Layers, Volume2 } from "lucide-react";

export default function SolutionSection() {
  const points = [
    {
      icon: <Sparkles className="w-4 h-4 text-brand-orange" />,
      title: "Дүрст санах ой",
      text: "Ханзыг хуурай бичиж бус, хамгийн ойр зураглалаар тогтооно."
    },
    {
      icon: <Layers className="w-4 h-4 text-brand-orange" />,
      title: "Язгуураар хуваах метод",
      text: "Бүх ханзыг хамгийн жижиг бүрэлдэхүүн хэсгээр системчилнэ."
    },
    {
      icon: <Volume2 className="w-4 h-4 text-brand-orange" />,
      title: "Дуудлага, ярианы холбоос",
      text: "Яриа ба сонсох үйлдлийг нэгдмэл нэг экосистемээр холбоно."
    }
  ];

  return (
    <section id="solution" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
      <div className="flex-grow max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center z-10 mt-2 lg:mt-0">
        
        {/* Left Column: Heading and Context Row */}
        <div className="lg:col-span-6 flex flex-col justify-center order-1 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">02 / ХАРИУЛТ ШИЙДЭЛ</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-light text-brand-charcoal tracking-tight leading-tight mb-2">
              Mechi <span className="italic font-serif text-brand-orange font-medium">платформ.</span> <br />
              Хэл сурах хамгийн хялбар арга
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Монгол хүний сэтгэлгээний онцлогт бүрэн тохирсон системтэй ухаалаг сургалт.
            </p>
          </div>

          <div className="h-[1.5px] w-full bg-[#EAE7E2]"></div>

          {/* Core solution bullet points with bigger typography */}
          <div className="space-y-3">
            {points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="flex gap-3 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6B35]/15 flex items-center justify-center shrink-0 mt-0.5">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">
                    {pt.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A5A5A] font-light mt-0.5">
                    {pt.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Beautiful Stock Photo with Visual Overlay */}
        <div className="lg:col-span-6 order-2 flex justify-center lg:justify-end h-full">
          <div className="relative w-full max-w-sm">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-4/3 lg:aspect-square w-full rounded-2xl md:rounded-3xl border-2 border-[#EAE7E2] overflow-hidden bg-white p-2 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=650&q=80"
                alt="Interactive smart student online tools"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Vocabulary Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 right-4 bg-white border border-[#EAE7E2] p-3.5 rounded-2xl shadow-xl max-w-[160px] text-center"
            >
              <span className="text-[9px] font-mono font-bold text-brand-orange uppercase block tracking-wider">AҮКТИВ ХАНЗ</span>
              <p className="text-2xl font-serif font-bold text-brand-charcoal mt-1">你好</p>
              <p className="text-[10px] font-bold text-brand-charcoal/60 mt-0.5">Nǐ hǎo (Сайн уу)</p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Slide footer spacer */}
      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
