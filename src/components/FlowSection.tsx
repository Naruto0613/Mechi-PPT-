import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function FlowSection() {
  const steps = [
    {
      num: "01",
      title: "Ханз тогтоох",
      subtitle: "Суурь дүрс үг",
      desc: "Ханзны анхны зурлагаас эхлэн дүрст санах ойгоор хялбархан цогц тогтооно."
    },
    {
      num: "02",
      title: "Пиньинь авиа",
      subtitle: "Дуудлага зүгшрүүлэх",
      desc: "Монгол дуудлагын онцлогт уялдуулан авиа дуудаж, зөв өргөлтийг заана."
    },
    {
      num: "03",
      title: "Аялга Сонсох",
      subtitle: "Сонсгол сайжруулах",
      desc: "Хятад хэлний 4 авиулга долгионыг чихээрээ маш хурдан ялгаж сурна."
    },
    {
      num: "04",
      title: "Өгүүлбэр унших",
      subtitle: "Бүтцийн зэрэгцүүлэлт",
      desc: "Тусдаа үг бус, өгүүлбэрийн зөв дарааллыг монгол хэлтэй зэрэгцүүлэх арга."
    },
    {
      num: "05",
      title: "Яриа бататгах",
      subtitle: "Амьд харилцаа",
      desc: "Орчин үеийн бодит сэдэв, түүхээр дамжуулан үгсийн сангаа тэлэх систем."
    }
  ];

  return (
    <section id="flow" className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
        
        {/* Left Column: Heading, flow brief and journey photo */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">05 / СУРАЛЦАХ АЯЛАЛ</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-tight mb-2 font-sans leading-tight">
              Суралцах үндсэн <span className="italic font-serif text-brand-orange font-semibold">замнал.</span>
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Анхны зурлагаас эхлэн бизнесийн чөлөөт ярианы түвшин хүртэлх ухаалаг, дарамтгүй 5 шатлал.
            </p>
          </div>

          {/* Premium Education Landscape Photo */}
          <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#EAE7E2] bg-brand-cream shadow-sm p-1">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=650&q=80"
              alt="Roadmap progression study notes"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Column: Timeline steps */}
        <div className="lg:col-span-1" /> {/* Spacer */}
        <div className="lg:col-span-6 relative flex flex-col gap-2.5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="group flex items-start gap-3 bg-brand-cream border-2 border-[#EAE7E2] p-3 rounded-2xl shadow-[0_2px_12px_rgba(28,27,24,0.01)] hover:shadow-md transition-all duration-350"
            >
              {/* Numerical Circle */}
              <div className="w-8 h-8 rounded-full bg-white border border-[#EAE7E2] flex items-center justify-center shrink-0 shadow-sm">
                <span className="font-mono text-xs font-bold text-brand-orange">
                  {step.num}
                </span>
              </div>

              {/* Text metadata */}
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-display font-bold text-brand-charcoal leading-none">
                    {step.title}
                  </h3>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#8A8A8A] font-bold">
                    {step.subtitle}
                  </span>
                </div>
                <p className="text-xs text-[#6A6A6A] font-light mt-1 leading-snug">
                  {step.desc}
                </p>
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
