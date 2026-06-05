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
  AlertCircle,
  Clock,
  Target,
  Volume2,
  Gift,
  Code2,
  Palette,
  GraduationCap,
} from "lucide-react";

export function ImagePlaceholder({
  text = "[ Screenshot энд орно ]",
  className = "",
  src,
}: {
  text?: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/55 bg-white group hover:shadow-2xl transition-all duration-300 ${className}`}
      >
        <div className="bg-stone-100 px-4 py-3 border-b border-stone-250/40 flex items-center gap-1.5 select-none shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 block"></span>
          <div className="mx-auto bg-stone-200/60 rounded-lg text-[11px] font-mono text-stone-500 py-0.5 px-6 max-w-xs truncate">
            https://mechi-xi.vercel.app
          </div>
        </div>
        <img
          src={src}
          alt={text}
          className="w-full h-auto object-cover block"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div
      id="placeholder-image"
      className={`border-3 border-dashed border-orange-500/70 bg-[#FFF7ED] rounded-3xl flex flex-col items-center justify-center min-h-[300px] p-8 text-center select-none shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-500 group relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 00-1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01 .75 0z"
            />
          </svg>
        </div>
        <div>
          <span className="block font-display font-black text-lg md:text-xl text-orange-600 tracking-wide mb-1 leading-snug">
            {text}
          </span>
          <span className="block text-xs font-mono text-orange-400 tracking-widest uppercase">
            Mechi Interactive Platform
          </span>
        </div>
      </div>

      <div className="absolute bottom-3 right-4 text-[10px] font-mono text-orange-400">
        mechi.mn
      </div>
    </div>
  );
}

function ScrollSection({
  children,
  className = "",
  id = "",
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

// Interactive mockup representing the Landing/Hero screenshot of Mechi (Image 1)
export function LandingHeroMockup() {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/60 text-stone-900 font-sans flex flex-col min-h-[450px]">
      {/* Browser tab header mock */}
      <div className="bg-stone-50 px-4 py-3 border-b border-stone-200/50 flex items-center gap-1.5 select-none shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 block shrink-0"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block shrink-0"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 block shrink-0"></span>
        <div className="mx-auto bg-stone-150/60 rounded-md text-[10px] font-mono text-stone-500 py-0.5 px-6 max-w-xs truncate">
          https://mechi-xi.vercel.app/home
        </div>
      </div>

      {/* Internal Mechi Layout header from Screenshot 1 */}
      <div className="border-b border-stone-100 px-4 py-3.5 flex items-center justify-between select-none bg-white">
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-orange-550 flex items-center justify-center font-display font-black text-white text-sm shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-250">
            <span className="text-sm select-none leading-none">🐼</span>
          </div>
          <span className="font-display font-extrabold text-sm tracking-tight text-orange-600">
            Mechi
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Flame status */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-bold text-orange-600 font-sans">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500/20" />
            <span>1 хоног</span>
          </div>
          {/* XP status */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-sky-50 border border-sky-100 rounded-full text-[10px] font-bold text-sky-600 font-sans">
            <Gem className="w-3.5 h-3.5 text-sky-500 fill-sky-500/20" />
            <span>145 XP</span>
          </div>
          {/* Circle stats */}
          <div className="w-5.5 h-5.5 rounded-full bg-orange-50 text-orange-600 font-black text-[10px] flex items-center justify-center">
            6
          </div>
          {/* User Icon */}
          <div className="w-6 h-6 rounded-full bg-stone-150/60 flex items-center justify-center text-stone-500 shrink-0">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          {/* Logout Icon */}
          <div className="w-6 h-6 rounded-full bg-stone-150/60 flex items-center justify-center text-stone-400 shrink-0">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main landing mock hero body */}
      <div className="p-6 md:p-10 flex flex-col justify-center flex-1 relative bg-gradient-to-tr from-white to-orange-50/25">
        <div className="max-w-md relative z-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-stone-900 leading-tight mb-4 tracking-tight">
            Хятад хэлийг <br />
            <span className="text-orange-500 font-black relative">
              сонирхолтойгоор
              <span className="absolute left-0 bottom-1 w-full h-2 bg-orange-500/10 -z-10 rounded"></span>
            </span>{" "}
            <br />
            сур
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8 font-sans">
            HSK шалгалтанд бэлдэх хамгийн хялбар, үр дүнтэй арга. Монгол хэлээр
            тайлбарласан хичээлүүд, тоглоом хэлбэрийн дасгалууд.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold font-display text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all cursor-pointer">
            <span>Одоо эхлэх</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Decorative background curve representing the organic flow */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[#FFF7ED] rounded-l-[120px] pointer-events-none border-l border-orange-100/30 opacity-60"></div>
      </div>
    </div>
  );
}

// Interactive mockup representing the Dashboard screenshot (Image 2)
export function DashboardMockup() {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/60 text-stone-900 font-sans flex flex-col min-h-[500px]">
      {/* Browser tab header mock */}
      <div className="bg-stone-50 px-4 py-3 border-b border-stone-200/50 flex items-center gap-1.5 select-none shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 block shrink-0"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block shrink-0"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 block shrink-0"></span>
        <div className="mx-auto bg-stone-200/50 rounded-md text-[10px] font-mono text-stone-500 py-0.5 px-6 max-w-xs truncate">
          https://mechi-xi.vercel.app/dashboard
        </div>
      </div>

      {/* Internal Mechi Layout header from Screenshot 2 */}
      <div className="border-b border-stone-100 px-4 py-3.5 flex flex-wrap items-center justify-between gap-3 select-none bg-white">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-orange-550 flex items-center justify-center font-display font-black text-white text-sm shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-250">
            <span className="text-sm select-none leading-none">🐼</span>
          </div>
          <span className="font-display font-extrabold text-sm tracking-tight text-orange-600">
            Mechi
          </span>
          <span className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1 font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            PREMIUM ИДЭВХТЭЙ
          </span>
        </div>
        <div className="flex items-center gap-2 font-sans text-[10px]">
          {/* Flame status */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-orange-50 border border-orange-100 rounded-full font-bold text-orange-600">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500/10" />
            <span>1 хоног</span>
          </div>
          {/* XP status */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 border border-sky-100 rounded-full font-bold text-sky-600">
            <Gem className="w-3.5 h-3.5 text-sky-500 fill-sky-500/10" />
            <span>145 XP</span>
          </div>
          {/* Circle stats */}
          <div className="w-5.5 h-5.5 rounded-full bg-orange-50 text-orange-600 font-extrabold text-[10px] flex items-center justify-center border border-orange-100 font-mono">
            6
          </div>
          {/* User Icon */}
          <div className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 shrink-0 transition-colors">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          {/* Logout Icon */}
          <div className="w-6 h-6 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-400 hover:text-red-500 shrink-0 transition-colors">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Premium active access banner from Screenshot 2 */}
      <div className="bg-emerald-50/40 border-b border-emerald-100 px-4 sm:px-6 py-2.5 flex justify-between items-center text-[10px] sm:text-xs text-emerald-800 font-medium select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0 animate-ping"></span>
          <span>СУРАЛЦАХ ЭРХ: ИДЭВХТЭЙ (PREMIUM)</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 text-stone-500">
          <svg
            className="w-3.5 h-3.5 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Хандалт 30 өдрийн дараа дуусна</span>
        </div>
      </div>

      {/* Dashboard workspace layout */}
      <div className="p-4 sm:p-6 bg-stone-50/50 flex-1 flex flex-col justify-center text-left select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full">
          {/* Welcome and Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Waving Greetings Card */}
            <div className="bg-white border border-stone-200/50 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 flex items-center gap-2">
                  Сайн байна уу, naranbadrakh!{" "}
                  <span className="inline-block animate-bounce select-none">
                    👋
                  </span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Күнзийн хэл сурах аялалаа үргэлжлүүлцгээе.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] uppercase font-mono font-bold">
                  <span className="px-2 py-0.5 bg-orange-50 border border-orange-100 rounded-md text-orange-600 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-550/10" />
                    1 өдөр
                  </span>
                  <span className="px-2 py-0.5 bg-amber-50 border border-amber-100 rounded-md text-amber-600 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    145 XP
                  </span>
                  <span className="px-2 py-0.5 bg-sky-50 border border-sky-100 rounded-md text-sky-600 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-sky-500" />
                    HSK 6
                  </span>
                </div>
              </div>

              {/* Daily Streak Index block on the right */}
              <div className="flex flex-col gap-1 items-start sm:items-end self-stretch sm:self-center shrink-0 border-t sm:border-t-0 border-stone-100 pt-3 sm:pt-0">
                <span className="text-[9px] uppercase font-mono tracking-wider text-stone-400">
                  Өдөр тутмын явц
                </span>
                <div className="flex gap-1 mt-1 font-mono">
                  {[1, 2, 3, 4, 5].map((dayNum) => (
                    <span
                      key={dayNum}
                      className="w-5 h-5 rounded bg-orange-50 text-orange-600 text-[10px] font-bold flex items-center justify-center"
                    >
                      {dayNum}
                    </span>
                  ))}
                  <span className="w-5.5 h-5.5 rounded bg-orange-500 text-white text-[10px] font-black flex items-center justify-center ring-2 ring-orange-500/20 shadow-sm animate-pulse">
                    6
                  </span>
                </div>
              </div>
            </div>

            {/* Core Modules 2x2 Style Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Module 1: Vocabulary */}
              <div className="bg-white border border-stone-200/50 p-4.5 rounded-xl flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 shadow-3xs">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-850">
                      Үгийн сан
                    </h4>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    HSK 6 түвшний шаардлагатай бүх үгс.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-50">
                  <div className="flex justify-between items-center text-[9px] font-mono font-bold text-stone-400 mb-1.5">
                    <span>СУРАЛЦАЖ БУЙ</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden font-mono">
                    <div className="w-0 h-full bg-orange-500 rounded-full transition-all"></div>
                  </div>
                </div>
              </div>

              {/* Module 2: Grammar */}
              <div className="bg-white border border-stone-200/50 p-4.5 rounded-xl flex flex-col justify-between shadow-box">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 shadow-3xs">
                      <PenTool className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-850">
                      Хэл зүй
                    </h4>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Дүрэм болон өгүүлбэрийн бүтэц.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-50 overflow-hidden">
                  <div className="flex justify-between items-center text-[9px] font-mono font-bold text-stone-400 mb-1.5">
                    <span>ЯВЦ</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden font-mono">
                    <div className="w-0 h-full bg-orange-500 rounded-full transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Split cards for listening and reading */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200/55 p-3.5 rounded-xl flex items-center justify-between shadow-2xs hover:bg-stone-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 shadow-3xs group-hover:scale-105 transition-transform">
                    <Headphones className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-stone-700">
                    Сонсгол
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 -rotate-90" />
              </div>

              <div className="bg-white border border-stone-200/55 p-3.5 rounded-xl flex items-center justify-between shadow-2xs hover:bg-stone-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 shadow-3xs group-hover:scale-105 transition-transform">
                    <BookOpenCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-stone-700">
                    Унших
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 -rotate-90" />
              </div>
            </div>
          </div>

          {/* Right Column sidebar mock widget */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Daily Tip Widget */}
            <div className="bg-white border border-stone-200/50 p-4 rounded-2xl shadow-sm">
              <h4 className="text-xs font-black text-stone-800 flex items-center gap-2 pb-2 border-b border-stone-100 mb-3 uppercase tracking-wide">
                <div className="w-5 h-5 rounded-md bg-amber-50 flex items-center justify-center text-amber-500 font-bold shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/10 animate-pulse" />
                </div>
                <span>Өдрийн зөвлөгөө</span>
              </h4>
              <p className="text-[11px] text-stone-500 italic py-2">
                Өнөөдөртөө зөвлөгөө алга байна.
              </p>
            </div>

            {/* Mini Leaderboard redirect card */}
            <div className="bg-stone-900 border border-stone-950 p-5 rounded-2xl text-white shadow-md flex flex-col justify-between flex-1">
              <div>
                <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest font-mono">
                  Лидерүүдийн самбар
                </span>
                <p className="text-[11px] text-stone-400 mt-2 leading-relaxed">
                  Бусадтай өрсөлдөн оноогоо ахиулж, урам зориг авч суралцаарай.
                </p>
              </div>
              <button className="w-full bg-stone-800 hover:bg-stone-750 text-orange-400 font-bold font-display text-[10px] py-2.5 rounded-xl mt-6 flex items-center justify-center gap-1 transition-colors cursor-pointer">
                <span>Шалгах</span>
                <ArrowRight className="w-3 h-3 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive mockup representing the Leaders page screenshot (Image 3)
export function LeaderboardMockup() {
  const leadersList = [
    {
      rank: "🥇",
      name: "naranbadrakh",
      badge: "KING",
      xp: "+145",
      isSelf: true,
    },
    { rank: "🥈", name: "asfdxcc", xp: "+0", isSelf: false },
    { rank: "🥉", name: "Naranbadrakh", xp: "+0", isSelf: false },
    { rank: "#4", name: "Sjsjsbdb", xp: "+0", isSelf: false },
    { rank: "#5", name: "Naranbadrakh", xp: "+0", isSelf: false },
  ];

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/60 text-stone-900 font-sans flex flex-col min-h-[500px]">
      {/* Browser tab header mock */}
      <div className="bg-stone-50 px-4 py-3 border-b border-stone-200/50 flex items-center gap-1.5 select-none shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 block shrink-0"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block shrink-0"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 block shrink-0"></span>
        <div className="mx-auto bg-stone-200/50 rounded-md text-[10px] font-mono text-stone-500 py-0.5 px-6 max-w-xs truncate">
          https://mechi-xi.vercel.app/leaderboard
        </div>
      </div>

      {/* Internal Mechi Layout header */}
      <div className="border-b border-stone-100 px-4 py-3.5 flex items-center justify-between select-none bg-white shrink-0">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-orange-550 flex items-center justify-center font-display font-black text-white text-sm shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-250">
            <span className="text-sm select-none leading-none">🐼</span>
          </div>
          <span className="font-display font-extrabold text-sm tracking-tight text-orange-600">
            Mechi
          </span>
          <span className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
            ● PREMIUM ИДЭВХТЭЙ
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px]">
          {/* Flame status */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-orange-50 border border-orange-100 rounded-full text-orange-600 font-sans font-bold">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500/10" />
            <span>1 хоног</span>
          </div>
          {/* XP status */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-sky-50 border border-sky-100 rounded-full text-sky-600 font-sans font-bold">
            <Gem className="w-3.5 h-3.5 text-sky-500 fill-sky-500/10" />
            <span>145 XP</span>
          </div>
          {/* Circle stats */}
          <div className="w-5.5 h-5.5 rounded-full bg-orange-50 text-orange-600 font-extrabold text-[10px] flex items-center justify-center border border-orange-105 font-mono">
            6
          </div>
        </div>
      </div>

      {/* Leaderboard layout body from Screenshot 3 */}
      <div className="p-4 sm:p-8 bg-stone-50/50 flex-1 flex flex-col justify-center items-center select-none text-left w-full">
        <div className="w-full max-w-md">
          {/* Header breadcrumb back link */}
          <div className="flex items-center justify-between mb-5 select-none w-full">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-light text-stone-400 hover:text-stone-700 cursor-pointer transition-colors">
                &lsaquo;
              </span>
              <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
                {" "}
                Лидерүүд
              </h3>
            </div>

            {/* Current week orange active pill */}
            <span className="bg-orange-500/10 text-orange-600 text-[9px] font-bold px-3 py-1 rounded-full border border-orange-500/10">
              ЭНЭ ДОЛОО ХОНОГ
            </span>
          </div>

          {/* Leaders list from Screenshot 3 */}
          <div className="bg-white border border-stone-200/50 rounded-2xl shadow-sm overflow-hidden divide-y divide-stone-100 w-full">
            {leadersList.map((leader, i) => (
              <div
                key={i}
                className={`p-4 flex items-center justify-between gap-4 transition-all duration-200 ${
                  leader.isSelf ? "bg-orange-50/20" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Gold/Silver/Bronze column indicator */}
                  <div className="w-8 flex justify-center shrink-0">
                    {leader.rank === "🥇" ? (
                      <span className="w-6 h-6 rounded-full bg-amber-400 text-white font-extrabold text-[11px] flex items-center justify-center shadow-xs select-none">
                        1
                      </span>
                    ) : leader.rank === "🥈" ? (
                      <span className="w-6 h-6 rounded-full bg-stone-300 text-stone-850 font-extrabold text-[11px] flex items-center justify-center shadow-xs select-none">
                        2
                      </span>
                    ) : leader.rank === "🥉" ? (
                      <span className="w-6 h-6 rounded-full bg-orange-400 text-white font-extrabold text-[11px] flex items-center justify-center shadow-xs select-none">
                        3
                      </span>
                    ) : (
                      <span className="text-stone-400 font-mono font-bold text-xs">
                        {leader.rank}
                      </span>
                    )}
                  </div>

                  {/* Competitor detail info */}
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-xs ${leader.isSelf ? "text-stone-950 font-extrabold" : "text-stone-600 font-semibold"}`}
                      >
                        {leader.name}
                      </span>
                      {leader.badge && (
                        <span className="bg-orange-550 text-white text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded leading-none shadow-3xs">
                          {leader.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] text-stone-400 uppercase tracking-wider mt-0.5 font-sans font-semibold">
                      долоо хоногийн xp
                    </p>
                  </div>
                </div>

                {/* Score value right column */}
                <span
                  className={`font-mono text-xs sm:text-sm font-bold shrink-0 ${
                    leader.isSelf
                      ? "text-orange-600 font-extrabold"
                      : "text-stone-500"
                  }`}
                >
                  {leader.xp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MechiPresentation() {
  // Custom Keyboard Arrow Navigation Engine
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const sectionIds = [
          "hero",
          "problem",
          "features",
          "math",
          "hsk",
          "gamification",
          "portfolio",
          "pricing",
          "closing",
        ];
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
          const currentRect =
            sections[closestSectionIndex].getBoundingClientRect();
          // If the current section's top is scrolled past our screen border, first align back to top of current section
          if (currentRect.top < -60) {
            targetIndex = closestSectionIndex;
          } else {
            targetIndex = Math.max(closestSectionIndex - 1, 0);
          }
        }

        e.preventDefault();
        sections[targetIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id="presentation-root"
      className="min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden select-none selection:bg-orange-500 selection:text-white"
    >
      {/* SECTION 1 - HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
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
              <span className="text-orange-500 underline decoration-orange-500/25 decoration-8 underline-offset-8">
                хэзээ ч энэ хялбар
              </span>{" "}
              <br />
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
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0 select-none font-display text-xs font-black tracking-tighter">
                  FREE
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                    Туршилт
                  </span>
                  <span className="font-bold text-stone-850 text-sm">
                    1 өдрийн үнэгүй туршилт
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white border border-stone-150 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0 select-none">
                  <Gem className="w-5 h-5 text-orange-500 fill-orange-500/15" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                    Төлбөр
                  </span>
                  <span className="font-bold text-stone-850 text-sm">
                    Сард 15,000₮
                  </span>
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
              <LandingHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section
        id="problem"
        className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-24"
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">
                Хүндрэлүүд
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight mb-12 text-white">
                Хятад хэл сурах гэж оролдсон уу?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <HelpCircle className="w-6 h-6 text-orange-500" />,
                  text: "Хаанаас эхлэхээ мэдэхгүй",
                  desc: "Уг залгамж холбоогүй, замбараагүй материал дундаас зөвийг олох гэж цаг алдах",
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-orange-500" />,
                  text: "Монголоор тайлбарласан материал байдаггүй",
                  desc: "Англи эсвэл Орос хэл дээрээс дамжуулан адармаатай хэл зүйг ойлгох гэсэн тархины ачаалал",
                },
                {
                  icon: <Clock className="w-6 h-6 text-orange-500" />,
                  text: "Хэт их цаг, мөнгө зарцуулдаг",
                  desc: "Үнэтэй сургалтын төв эсвэл хувийн багшид асар өндөр төлбөр төлж, хуваарьт хашигдах",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-stone-900/60 backdrop-blur-xs border border-stone-800 p-8 rounded-3xl hover:border-orange-500/40 transition-all duration-300 shadow-lg group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-250">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                    "{item.text}"
                  </h3>
                  <p className="text-stone-400 text-lg leading-relaxed">
                    {item.desc}
                  </p>
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

      {/* SECTION 3 - FEATURES */}
      <section
        id="features"
        className="min-h-screen flex items-center py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="mb-14">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-bold block mb-3">
                Онцлогууд
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-stone-950 tracking-tight leading-tight mb-4">
                Зөвхөн үг тогтоохоос илүү
              </h2>
              <p className="text-lg md:text-xl text-stone-600 font-sans max-w-3xl leading-relaxed">
                Хятад хэлэнд ижил үг өөр өөр утгатай байж болно —{" "}
                <span className="text-orange-500 font-bold">
                  Mechi дүрмийг монголоор заана
                </span>
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
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">
                    Flashcards
                  </span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  150-с 5000 хүртэлх үгийг монгол орчуулгатай flashcard
                  хэлбэрээр тогтоо. Байрлалаа хадгалж, хаанаас зогссоноо
                  үргэлжлүүл.
                </p>
              </div>

              {/* Feature 2 — Grammar */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Хэл зүй</span>
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">
                    Граматик
                  </span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Дүрмийг монголоор тайлбарлан жишээ өгүүлбэрээр заана. HSK
                  түвшин бүрт 10+ дүрмийн хичээл.
                </p>
              </div>

              {/* Feature 3 — Listening */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Сонсгол</span>
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">
                    Сонсох дадлага
                  </span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Хятад яриа сонсоод ойлгосноо монголоор шалга. HSK түвшин бүрт
                  10+ дасгал.
                </p>
              </div>

              {/* Feature 4 — Reading */}
              <div className="bg-white border border-stone-200/60 p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-sm relative group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 shadow-inner">
                  <BookOpenCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-stone-900 mb-4 flex items-center gap-2">
                  <span>Унших</span>
                  <span className="text-xs bg-orange-100 text-orange-850 px-2 py-0.5 rounded font-mono font-bold">
                    Орчуулга харах
                  </span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  HSK түвшинд тохирсон текст уншиж дадлага хий. Монгол орчуулга
                  нуугдмал байдлаар харах боломжтой.
                </p>
              </div>
            </div>

            {/* Stunning full interactive dashboard mockup rendering */}
            <div>
              <DashboardMockup />
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 4 - THE MATH */}
      <section
        id="math"
        className="min-h-screen flex items-center py-24 bg-stone-50"
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-bold block mb-3">
                Бүтээмж
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-stone-950 tracking-tight leading-none">
                Өдөрт 5 үг тогтооход л хангалттай
              </h2>
            </div>

            {/* Calculations formula visualization / Bento style math representation */}
            <div className="bg-white border border-stone-150 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center shadow-sm max-w-4xl mx-auto mb-16 relative">
              <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-orange-100 text-orange-850 px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wide uppercase shadow-sm">
                Математик тооцоолол
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-1">
                  Өдөрт
                </span>
                <span className="text-4xl md:text-6xl font-black font-display text-orange-500">
                  5 үг
                </span>
              </div>
              <div className="text-stone-300 font-display text-3xl md:text-5xl font-light">
                ×
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest mb-1">
                  Хугацаа
                </span>
                <span className="text-4xl md:text-6xl font-black font-display text-stone-900">
                  30 өдөр
                </span>
              </div>
              <div className="text-stone-300 font-display text-3xl md:text-5xl font-light">
                =
              </div>
              <div className="flex flex-col items-center bg-orange-500 text-white px-8 py-5 rounded-2xl shadow-lg shadow-orange-500/15 group hover:scale-[1.03] transition-transform duration-300">
                <span className="text-xs font-mono text-orange-100 uppercase tracking-widest mb-1">
                  Нийт
                </span>
                <span className="text-4xl md:text-6xl font-black font-display">
                  150 үг
                </span>
              </div>
            </div>

            {/* Milestone Timeline section */}
            <div className="relative mb-16">
              {/* Line Connector on Desktop */}
              <div className="hidden md:block absolute top-[44px] left-10 right-10 h-0.5 border-t-2 border-dashed border-orange-200 -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    month: "1-р сар",
                    level: "HSK 1",
                    words: "150 үг",
                    color: "bg-orange-50 border-orange-200 text-orange-600",
                  },
                  {
                    month: "2-р сар",
                    level: "HSK 2",
                    words: "300 үг",
                    color: "bg-orange-100 border-orange-300 text-orange-700",
                  },
                  {
                    month: "4-р сар",
                    level: "HSK 3",
                    words: "600 үг",
                    color: "bg-orange-500 border-orange-600 text-white",
                  },
                  {
                    month: "8-р сар",
                    level: "HSK 4",
                    words: "1200 үг",
                    color: "bg-stone-900 border-stone-950 text-white",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-white border border-stone-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative group"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-xs ${
                        step.color.includes("text-white")
                          ? "bg-orange-500 text-white"
                          : "bg-orange-50 border border-orange-100 text-orange-500"
                      }`}
                    >
                      <Target className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">
                      {step.month}
                    </span>
                    <h4 className="text-2xl font-black font-display text-stone-950 mt-1">
                      {step.level}
                    </h4>
                    <span className="text-orange-500 font-extrabold text-lg mt-2 group-hover:scale-105 transition-transform">
                      {step.words}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/50 border border-orange-500/10 p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 select-none">
                <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
              </div>
              <p className="text-lg sm:text-xl lg:text-xl font-bold font-display text-stone-900 leading-relaxed text-left sm:text-center">
                Өдөр бүр{" "}
                <span className="text-orange-500 font-black border-b-2 border-orange-500">
                  5 минут
                </span>{" "}
                зарцуулбал 1 жилд HSK 4 түвшинд хүрнэ.
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION — HSK ШИНЭЧЛЭЛ */}
      <section
        id="hsk"
        className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-24 relative overflow-hidden"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">
                Технологийн шинэчлэл
              </span>
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
                      "Үгийн сан, Хэл зүй, Сонсгол, Унших",
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
                <div className="absolute top-5 right-5 bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3.5 py-1 rounded-full text-xs font-black font-mono tracking-widest uppercase flex items-center gap-1.5 animate-pulse">
                  <span>ТУН УДАХГҮЙ</span>
                  <Sparkles className="w-3 h-3 text-orange-400" />
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
                      "Бүх шинэ контент автоматаар нэмэгдэнэ",
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

            <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 select-none">
                <Volume2 className="w-5 h-5 text-orange-500 fill-orange-500/10 animate-bounce" />
              </div>
              <p className="text-lg sm:text-xl lg:text-xl font-bold font-display text-stone-200 leading-relaxed">
                HSK 3.0 garaхад Mechi автоматаар шинэчлэгдэнэ. Та нэмэлт
                төлбөргүйгээр шинэ контентыг ашиглах боломжтой.
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 5 - GAMIFICATION */}
      <section
        id="gamification"
        className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-24"
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">
                Урамшуулал
              </span>
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
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                  Streak
                </h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xs">
                  Өдөр бүр суралцаж streak-ээ хадгал
                </p>
              </div>

              {/* Gamification Column 2 — XP */}
              <div className="bg-stone-900/60 border border-stone-850 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:border-orange-500/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center text-4xl mb-6 shadow-inner ring-4 ring-orange-500/5">
                  <Gem className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                  XP
                </h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xs">
                  Хичээл бүрт оноо цуглуул
                </p>
              </div>

              {/* Gamification Column 3 — Rating */}
              <div className="bg-stone-900/60 border border-stone-850 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:border-orange-500/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center text-4xl mb-6 shadow-inner ring-4 ring-orange-500/5">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                  Rating
                </h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xs">
                  Бусад сурагчидтай өрсөлд
                </p>
              </div>
            </div>

            {/* Stunning full interactive leaderboard mockup rendering */}
            <div>
              <LeaderboardMockup />
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 5.5 - PORTFOLIO & ACHIEVEMENTS */}
      <section
        id="portfolio"
        className="bg-[#141414] text-white min-h-screen flex items-center py-24 relative overflow-hidden border-t border-stone-850/50"
      >
        {/* Subtle orange glow in corner */}
        <div className="absolute top-[-20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
          <ScrollSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-500 font-bold block mb-3">
                Сурсан чадварууд
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tight leading-none">
                Мэдлэгээс бодит бүтээл рүү
              </h2>
              <p className="text-lg md:text-xl text-stone-400 mt-5 max-w-2xl mx-auto leading-relaxed">
                9-р сараас хойш олж авсан мэдлэг, чадвараа нэгтгэн{" "}
                <span className="text-orange-500 font-extrabold font-display">
                  Mechi
                </span>{" "}
                платформыг бүтээв.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 - Software Development */}
              <div className="bg-stone-900/40 backdrop-blur-xs border border-stone-850/70 p-8 md:p-10 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-250">
                  <Code2 className="w-7 h-7 text-orange-550" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-1 tracking-tight">
                  PROG & SOFTWARE
                </h3>
                <span className="text-xs font-mono font-bold tracking-widest text-orange-500 block">
                  Програм хангамж
                </span>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-4">
                  Кодлох чадвараараа Mechi-ийн интерактив интерфэйс, XP & Streak
                  болон лидерүүдийн самбарын логикийг бүрэн бүтээв.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "TypeScript", "Tailwind CSS", "Local State"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="text-xs uppercase font-mono font-bold px-3 py-1 bg-stone-800 text-stone-300 rounded-lg"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Card 2 - Graphic Design */}
              <div className="bg-stone-900/40 backdrop-blur-xs border border-stone-850/70 p-8 md:p-10 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-250">
                  <Palette className="w-7 h-7 text-orange-550" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-1 tracking-tight">
                  GRAPHIC DESIGN
                </h3>
                <span className="text-xs font-mono font-bold tracking-widest text-orange-500 block">
                  График дизайн / UI/UX
                </span>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-4">
                  Хэрэглэгчийн аяллыг илүү сонирхолтой, ойлгомжтой болгох дулаан
                  өнгө аястай UI/UX дизайнерын шийдлийг боловсруулав.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Visual Brand", "Typography", "Colors", "UI Layout"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="text-xs uppercase font-mono font-bold px-3 py-1 bg-stone-800 text-stone-300 rounded-lg"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Card 3 - Chinese */}
              <div className="bg-stone-900/40 backdrop-blur-xs border border-stone-850/70 p-8 md:p-10 rounded-3xl hover:border-orange-500/30 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-250">
                  <GraduationCap className="w-7 h-7 text-orange-550" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-1 tracking-tight">
                  CHINESE LESSONS
                </h3>
                <span className="text-xs font-mono font-bold tracking-widest text-orange-500 block">
                  Хятад хэл сургалт
                </span>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-4">
                  Хэлний суурь болон дүрмийн мэдлэгтээ тулгуурлан хэрэглэгчдэд
                  зориулсан монгол тайлбартай шинэлэг дасгалуудыг бэлтгэв.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "HSK 1-6",
                    "Grammar Hub",
                    "Listening Practise",
                    "Flashcards",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs uppercase font-mono font-bold px-3 py-1 bg-stone-800 text-stone-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-stone-900/50 border border-stone-800 p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-450 shrink-0 select-none">
                <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
              </div>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
                Олж авсан мэдлэгээ бодит ажил болгож, сурагчдад хятад хэлийг
                сонирхолтойгоор сурахад туслах{" "}
                <span className="text-white font-extrabold">Mechi</span>{" "}
                аппликэйшнийг бүтээлээ.
              </p>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* SECTION 6 - PRICING */}
      <section
        id="pricing"
        className="min-h-screen flex items-center py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <ScrollSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-orange-600 font-bold block mb-3">
                Тариф
              </span>
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
                    <span className="text-stone-500 text-lg font-medium ml-2">
                      хугацаа
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10 text-lg">
                    {[
                      "Бүх хичээлүүд нээлттэй",
                      "Нэн даруй эхлэх",
                      "Карт шаардлагагүй",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-stone-600"
                      >
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
                    <span className="text-orange-100 text-lg font-medium ml-2">
                      /сар
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10 text-lg">
                    {[
                      "HSK 1-6 бүх түвшин",
                      "Үгийн сан + Хэл зүй",
                      "Сонсгол + Унших",
                      "XP & Streak систем",
                      "Рейтинг самбар",
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
      <section
        id="closing"
        className="min-h-screen flex flex-col justify-center py-24 bg-[#1a1a1a] text-white relative overflow-hidden"
      >
        {/* Extra glowing ambient orange lights in dark background */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-500/5 blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
          <ScrollSection>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <motion.h2 className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-white mb-6 leading-none">
                Өнөөдөр эхэл.
              </motion.h2>
              <p className="text-2xl sm:text-3xl text-orange-500 font-display font-medium tracking-tight mb-4">
                mechi-xi.vercel.app
              </p>
              <p className="text-stone-400 text-lg sm:text-xl font-sans max-w-xl mx-auto">
                Утсаараа QR кодыг уншуулан хятад хэл сурах аяллаа шууд
                эхлүүлээрэй
              </p>
            </div>

            {/* Stunning QR Code displaying the specified mechi-xi.vercel.app domain */}
            <div className="flex justify-center items-center">
              <div
                id="qr-container"
                className="bg-white p-8 rounded-4xl shadow-2xl shadow-orange-500/10 border-2 border-orange-500 flex flex-col items-center gap-4 hover:scale-[1.03] transition-transform duration-300 max-w-md"
              >
                <div className="relative p-2 bg-white rounded-2xl">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https://mechi-xi.vercel.app&color=1a1a1a"
                    alt="Mechi QR Code link to mechi-xi.vercel.app"
                    className="w-80 h-80 sm:w-96 sm:h-96 select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-orange-500"></div>
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-orange-500"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-orange-500"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-orange-500"></div>
                </div>
                <div className="text-center font-mono text-stone-900">
                  <p className="text-sm font-bold tracking-tight uppercase text-stone-500">
                    Албан ёсны сайт
                  </p>
                  <p className="text-base font-extrabold text-orange-600 mt-0.5">
                    mechi-xi.vercel.app
                  </p>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
}
