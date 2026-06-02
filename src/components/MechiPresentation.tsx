import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  BookOpen, 
  Sparkles, 
  ChevronDown, 
  Flame, 
  Gem, 
  Trophy, 
  ArrowRight, 
  Check, 
  Play, 
  Headphones, 
  BookOpenCheck, 
  PenTool, 
  HelpCircle,
  AlertCircle
} from "lucide-react";

// Image Placeholder component conforming to parameters:
// - dashed orange border
// - light orange background (#FFF7ED)
// - min height 300px
// - centered text "[ Screenshot энд орно ]" in orange
export function ImagePlaceholder({ text = "[ Screenshot энд орно ]", className = "" }: { text?: string; className?: string }) {
  return (
    <div
      id="placeholder-image"
      className={`border-3 border-dashed border-orange-500/70 bg-[#FFF7ED] rounded-3xl flex flex-col items-center justify-center min-h-[300px] p-8 text-center select-none shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-500 group relative overflow-hidden ${className}`}
    >
      {/* Premium subtle mesh grid decoration for "WOW" effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01 .75 0z" />
          </svg>
        </div>
        <div>
          <span className="block font-display font-black text-lg md:text-xl text-orange-600 tracking-wide mb-1 leading-snug">{text}</span>
          <span className="block text-xs font-mono text-orange-400 tracking-widest uppercase">Mechi Interactive Platform</span>
        </div>
      </div>
      
      <div className="absolute bottom-3 right-4 text-[10px] font-mono text-orange-400">mechi.mn</div>
    </div>
  );
}

// Fade in and slide up transition component powered by useInView
function ScrollSection({ 
  children, 
  className = "", 
  id = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MechiPresentation() {
  // Custom Keyboard Arrow Navigation Engine
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const sectionIds = ["hero", "problem", "math", "features", "hsk", "gamification", "pricing", "closing"];
        const sections = sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean) as HTMLElement[];

        if (sections.length === 0) return;

        // Find the section that occupies most viewport space or is currently closest to viewport top
        let closestSectionIndex = 0;
        let minDistance = Infinity;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSectionIndex = index;
          }
        });

        let targetIndex = closestSectionIndex;

        if (e.key === "ArrowDown") {
          targetIndex = Math.min(closestSectionIndex + 1, sections.length - 1);
        } else if (e.key === "ArrowUp") {
          const currentRect = sections[closestSectionIndex].getBoundingClientRect();
          // If the current section's top is scrolled past our screen border, first align back to top of current section
          if (currentRect.top < -60) {
            targetIndex = closestSectionIndex;
          } else {
            targetIndex = Math.max(closestSectionIndex - 1, 0);
          }
        }

        e.preventDefault();
        sections[targetIndex].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="presentation-root" className="min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden select-none selection:bg-orange-500 selection:text-white">
      {/* SECTION 1 - HERO */}
      <section id="hero" className="relative min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column (Details) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full border border-orange-150/50 mb-6 w-fit"
            >
              <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
              <span>Шинэ үеийн ухаалаг сургалт</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-stone-950 leading-[1.1] mb-6"
            >
              Хятад хэл сурах нь <br />
              <span className="text-orange-500 underline decoration-orange-500/25 decoration-8 underline-offset-8">хэзээ ч энэ хялбар</span> <br />
              байгаагүй
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-600 leading-relaxed font-sans mb-8 max-w-lg"
            >
              Mechi — Монголчуудад зориулсан цорын ганц хятад хэлний платформ
            </motion.p>

            {/* Twin badges with large readable font, premium shadows */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="flex items-center gap-3 bg-white border border-stone-150 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl">🆓</span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-mono tracking-wider text-stone-400">Туршилт</span>
                  <span className="font-bold text-stone-800 text-lg">1 өдрийн үнэгүй туршилт</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white border border-stone-150 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl">💎</span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-mono tracking-wider text-stone-400">Төлбөр</span>
                  <span className="font-bold text-stone-800 text-lg">Сард 15,000₮</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 text-stone-500 text-sm font-sans"
            >
              <span className="animate-bounce">
                <ChevronDown className="w-5 h-5 text-orange-500" />
              </span>
              <span>Доош гүйлгэж дэлгэрэнгүйг үзэх</span>
            </motion.div>
          </div>

          {/* Right Column (Large image placeholder taking half screen width) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative shadow-2xl rounded-3xl overflow-hidden"
            >
              {/* Extra styling layer to make it look outstanding */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-25">
                <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
                <span className="w-3 h-3 rounded-full bg-green-400 block"></span>
              </div>
              <ImagePlaceholder text="[ Screenshot энд орно ]" className="min-h-[400px] lg:min-h-[500px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section id="problem" className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">Хүндрэлүүд</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight mb-12 text-white">
                Хятад хэл сурах гэж оролдсон уу?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { emoji: "😓", text: "Хаанаас эхлэхээ мэдэхгүй", desc: "Уг залгамж холбоогүй, замбараагүй материал дундаас зөвийг олох гэж цаг алдах" },
                { emoji: "📚", text: "Монголоор тайлбарласан материал байдаггүй", desc: "Англи эсвэл Орос хэл дээрээс дамжуулан адармаатай хэл зүйг ойлгох гэсэн тархины ачаалал" },
                { emoji: "⏰", text: "Хэт их цаг, мөнгө зарцуулдаг", desc: "Үнэтэй сургалтын төв эсвэл хувийн багшид асар өндөр төлбөр төлж, хуваарьт хашигдах" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-stone-900 border border-stone-800 p-8 rounded-3xl hover:border-orange-500/40 transition-colors shadow-lg"
                >
                  <div className="text-5xl mb-6">{item.emoji}</div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    "{item.text}"
                  </h3>
                  <p className="text-stone-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-orange-500 tracking-tight">
                Mechi үүнийг бүгдийг шийдлээ.
              </p>
              <div className="flex items-center gap-2 text-stone-400 font-mono text-sm uppercase tracking-widest">
                <span>Яг одоо шийдэл рүү</span>
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 3 - THE MATH */}
      <section id="math" className="min-h-screen flex items-center py-24 bg-white">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-bold block mb-3">Бүтээмж</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-stone-950 tracking-tight leading-none">
                Өдөрт 5 үг тогтооход л хангалттай
              </h2>
            </div>

            {/* Calculations formula visualization / Bento style math representation */}
            <div className="bg-stone-50 border border-stone-150 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center shadow-sm max-w-4xl mx-auto mb-16 relative">
              <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-orange-100 text-orange-850 px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wide uppercase shadow-sm">
                Математик тооцоолол
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-1">Өдөрт</span>
                <span className="text-4xl md:text-6xl font-black font-display text-orange-500">5 үг</span>
              </div>
              <div className="text-stone-300 font-display text-3xl md:text-5xl font-light">×</div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-1">Хугацаа</span>
                <span className="text-4xl md:text-6xl font-black font-display text-stone-900">30 өдөр</span>
              </div>
              <div className="text-stone-300 font-display text-3xl md:text-5xl font-light">=</div>
              <div className="flex flex-col items-center bg-orange-500 text-white px-8 py-5 rounded-2xl shadow-lg shadow-orange-500/15 group hover:scale-[1.03] transition-transform duration-300">
                <span className="text-xs font-mono text-orange-100 uppercase tracking-widest mb-1">Нийт</span>
                <span className="text-4xl md:text-6xl font-black font-display">150 үг</span>
              </div>
            </div>

            {/* Milestone Timeline section */}
            <div className="relative mb-16">
              {/* Line Connector on Desktop */}
              <div className="hidden md:block absolute top-[44px] left-10 right-10 h-0.5 border-t-2 border-dashed border-orange-200 -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { month: "1-р сар", level: "HSK 1", words: "150 үг", color: "bg-orange-50 border-orange-200 text-orange-600" },
                  { month: "2-р сар", level: "HSK 2", words: "300 үг", color: "bg-orange-100 border-orange-300 text-orange-700" },
                  { month: "4-р сар", level: "HSK 3", words: "600 үг", color: "bg-orange-500 border-orange-600 text-white" },
                  { month: "8-р сар", level: "HSK 4", words: "1200 үг", color: "bg-stone-900 border-stone-950 text-white" }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-stone-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative group"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm font-bold ${
                      step.color.includes("bg-orange-50500") ? "bg-orange-500 text-white" : step.color.split(" ")[0] + " " + step.color.split(" ")[2]
                    }`}>
                      🎯
                    </div>
                    <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">{step.month}</span>
                    <h4 className="text-2xl font-black font-display text-stone-950 mt-1">{step.level}</h4>
                    <span className="text-orange-500 font-extrabold text-lg mt-2 group-hover:scale-105 transition-transform">{step.words}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center rounded-2xl bg-orange-50/50 border border-orange-500/10 p-6 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-stone-900 leading-relaxed">
                💡 Өдөр бүр <span className="text-orange-500 font-black border-b-2 border-orange-500">5 минут</span> зарцуулбал 1 жилд HSK 4 түвшинд хүрнэ.
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 4 - FEATURES */}
      <section id="features" className="min-h-screen flex items-center py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="mb-14">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-bold block mb-3">Онцлогууд</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
                Зөвхөн үг тогтоохоос илүү
              </h2>
              <p className="text-lg md:text-xl text-stone-600 font-sans max-w-3xl leading-relaxed">
                Хятад хэлэнд ижил үг өөр өөр утгатай байж болно — <span className="text-orange-500 font-bold">Mechi дүрмийг монголоор заана</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Feature 1 — Vocabulary */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Үгийн сан</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-mono font-bold">Flashcards</span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  150-с 5000 хүртэлх үгийг монгол орчуулгатай flashcard хэлбэрээр тогтоо. Байрлалаа хадгалж, хаанаас зогссоноо үргэлжлүүл.
                </p>
              </div>

              {/* Feature 2 — Grammar */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Хэл зүй</span>
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">Граматик</span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Дүрмийг монголоор тайлбарлан жишээ өгүүлбэрээр заана. HSK түвшин бүрт 10+ дүрмийн хичээл.
                </p>
              </div>

              {/* Feature 3 — Listening */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Сонсгол</span>
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">Сонсох дадлага</span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Хятад яриа сонсоод ойлгосноо монголоор шалга. HSK түвшин бүрт 10+ дасгал.
                </p>
              </div>

              {/* Feature 4 — Reading */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <BookOpenCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Унших</span>
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">Орчуулга харах</span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  HSK түвшинд тохирсон текст уншиж дадлага хий. Монгол орчуулга нуугдмал байдлаар харах боломжтой.
                </p>
              </div>
            </div>

            {/* Large image placeholder below the features grid */}
            <div>
              <ImagePlaceholder text="[ Screenshot энд орно ]" className="min-h-[350px] shadow-lg rounded-3xl" />
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION — HSK ШИНЭЧЛЭЛ */}
      <section id="hsk" className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-24 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">Технологийн шинэчлэл</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
                HSK 2.0 → HSK 3.0
              </h2>
              <p className="text-xl md:text-2xl text-orange-500 font-bold font-display mt-4">
                Mechi шинэчлэлд бэлэн!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {/* Left card (gray border, old) */}
              <div className="bg-stone-900 border-2 border-stone-800 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-lg relative">
                <div>
                  <h3 className="text-2xl font-bold font-display text-stone-300 mb-6 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-500"></span>
                    HSK 2.0 (Одоогийн)
                  </h3>
                  
                  <ul className="space-y-4 text-stone-400 text-lg">
                    {[
                      "HSK 1-6 түвшин",
                      "150 — 5000+ үг",
                      "Үгийн сан, Хэл зүй, Сонсгол, Унших"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center text-stone-500 text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right card (orange border, glowing, new) */}
              <div className="bg-[#222] border-2 border-orange-500/80 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-orange-500/5 relative overflow-hidden group hover:border-orange-500 transition-colors">
                <div className="absolute top-5 right-5 bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3.5 py-1 rounded-full text-xs font-black font-mono tracking-widest uppercase">
                  ТУН УДАХГҮЙ 🚀
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                    HSK 3.0 (Шинэ)
                  </h3>

                  <ul className="space-y-4 text-white text-lg">
                    {[
                      "HSK 1-9 түвшин",
                      "500 — 11092+ үг",
                      "Шинэ үгсийн сан нэмэгдэнэ",
                      "Жишиг шалгалт нэмэгдэнэ",
                      "Бүх шинэ контент автоматаар нэмэгдэнэ"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-550/20 flex items-center justify-center text-orange-400 text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center rounded-2xl bg-orange-500/10 border border-orange-500/20 p-8 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-stone-200 leading-relaxed">
                📢 HSK 3.0 гарахад Mechi автоматаар шинэчлэгдэнэ. Та нэмэлт төлбөргүйгээр шинэ контентыг ашиглах боломжтой.
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 5 - GAMIFICATION */}
      <section id="gamification" className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">Урамшуулал</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight">
                Суралцахад дуртай болгоно
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Gamification Column 1 — Streak */}
              <div className="bg-stone-900/60 border border-stone-850 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:border-orange-500/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center text-4xl mb-6 shadow-inner ring-4 ring-orange-500/5">
                  <Flame className="w-8 h-8 text-orange-500 fill-orange-500/20" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">Streak</h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xs">
                  Өдөр бүр суралцаж streak-ээ хадгал
                </p>
              </div>

              {/* Gamification Column 2 — XP */}
              <div className="bg-stone-900/60 border border-stone-850 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:border-orange-500/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center text-4xl mb-6 shadow-inner ring-4 ring-orange-500/5">
                  <Gem className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">XP</h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xs">
                  Хичээл бүрт оноо цуглуул
                </p>
              </div>

              {/* Gamification Column 3 — Rating */}
              <div className="bg-stone-900/60 border border-stone-850 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:border-orange-500/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center text-4xl mb-6 shadow-inner ring-4 ring-orange-500/5">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">Рейтинг</h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xs">
                  Бусад сурагчидтай өрсөлд
                </p>
              </div>
            </div>

            {/* Dashboard Screenshot placeholder below stats */}
            <div>
              <ImagePlaceholder text="[ Screenshot энд орно ]" className="min-h-[380px] bg-stone-900/40 border-dashed border-orange-500/40" />
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 6 - PRICING */}
      <section id="pricing" className="min-h-screen flex items-center py-24 bg-white">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-bold block mb-3">Тариф</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-stone-950 tracking-tight">
                Эхлэхэд юу ч хэрэггүй
              </h2>
            </div>

            {/* Two big pricing cards side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Left card — Free trial with white border */}
              <div className="bg-white border-2 border-stone-150 p-10 rounded-3xl flex flex-col justify-between shadow-sm relative hover:scale-[1.01] transition-all">
                <div>
                  <h3 className="text-2xl font-extrabold font-display text-stone-900 mb-6">
                    Үнэгүй туршилт
                  </h3>
                  <div className="mb-8">
                    <span className="text-5xl md:text-6xl font-black font-display text-stone-900 tracking-tight">
                      1 өдөр
                    </span>
                    <span className="text-stone-500 text-lg font-medium ml-2">хугацаа</span>
                  </div>

                  <ul className="space-y-4 mb-10 text-lg">
                    {[
                      "Бүх хичээлүүд нээлттэй",
                      "Нэн даруй эхлэх",
                      "Карт шаардлагагүй"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600">
                        <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold font-display text-lg py-4 rounded-2xl shadow-sm transition-colors mt-auto">
                  Туршиж эхлэх
                </button>
              </div>

              {/* Right card — Full access vibrant orange with white text */}
              <div className="bg-orange-500 text-white p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-orange-500/15 relative hover:scale-[1.01] transition-all overflow-hidden">
                {/* Popular Badge */}
                <div className="absolute top-5 right-5 bg-white text-orange-600 px-3.5 py-1 rounded-full text-xs font-black font-mono tracking-widest uppercase shadow-sm">
                  ИЛҮҮ АШИГТАЙ
                </div>
                
                <div>
                  <h3 className="text-2xl font-extrabold font-display text-white mb-6">
                    Бүтэн хандалт
                  </h3>
                  <div className="mb-8">
                    <span className="text-5xl md:text-6xl font-black font-display tracking-tight text-white">
                      15,000₮
                    </span>
                    <span className="text-orange-100 text-lg font-medium ml-2">/сар</span>
                  </div>

                  <ul className="space-y-4 mb-10 text-lg">
                    {[
                      "HSK 1-6 бүх түвшин",
                      "Үгийн сан + Хэл зүй",
                      "Сонсгол + Унших",
                      "XP & Streak систем",
                      "Рейтинг самбар"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-white hover:bg-stone-50 text-orange-600 font-bold font-display text-lg py-4 rounded-2xl shadow-md transition-colors mt-auto">
                  Одоо суралцах
                </button>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 7 - CLOSING */}
      <section id="closing" className="min-h-screen flex flex-col justify-center py-24 bg-stone-50 relative overflow-hidden">
        {/* Extra glowing ambient lights */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-100/40 blur-[130px] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-50/60 blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
          <ScrollSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.h2 
                className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-stone-950 mb-6 leading-none"
              >
                Өнөөдөр эхэл.
              </motion.h2>
              <p className="text-2xl sm:text-3xl text-orange-600 font-display font-medium tracking-tight mb-4">
                mechi.mn
              </p>
              <p className="text-xl sm:text-2xl text-stone-600 font-sans max-w-xl mx-auto">
                Хятад хэл сурах аяллаа эхлүүлээрэй
              </p>
            </div>

            {/* Bottom Large Image Placeholder */}
            <div className="max-w-5xl mx-auto">
              <ImagePlaceholder text="[ Screenshot энд орно ]" className="min-h-[400px] shadow-xl rounded-3xl" />
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Modern footer */}
      <footer id="system-footer" className="bg-stone-900 text-stone-500 py-12 px-6 border-t border-stone-850">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center font-display font-black text-white text-sm shadow-sm">M</span>
            <span className="font-display font-bold text-stone-100 text-lg">Mechi</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Mechi LLC. Монголчуудад зориулсан хятад хэл сурах платформ.
          </p>
          <div className="flex gap-4 text-sm">
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Ашиглах заавар</span>
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Үйлчилгээний нөхцөл</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
