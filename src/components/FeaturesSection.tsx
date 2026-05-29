import { motion } from "motion/react";
import { Edit3, BookOpen, Mic2, Compass } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Edit3 className="w-4 h-4 text-brand-orange" />,
      title: "Ханз тогтоох",
      subtitle: "Дүрст холбоос",
      text: "Ханзыг адилтгах зураг, дүрсээр холбон хурдан санах ойг хөгжүүлнэ."
    },
    {
      icon: <BookOpen className="w-4 h-4 text-brand-orange" />,
      title: "Харьцуулсан бүтэц",
      subtitle: "Унших дасгал",
      text: "Монгол болон хятад хэлний найруулгын ялгааг тодотгосон бүтцийн зэрэгцүүлэлт."
    },
    {
      icon: <Mic2 className="w-4 h-4 text-brand-orange" />,
      title: "Сонсголын дасгал",
      subtitle: "Аялга удирдамж",
      text: "Хятад хэлний 4 аялгыг долгионы онцлогоор зөв цэгцлэн сонсох сэрэл суулгана."
    },
    {
      icon: <Compass className="w-4 h-4 text-brand-orange" />,
      title: "Ухаалаг давталт",
      subtitle: "Агуулга тогтоох",
      text: "Ухаалаг хуваарийн давтамжаар ханз болон үгийг цээжлүүлэхгүйгээр тогтоох систем."
    }
  ];

  return (
    <section id="features" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
        
        {/* Left Column: Heading, intro, and a high-quality vertical study photo */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">04 / ЭКОСИСТЕМИЙН БҮТЭЦ</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-none mb-2 font-sans leading-tight">
              Бидний үндсэн <span className="italic font-serif text-brand-orange font-semibold">экосистем.</span>
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Суралцагчийн таних мэдэхүйд хамгийн ойр, системтэй ухаалаг экосистемийн 4 суурь модул.
            </p>
          </div>

          {/* Premium Education Workspace Photo */}
          <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#EAE7E2] bg-white p-1 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=650&q=80"
              alt="Workspace and notebook illustration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Column: 2x2 Features Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-white border-2 border-[#EAE7E2] p-4 rounded-2xl shadow-[0_2px_12px_rgba(28,27,24,0.01)] hover:shadow-md hover:border-brand-orange/20 transition-all duration-300 relative group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#8A8A8A] block font-bold">
                    {feat.subtitle}
                  </span>
                  <h3 className="text-sm font-display font-extrabold text-brand-charcoal">
                    {feat.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                {feat.text}
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
