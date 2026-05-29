import { motion } from "motion/react";
import { AlertCircle, HelpCircle, BookOpen, UserMinus } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <HelpCircle className="w-4 h-4 text-brand-orange" />,
      title: "Ханз тогтоох саад",
      text: "3000 гаруй ханз бичлэг, дуудлагын асар том зөрүүтэй."
    },
    {
      icon: <AlertCircle className="w-4 h-4 text-brand-orange" />,
      title: "Механик ачаалал",
      text: "Дүрмийн бус үгсийг механикаар цээжлэх нь амархан ядраадаг."
    },
    {
      icon: <BookOpen className="w-4 h-4 text-brand-orange" />,
      title: "Хуучирсан систем",
      text: "Уйтгартай зузаан ном, давталт нь сурах идэвхийг бууруулдаг."
    },
    {
      icon: <UserMinus className="w-4 h-4 text-brand-orange" />,
      title: "Өндөр шантралт",
      text: "Эхний шатанд сонирхолгүй санагдаж, 70% нь орхидог."
    }
  ];

  return (
    <section id="problem" className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
        
        {/* Left Column: Heading and Thematic Photo */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">01 / ТУЛГАРЧ БУЙ СОРИЛТ</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-tight mb-2">
              Хятад хэл яагаад <span className="italic font-serif text-brand-orange font-medium">хүрэшгүй</span> санагддаг вэ?
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Уламжлалт хэлбэрт суурилсан систем монгол сурагчдад асар том сэтгэл зүйн саад үүсгэдэг.
            </p>
          </div>

          {/* Core Photo */}
          <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#EAE7E2] bg-brand-cream">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=650&q=80"
              alt="Traditional studying struggle situation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-90 contrast-110"
            />
          </div>
        </div>

        {/* Right Column: Problem Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-brand-cream border-2 border-[#EAE7E2] p-4 sm:p-5 rounded-2xl shadow-[0_2px_12px_rgba(28,27,24,0.01)] hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-2.5">
                {prob.icon}
              </div>
              <h3 className="text-sm sm:text-base font-display font-extrabold text-brand-charcoal mb-1.5 leading-tight">
                {prob.title}
              </h3>
              <p className="text-xs text-[#5A5A5A] font-light leading-relaxed">
                {prob.text}
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
