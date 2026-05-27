import { motion } from "motion/react";
import { Sparkles, Layers, Volume2, ShieldCheck } from "lucide-react";

export default function SolutionSection() {
  const points = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
      title: "Хятад хэл сурах орчин үеийн платформ",
      description: "Хуурай зааврын оронд орчин үеийн цахим шийдлээр харааны итгэл олгоно."
    },
    {
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      title: "Цэгцтэй ба Анхлан суралцагчид зориулсан",
      description: "Ханзыг танин мэдэхүйн язгуурт хувааж, сурах үйл явцыг хялбарчилсан."
    },
    {
      icon: <Volume2 className="w-5 h-5 text-brand-orange" />,
      title: "Үр дүнтэй сургалтад чиглэсэн",
      description: "Өдөр тутмын ярианд хамгийн хэрэгтэй үгс, өгүүлбэрийн бүтцийг заана."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
      title: "Сурагчдад тусгайлан зориулсан",
      description: "Хятад хэлний өргөлт, дуудлагыг монгол хүний авиатай холбож заана."
    }
  ];

  return (
    <section id="solution" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige">
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      <div className="flex-1 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 mt-6 lg:mt-0">
        
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white border border-[#EAE7E2] p-6 rounded-3xl relative shadow-[0_2px_8px_rgba(28,27,24,0.01)] hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-4">
                {pt.icon}
              </div>
              <h3 className="text-base font-display font-semibold text-brand-charcoal mb-2 leading-tight">
                {pt.title}
              </h3>
              <p className="text-xs md:text-sm text-[#7A7A7A] font-light leading-relaxed">
                {pt.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">02 / Хариулт шийдэл</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-6">
            Mechi <span className="italic font-serif text-brand-orange font-medium">платформ.</span> <br />
            Хэл сурах шинэ хандлага
          </h2>
          <p className="text-brand-charcoal/70 text-sm md:text-base font-light leading-relaxed mb-6">
            Хятад хэлийг логик, харааны болон байгалийн холбоос бүхий системтэй болгох соёлын гүүрийг бүтээв.
          </p>
          <div className="h-[1px] w-full bg-[#EAE7E2] mb-6"></div>
          <div className="flex items-center gap-2 text-[#A5A5A5] font-mono text-xs tracking-wider font-semibold">
            <span>● ОРЧИН ҮЕИЙН СИСТЕМТ АРГА</span>
            <span className="text-[#EAE7E2]">|</span>
            <span>● МОНГОЛ СУРАГЧДАД ЗОРИУЛСАН СУРГАЛТЫН ЗҮЙ</span>
          </div>
        </div>

      </div>

      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
