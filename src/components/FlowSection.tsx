import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function FlowSection() {
  const steps = [
    {
      num: "01",
      title: "Ханз сурах",
      subtitle: "Суурь дүрс үсэг",
      desc: "Ханзны анхны зурлагаас эхлэн байгалийн холбоосоор ханз бэлгэдлийг амархан тогтооно."
    },
    {
      num: "02",
      title: "Дуудлага давтах",
      subtitle: "Пиньинь ба Үгийн холбоос",
      desc: "Монгол дуудлагаа хэрэгцээт авиануудтай уялдуулж, зөв өргөлтийг хялбар заана."
    },
    {
      num: "03",
      title: "Сонсгол сайжруулах",
      subtitle: "Аялга эзэмших нь",
      desc: "Хятад хэлний дөрвөн өргөлт, авиаг чихээрээ маш хурдан ялгах дасгалуудтай."
    },
    {
      num: "04",
      title: "Өгүүлбэр унших",
      subtitle: "Бүтцийн зэрэгцүүлэлт",
      desc: "Тусдаа үг биш бүтэн өгүүлбэрийн дарааллыг монгол хэлтэй уялдуулж сурна."
    },
    {
      num: "05",
      title: "Үгсээ органикаар тэлэх",
      subtitle: "Агуулгын бататгал",
      desc: "Амьд яриа, түүх, сонирхолтой сэдвүүдээр дамжуулан үгсийн сангаа тэлнэ."
    }
  ];

  return (
    <section id="flow" className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige">
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      <div className="flex-grow max-w-6xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6 lg:mt-0">
        
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">05 / Суралцах аялал</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-6 font-sans leading-tight">
            Суралцах үндсэн <br />
            <span className="italic font-serif text-brand-orange font-medium">замнал</span>
          </h2>
          <p className="text-[#7A7A7A] text-sm md:text-base font-light leading-relaxed mb-6">
            Огцом шилжилтгүйгээр анхны зурлагаас амьд ярианы харилцаа хүртэлх 5 шатлалт суралцах зам.
          </p>
          <div className="h-[1px] w-full bg-[#EAE7E2] mb-6"></div>
          <div className="flex items-center gap-2.5 text-[#A5A5A5] font-mono text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
            <span>Баталгаажсан сургалтын зүй тогтолт систем</span>
          </div>
        </div>

        <div className="lg:col-span-8 relative flex flex-col gap-3 md:gap-4">
          <div className="absolute left-8 top-8 bottom-8 w-[1px] bg-[#EAE7E2] hidden md:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative flex items-start gap-4 md:gap-6 bg-brand-cream border border-[#EAE7E2] p-4.5 rounded-3xl shadow-[0_2px_8px_rgba(28,27,24,0.01)] hover:shadow-md transition-all duration-300 md:ml-4"
            >
              <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-orange border border-white z-10 shadow-sm hidden md:block group-hover:scale-125 transition-transform duration-300" />

              <div className="w-9 h-9 rounded-full bg-white border border-[#EAE7E2] flex items-center justify-center shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold text-brand-orange">
                  {step.num}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full items-center">
                <div className="md:col-span-1">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#A5A5A5] font-bold block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-base font-display font-semibold text-brand-charcoal leading-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs md:text-sm text-[#7A7A7A] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Slide footer spacer */}
      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
