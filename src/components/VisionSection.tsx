import { motion } from "motion/react";
import { Smile, Star, Users } from "lucide-react";

export default function VisionSection() {
  const pillars = [
    {
      icon: <Users className="w-4 h-4 text-brand-orange" />,
      title: "Хүндрэлийг шийдвэрлэх",
      desc: "Ханзны хүнд бэрхшээлийг дүрст логик холбоосоор бүрэн шийднэ."
    },
    {
      icon: <Smile className="w-4 h-4 text-brand-orange" />,
      title: "Сэдэл, тэмүүлэл төрүүлэх",
      desc: "Сонирхолтой богино соёлын дасгал, хувийн дассан шатлал бүхий хязгааргүй сургалт."
    },
    {
      icon: <Star className="w-4 h-4 text-brand-orange" />,
      title: "Дэлхийн залуур бэлдэх",
      desc: "Монгол хүний сурах онцлогт тохирсон өндөр давтамжит системтэй боловсрол."
    }
  ];

  return (
    <section id="vision" className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
        
        {/* Left Column: Heading, intro, and an inspiring modern mentor/student photo */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">07 / АЛСЫН ХАРАА</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-tight mb-2 font-sans leading-tight">
              Бидний зорилго. <br />
              <span className="italic font-serif text-brand-orange font-semibold">Бидний амлалт.</span>
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Mechi бол зөвхөн хэл сурах биш, маргаашийн дэлхийн иргэдийг бэлтгэх ухаалаг гүүр юм.
            </p>
          </div>

          {/* Core inspiring photo of study guidance */}
          <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#EAE7E2] bg-brand-cream p-1 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=650&q=80"
              alt="Mentoring session study future goals"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Column: 3 Horizontal/Stacked Vision Pillars */}
        <div className="lg:col-span-1" /> {/* Spacer */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {pillars.map((pil, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-brand-cream border-2 border-[#EAE7E2] p-4 rounded-2xl flex flex-col justify-center hover:border-brand-orange/20 hover:bg-white transition-all duration-300 shadow-[0_2px_12px_rgba(28,27,24,0.01)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                  {pil.icon}
                </div>
                <h3 className="text-sm sm:text-base font-display font-extrabold text-brand-charcoal">
                  {pil.title}
                </h3>
              </div>
              <p className="text-xs text-[#5A5A5A] font-light leading-snug mt-2 border-t border-brand-beige/50 pt-1.5 pl-11">
                {pil.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Slide footer spacer */}
      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
