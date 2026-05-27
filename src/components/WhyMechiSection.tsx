import { motion } from "motion/react";
import { Check, X, ShieldAlert, Zap } from "lucide-react";

export default function WhyMechiSection() {
  const traditionalPoints = [
    "Холбоосгүйгээр цаасан дээр хуурай бичиж цээжлэх оролдлого.",
    "Монгол хүний онцлогийг тусгаагүй ерөнхий орчуулгатай ном.",
    "Унших, ярих дасгал нь хоорондоо холбогдоогүй систем.",
    "Орчин үеийн залуусын сонирхлыг бууруулах хуучин уур амьсгал."
  ];

  const mechiPoints = [
    {
      title: "Зөн совингийн дүрст холбоос",
      text: "Ханзны зураасуудыг танил зураг, дүрсээр хялбархан цээжилнэ."
    },
    {
      title: "Монгол сурагчдад чиглэсэн дизайн",
      text: "Монгол суралцагчдад зориулсан дуудлага, бүтцийн ухаалаг гүүр."
    },
    {
      title: "Үл тасалдах цогц холбоо",
      text: "Ханз цээжлэх, сонсох, ярих, унших үйлдлийг нэгэн зэрэг давтана."
    },
    {
      title: "Цэгцтэй, шинэлэг орчин",
      text: "Орчин үеийн залууст зориулсан сатаарах зүйлгүй, цэвэр дизайн."
    }
  ];

  return (
    <section id="why-mechi" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige">
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      <div className="flex-grow max-w-6xl w-full mx-auto z-10 flex flex-col justify-center mt-6 lg:mt-0">
        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">06 / Стратегийн давуу тал</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-4 font-sans leading-tight">
            Стандартыг <span className="italic font-serif text-brand-orange font-medium">Шинэчлэх нь</span>
          </h2>
          <p className="text-[#7A7A7A] text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Хуучин механик арга болон Mechi-гийн ухаалаг системийн бодит ялгаа.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#EAE7E2]/30 border border-[#EAE7E2] p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-brand-charcoal/5 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-brand-charcoal/40" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-charcoal/40 block font-bold">ХУУЧИРСАН СУРГАЛТЫН ТӨЛӨВЛӨГӨӨ</span>
                  <h3 className="text-lg font-display font-bold text-brand-charcoal/50">Уламжлалт аргууд</h3>
                </div>
              </div>
              <div className="h-[1px] bg-brand-charcoal/10 mb-5"></div>
              
              <ul className="space-y-3.5">
                {traditionalPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-brand-charcoal/30 shrink-0 mt-1" />
                    <span className="text-xs md:text-sm text-brand-charcoal/50 font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 text-[10px] font-mono text-brand-charcoal/30 tracking-widest uppercase font-bold">
              ЭХНИЙ ШАНТРАЛТЫН ӨНДӨР ХУВЬ // Анхны сургалтын ~70% нь хаядаг
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white border border-[#FF6B35]/20 p-8 rounded-3xl flex flex-col justify-between shadow-[0_8px_30px_rgba(255,107,53,0.02)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-orange block font-bold">ШИНЭ ҮЕИЙН СУРГАЛТЫН ЗҮЙ</span>
                  <h3 className="text-lg font-display font-bold text-brand-charcoal">Mechi-гийн хандлага</h3>
                </div>
              </div>
              <div className="h-[1px] bg-brand-orange/10 mb-5"></div>

              <ul className="space-y-4">
                {mechiPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF6B35]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-brand-charcoal font-display leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#7A7A7A] font-light leading-relaxed mt-0.5">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-[10px] font-mono text-brand-orange tracking-widest uppercase font-bold">
              ТОГТООЛТЫН ИЛҮҮ ӨНДӨР ҮЗҮҮЛЭЛТ // Урт хугацааны сонирхол ба итгэл
            </div>
          </motion.div>

        </div>
      </div>

      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
