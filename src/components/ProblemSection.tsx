import { motion } from "motion/react";
import { AlertCircle, HelpCircle, BookOpen, UserMinus } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <HelpCircle className="w-5 h-5 text-brand-orange" />,
      title: "Хятад ханз сурахад хүндрэлтэй",
      description: "3000 гаруй ханз нь бичлэг, дуудлагын хувьд монгол хэлнээс огт өөр замаар явдаг."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-brand-orange" />,
      title: "Цээжлэх явц хэтэрхий ачаалалтай",
      description: "Ханзыг механикаар цээжлэх нь амархан ядарч, мартахад хүргэдэг."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-brand-orange" />,
      title: "Уламжлалт аргууд уйтгартай",
      description: "Хуучирсан зузаан сурах бичиг, уйтгартай давталт нь сурах идэвхийг бууруулдаг."
    },
    {
      icon: <UserMinus className="w-5 h-5 text-brand-orange" />,
      title: "Сурагчид амархан шантардаг",
      description: "Бодит сэдэл дутмаг учраас анхлан суралцагчдын 70% нь амархан шантардаг."
    }
  ];

  return (
    <section
      id="problem"
      className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige"
    >
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Mechi Танилцуулга / 2026 он
          </span>
        </div>
      </header>

      <div className="flex-1 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 mt-6 lg:mt-0">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">
            01 / Тулгарч буй сорилт
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-6">
            Хятад хэл яагаад <br />
            <span className="italic font-serif text-brand-orange font-medium">
              хүрэшгүй
            </span>{" "}
            мэт санагддаг вэ
          </h2>
          <p className="text-brand-charcoal/70 text-sm md:text-base font-light leading-relaxed mb-6">
            Хэлний бүтэц, дүрмийн эрс ялгаатай байдлаас шалтгаалж монгол
            сурагчдад сэтгэл зүйн том саад болдог.
          </p>
          <div className="h-[1px] w-full bg-[#EAE7E2] mb-6"></div>
          <p className="text-brand-charcoal/40 text-[11px] font-mono leading-relaxed uppercase tracking-wider">
            *Эх сурвалж: Хэл сурах саад бэрхшээлийн судалгааны тайлан.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-brand-cream border border-brand-beige p-6 rounded-3xl relative shadow-[0_2px_8px_rgba(28,27,24,0.01)] hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-4">
                {prob.icon}
              </div>
              <h3 className="text-base font-display font-semibold text-brand-charcoal mb-2 leading-tight">
                {prob.title}
              </h3>
              <p className="text-xs md:text-sm text-[#7A7A7A] font-light leading-relaxed">
                {prob.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
