import { useState } from "react";
import { motion } from "motion/react";
import { QrCode, ExternalLink, Globe, Sparkles, Check, Copy } from "lucide-react";

export default function EndingSection() {
  const [websiteUrl, setWebsiteUrl] = useState("https://mechi.edu");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ending" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige">
      {/* Slide Upper Header Bar */}
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="flex-grow max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full py-4 overflow-y-auto">
        {/* Left Column: Core Value & Call to Action */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center h-full relative">
          {/* Background Large Typography Watermark */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-brand-orange opacity-[0.02] font-bold text-[80px] md:text-[140px] leading-none select-none pointer-events-none z-0">
            MECHI
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#A5A5A5] font-bold z-10"
          >
            МЭЧИ ХЯТАД ХЭЛНИЙ ЦАХИМ ПЛАТФОРМ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-8xl font-display font-bold text-brand-charcoal tracking-tighter leading-none mb-4 select-none z-10"
          >
            Mechi<span className="text-brand-orange">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2px] bg-brand-orange rounded-full mb-4 z-10"
          />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-display font-light text-brand-orange tracking-wide mb-6 z-10 font-sans"
          >
            Хятад хэлийг илүү <span className="italic font-serif font-medium">ухаалгаар сурцгаая.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7A7A] flex flex-col gap-1 z-10 font-bold"
          >
            <span>© 2026 Mechi Боловсролын Хувьцаат Компани. Бүх эрх хуулиар хамгаалагдсан.</span>
            <span>Холбоо барих ба Хөрөнгө оруулагчид: relations@mechi.edu</span>
          </motion.div>
        </div>

        {/* Right Column: Premium Scan Station */}
        <div className="lg:col-span-5 flex justify-center items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/90 backdrop-blur-md border border-brand-beige/80 p-5 rounded-2xl shadow-[0_20px_50px_rgba(33,33,33,0.06)] hover:shadow-[0_30px_70px_rgba(33,33,33,0.1)] transition-all duration-500 w-full max-w-sm flex flex-col items-center text-center relative group"
          >
            {/* Ambient subtle glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/5 to-brand-gold/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

            <div className="relative w-full flex flex-col items-center">
              {/* Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-cream rounded-full border border-brand-beige mb-4 shadow-sm">
                <Sparkles className="w-3 h-3 text-brand-orange animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-brand-orange font-bold">ВЭБСАЙТ СКАНДАХ</span>
              </div>

              {/* QR Image Visual container */}
              <div className="relative w-44 h-44 border border-brand-orange/15 bg-brand-cream/35 p-2 rounded-xl flex items-center justify-center shadow-inner overflow-hidden mb-4">
                {/* Simulated Sweeping Laser Line representing standard scanning feedback */}
                <motion.div
                  animate={{ top: ["4%", "96%", "4%"] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                  className="absolute left-[4%] right-[4%] h-[2px] bg-brand-orange/80 shadow-[0_0_8px_rgba(255,107,53,0.9)] z-20"
                />

                {/* Secure, zero-dependency QR code generation using standard qrserver */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(websiteUrl)}&color=212121&bgcolor=FFFDF9`}
                  alt="Mechi Website QR Code"
                  referrerPolicy="no-referrer"
                  className="w-40 h-40 object-contain rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* URL Info / Dynamic Editor */}
              <div className="w-full space-y-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-cream/70 rounded-lg border border-brand-beige w-full text-left relative">
                  <Globe className="w-3.5 h-3.5 text-[#A5A5A5] shrink-0" />
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Вэбсайтын хаяг уулгах"
                    className="w-full bg-transparent text-xs font-mono font-medium text-brand-charcoal outline-none placeholder:text-brand-charcoal/30"
                  />
                  <button
                    onClick={handleCopy}
                    className="p-1 hover:bg-brand-orange/10 rounded transition-colors text-brand-charcoal/60 hover:text-brand-orange shrink-0"
                    title="Copy URL"
                  >
                    {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <p className="text-[10px] font-mono text-[#A5A5A5] tracking-tight leading-relaxed">
                  Утасныхаа камераар уншуулан манай вэбсайт руу шууд нэвтэрнэ үү
                </p>
              </div>

              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-orange text-brand-cream hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold leading-none shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Вэбсайт руу зочлох</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-8 pt-6 border-t border-brand-beige grid grid-cols-4 gap-4 md:gap-12 text-left z-10 shrink-0">
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#A5A5A5] text-[10px] uppercase tracking-widest mb-1.5">Зорилтот бүлэг</p>
          <p className="text-xs font-semibold text-brand-charcoal/80">Монголын ерөнхий боловсролын сурагчид ба оюутнууд.</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="text-[#A5A5A5] text-[10px] uppercase tracking-widest mb-1.5">Нээлтийн үе шат</p>
          <p className="text-xs font-semibold text-brand-charcoal/80">2026 оны намраас хаалттай туршилтын бетта хувилбар.</p>
        </div>
        <div className="col-span-2 md:col-span-1 hidden md:block">
          <p className="text-[#A5A5A5] text-[10px] uppercase tracking-widest mb-1.5">Нийгмийн зорилго</p>
          <p className="text-xs font-semibold text-brand-charcoal/80">Олон хэлний гүүрээр дамжуулж ирээдүйн залуусыг чадваржуулах.</p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-end justify-center">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-serif italic text-brand-charcoal/50">Илтгэл дууслаа.</span>
            <div className="w-8 h-[1px] bg-brand-orange" />
          </div>
        </div>
      </footer>
    </section>
  );
}
