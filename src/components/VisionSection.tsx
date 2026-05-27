import { motion } from "motion/react";
import { Smile, Star, Users } from "lucide-react";

export default function VisionSection() {
  const pillars = [
    {
      icon: <Users className="w-5 h-5 text-brand-orange" />,
      title: "Монгол залууст хятад хэлийг хялбарчлах",
      desc: "Хүнд ханзны айдасыг арилгаж, ханз цээжлэх явцыг логик дүрслэлээр хялбархан цэгцэлнэ."
    },
    {
      icon: <Smile className="w-5 h-5 text-brand-orange" />,
      title: "Хэл сурах сонирхол татам орчин бүтээх",
      desc: "Хоёр соёлын ухаалаг холбоос бүхий богино хичээлээр сурах хүсэл эрмэлзлийг төрүүлнэ."
    },
    {
      icon: <Star className="w-5 h-5 text-brand-orange" />,
      title: "Илүү ухаалаг суралцах боломж олгох",
      desc: "Ой тогтоолтын оновчтой давтамж, монгол хүний онцлогт тааруулсан хувийн сургалттай."
    }
  ];

  return (
    <section id="vision" className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige">
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      <div className="flex-grow max-w-6xl w-full mx-auto z-10 flex flex-col justify-center mt-6 lg:mt-0">
        <div className="mb-10 text-left">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">07 / Алсын хараа</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-4 font-sans leading-tight">
            Бидний зорилго. <span className="italic font-serif text-brand-orange font-medium">Бидний амлалт.</span>
          </h2>
          <p className="text-[#7A7A7A] text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Mechi бол зөвхөн хэл сурах биш, маргаашийн дэлхийн иргэдийг бэлтгэх ухаалаг гарц юм.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pil, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-brand-cream border border-[#EAE7E2] p-8 rounded-3xl relative flex flex-col justify-between shadow-[0_2px_8px_rgba(28,27,24,0.01)] hover:shadow-md hover:bg-white transition-all duration-350 h-80"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-6">
                  {pil.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-brand-charcoal mb-4 tracking-tight leading-tight">
                  {pil.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#7A7A7A] font-light leading-relaxed">
                {pil.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
