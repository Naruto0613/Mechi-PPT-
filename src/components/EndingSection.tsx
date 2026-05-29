import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Sparkles, Check, Copy, ExternalLink } from "lucide-react";

export default function EndingSection() {
  const [websiteUrl, setWebsiteUrl] = useState("https://mechi.edu");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ending" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 presentation-bg border-b border-brand-beige">
      {/* Slide Upper Header Bar */}
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-16 h-1.5 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base font-bold text-[#8A8A8A]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="flex-grow max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full py-2 mt-2 lg:mt-0">
        
        {/* Left Column: Core Value & Call to Action */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center h-full relative">
          {/* Background Large Typography Watermark */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-brand-orange opacity-[0.02] font-bold text-[60px] md:text-[100px] leading-none select-none pointer-events-none z-0">
            MECHI
          </div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] font-extrabold z-10"
          >
            МЭЧИ ХЯТАД ХЭЛНИЙ ЦАХИМ ПЛАТФОРМ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-display font-bold text-brand-charcoal tracking-tighter leading-none mb-3 select-none z-10"
          >
            Mechi<span className="text-brand-orange">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "7rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2.5px] bg-brand-orange rounded-full mb-3.5 z-10"
          />

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl font-display font-light text-brand-orange tracking-wide mb-6 z-10 font-sans leading-tight"
          >
            Хятад хэлийг илүү <span className="italic font-serif font-semibold">ухаалгаар сурцгаая.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.18em] text-[#5A5A5A] flex flex-col gap-1.5 z-10 font-bold leading-relaxed"
          >
            <span>© 2026 Mechi Боловсролын Хувьцаат Компани. Бүх эрх хуулиар хамгаалагдсан.</span>
            <span>Холбоо барих ба Хөрөнгө оруулагчид: relations@mechi.edu</span>
          </motion.p>
        </div>

        {/* Right Column: Premium Scan Station */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-brand-beige p-5 rounded-2xl md:rounded-3xl shadow-md w-full max-w-xs flex flex-col items-center text-center relative group"
          >
            <div className="relative w-full flex flex-col items-center">
              {/* Badge */}
              <div className="flex items-center gap-1 px-3 py-1 bg-brand-cream rounded-full border border-brand-beige mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-brand-orange font-extrabold">QR ХОЛБООС</span>
              </div>

              {/* QR Image Visual container */}
              <div className="relative w-36 h-36 border border-brand-orange/20 bg-brand-cream p-2 rounded-xl flex items-center justify-center overflow-hidden mb-3">
                {/* Sweep Laser Line */}
                <motion.div
                  animate={{ top: ["4%", "96%", "4%"] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                  className="absolute left-[4%] right-[4%] h-[2px] bg-brand-orange shadow-[0_0_8px_rgba(255,107,53,0.9)] z-20"
                />

                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(websiteUrl)}&color=212121&bgcolor=FFFDF9`}
                  alt="Mechi Website QR Code"
                  referrerPolicy="no-referrer"
                  className="w-30 h-30 object-contain rounded-lg relative z-10"
                />
              </div>

              {/* URL input info bar */}
              <div className="w-full space-y-2 mb-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-brand-cream rounded-lg border border-brand-beige w-full text-left relative">
                  <Globe className="w-3.5 h-3.5 text-[#8A8A8A] shrink-0" />
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Вэбсайтын хаяг"
                    className="w-full bg-transparent text-xs font-mono font-bold text-brand-charcoal outline-none"
                  />
                  <button
                    onClick={handleCopy}
                    className="p-1 rounded text-brand-charcoal hover:text-brand-orange shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600 animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-[9px] font-mono text-[#8A8A8A] font-bold">
                  Камераар уншуулан шууд нэвтэрнэ үү
                </p>
              </div>

              {/* Call to action */}
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-orange text-brand-cream hover:text-white px-4 py-2 rounded-lg text-xs font-bold leading-none shadow-sm transition-all duration-300"
              >
                <span>Вэбсайт руу зочлох</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Slide Footer */}
      <footer className="mt-4 pt-3 border-t border-brand-beige grid grid-cols-4 gap-3 text-left z-10 shrink-0">
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-0.5 font-bold">Зорилтот бүлэг</p>
          <p className="text-xs font-semibold text-brand-charcoal/90 leading-tight">Монголын ерөнхий боловсролын сурагчид оюутнууд.</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-0.5 font-bold">Нээлтийн үе шат</p>
          <p className="text-xs font-semibold text-brand-charcoal/90 leading-tight">2026 оны намраас хаалттай бетта хувилбар.</p>
        </div>
        <div className="col-span-2 md:col-span-1 hidden md:block">
          <p className="text-[#8A8A8A] text-[10px] uppercase tracking-widest mb-0.5 font-bold">Нийгмийн зорилго</p>
          <p className="text-xs font-semibold text-brand-charcoal/90 leading-tight">Баялаг соёл ба боловсролоор дамжуулж залуусыг чадваржуулах.</p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-end justify-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif italic text-brand-charcoal/70 font-bold">Илтгэл дууслаа.</span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </div>
        </div>
      </footer>
    </section>
  );
}
