import { useEffect, useState } from "react";
import { SLIDES_METADATA } from "../data/slides";

export default function SlideProgress() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null, // observation is calculated against the browser viewport
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% of the section is visible
    };

    const targetSections = SLIDES_METADATA.map((slide) =>
      document.getElementById(slide.id)
    );

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SLIDES_METADATA.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            setActiveIdx(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    targetSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      targetSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const progressPct = ((activeIdx + 1) / SLIDES_METADATA.length) * 100;
  const currentSlide = SLIDES_METADATA[activeIdx];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-none select-none">
      {/* Tiny slide deck background metadata line */}
      <div className="absolute left-8 bottom-6 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-charcoal/45 hidden sm:block">
        Mechi Стартап Илтгэл — Боловсролын Шинэчлэл
      </div>

      {/* Floating Presentation Slide Indicator Badge */}
      <div className="absolute right-8 bottom-6 flex items-center gap-4 bg-white/80 backdrop-blur-md border border-brand-beige py-2 px-4 rounded-full shadow-sm">
        <span className="font-mono text-xs text-brand-gold font-medium">СЛАЙД</span>
        <span className="font-mono text-xs font-bold text-brand-charcoal">
          {String(activeIdx + 1).padStart(2, "0")} <span className="text-brand-orange">/</span> {String(SLIDES_METADATA.length).padStart(2, "0")}
        </span>
        <span className="h-3 w-px bg-brand-beige"></span>
        <span className="font-display text-xs font-medium text-brand-charcoal uppercase tracking-wider">
          {currentSlide ? currentSlide.title : "Mechi"}
        </span>
      </div>

      {/* Discrete horizontal progress bar at the very bottom edge of the viewport */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-beige/25">
        <div
          className="h-full bg-brand-orange transition-all duration-700 ease-out rounded-r-full"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </div>
  );
}
