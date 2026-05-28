import { motion } from "motion/react";

export default function StatsSection() {
  const stats = [
    {
      value: "3,600+",
      label: "ХЯТАД ХАНЗ",
      sub: "HSK 1-6 түвшний бүх ханзыг язгуур бүтцээр нь ангилж, системчилсэн.",
    },
    {
      value: "Унших",
      label: "ПРАКТИК ЧАДВАР",
      sub: "Өдөр тутмын ярианд суурилсан, бодит унших чадварыг богино хугацаанд хөгжүүлнэ.",
    },
    {
      value: "Сонсох",
      label: "СУРГАЛТЫН ХЭСЭГ",
      sub: "Үндсэн аялга, зөв өргөлтийг эзэмшүүлэх интерактив сонсох дасгалууд.",
    },
    {
      value: "Системтэй",
      label: "ӨДӨР ТУТМЫН СУРГАЛТ",
      sub: "Орчин үеийн завгүй амьдралын хэмнэлд тааруулсан, өдөр бүр 15 минутын үр дүнтэй хичээлүүд.",
    },
    {
      value: "Анхан шат",
      label: "ХЯЛБАР ЭХЛЭЛ",
      sub: "Ямар ч суурь мэдлэг шаардахгүй, эхний зурлагаас эхлэн хялбар заана.",
    },
  ];

  return (
    <section
      id="stats"
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

      <div className="flex-1 max-w-6xl w-full mx-auto z-10 flex flex-col justify-center mt-6 lg:mt-0">
        <div className="mb-10 text-left">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">
            03 / Үндсэн үзүүлэлтүүд
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-4 font-sans">
            Цогц агуулга.{" "}
            <span className="italic font-serif text-brand-orange font-medium">
              Энгийн танилцуулга.
            </span>
          </h2>
          <p className="text-[#7A7A7A] text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Сургалтын хөтөлбөрийг ядраахгүй, хамгийн цэгцтэй бөгөөд ухаалаг
            аргаар эзэмшүүлнэ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bg-[#FDFBF7] border border-[#EAE7E2] p-6 rounded-3xl flex flex-col justify-between h-64 shadow-[0_2px_8px_rgba(28,27,24,0.01)] transition-all duration-300 ${
                idx === 0
                  ? "md:col-span-2 lg:col-span-1 bg-white border-brand-orange/30 shadow-[0_4px_16px_rgba(255,107,53,0.04)]"
                  : "hover:bg-white"
              }`}
            >
              <div>
                <span className="font-mono text-[9px] tracking-widest text-[#A5A5A5] font-bold uppercase block mb-4">
                  ҮҮСГЭГЧ 0{idx + 1}
                </span>
                <span
                  className={`font-display font-light leading-none tracking-tight block mb-2 ${
                    st.value === "3,600+"
                      ? "text-4xl md:text-5xl text-brand-orange font-normal"
                      : "text-3xl text-brand-charcoal"
                  }`}
                >
                  {st.value}
                </span>
                <h3 className="font-display text-[10px] font-bold text-brand-charcoal/80 uppercase tracking-widest mb-4">
                  {st.label}
                </h3>
              </div>
              <p className="text-xs text-[#7A7A7A] font-light leading-relaxed">
                {st.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
