import { motion } from "motion/react";

export default function StatsSection() {
  const stats = [
    {
      value: "3,600+",
      label: "ДҮРС ХАНЗ",
      sub: "Үндсэн язгуурт нэгтгэсэн."
    },
    {
      value: "15 мин",
      label: "ӨДӨР ТУТМЫН ХИЧЭЭЛ",
      sub: "Байнгын богино давтамж."
    },
    {
      value: "Унших",
      label: "СУРГАЛТЫН ХОЛБОО",
      sub: "Өгүүлбэрийн жигд шилжилт."
    },
    {
      value: "Сонсох",
      label: "ЦОГЦ ДАСГАЛЖИЛТ",
      sub: "Зөв аялга, сонсох чадвар."
    }
  ];

  return (
    <section id="stats" className="relative h-screen w-screen flex flex-col justify-between bg-white overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
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
        
        {/* Left Column: Heading, Subtitle and Success Photo */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-bold mb-1">03 / ҮНДСЭН ҮЗҮҮЛЭЛТТЭЙ</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-bold text-brand-charcoal tracking-tight leading-tight mb-2 font-sans">
              Хүчирхэг агуулга. <br />
              <span className="italic font-serif text-brand-orange font-semibold">Энгийн бүтэц.</span>
            </h2>
            <p className="text-[#5A5A5A] text-xs sm:text-sm font-light">
              Ядаргаатай урт хичээлүүдийг халж, суралцагчийг залхаахгүй оновчтой замаар сургана.
            </p>
          </div>

          {/* Clean Graphic Image of modern tutoring */}
          <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#EAE7E2] bg-brand-cream">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=650&q=80"
              alt="Professional guidance and metrics"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: 2x2 Stats Grid list */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-[#FDFBF7] border-2 border-[#EAE7E2] p-4 rounded-2xl flex flex-col justify-between shadow-[0_2px_12px_rgba(28,27,24,0.01)] hover:border-brand-orange/20 hover:bg-white transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
            >
              <div>
                <span className="font-mono text-[9px] tracking-widest text-[#8A8A8A] font-bold uppercase block mb-1">
                  ҮЗҮҮЛЭЛТ 0{idx + 1}
                </span>
                <span className="font-display tracking-tight block text-2xl sm:text-3xl font-extrabold text-brand-orange mb-1 leading-none">
                  {st.value}
                </span>
                <h3 className="font-display text-[9px] font-extrabold text-[#7A7A7A] uppercase tracking-widest leading-tight">
                  {st.label}
                </h3>
              </div>
              <p className="text-[11px] text-[#5A5A5A] font-light mt-2 border-t border-brand-beige pt-1.5 leading-normal">
                {st.sub}
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
