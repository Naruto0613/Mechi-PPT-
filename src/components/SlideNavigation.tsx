import { useEffect } from "react";
import { SLIDES_METADATA } from "../data/slides";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SlideNavigation() {
  const getCurrentIndex = () => {
    const scrollPosition = window.scrollY;
    const height = window.innerHeight;
    const index = Math.round(scrollPosition / height);
    return Math.max(0, Math.min(index, SLIDES_METADATA.length - 1));
  };

  const navigateTo = (index: number) => {
    if (index >= 0 && index < SLIDES_METADATA.length) {
      const el = document.getElementById(SLIDES_METADATA[index].id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    const currentIdx = getCurrentIndex();
    if (currentIdx < SLIDES_METADATA.length - 1) {
      navigateTo(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    const currentIdx = getCurrentIndex();
    if (currentIdx > 0) {
      navigateTo(currentIdx - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Invisible Hover Zone on Left */}
      <div
        id="nav-zone-left"
        className="fixed left-0 top-0 bottom-0 w-16 sm:w-24 z-40 flex items-center justify-start pl-4 cursor-pointer group select-none pointer-events-auto"
        onClick={handlePrev}
      >
        <div className="w-10 h-10 rounded-full bg-white/70 border border-brand-beige shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
          <ChevronLeft className="w-5 h-5 text-brand-orange" />
        </div>
      </div>

      {/* Invisible Hover Zone on Right */}
      <div
        id="nav-zone-right"
        className="fixed right-0 top-0 bottom-0 w-16 sm:w-24 z-40 flex items-center justify-end pr-4 cursor-pointer group select-none pointer-events-auto"
        onClick={handleNext}
      >
        <div className="w-10 h-10 rounded-full bg-white/70 border border-brand-beige shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ChevronRight className="w-5 h-5 text-brand-orange" />
        </div>
      </div>
    </>
  );
}
