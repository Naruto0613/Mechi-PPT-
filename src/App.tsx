/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import FlowSection from "./components/FlowSection";
import WhyMechiSection from "./components/WhyMechiSection";
import VisionSection from "./components/VisionSection";
import EndingSection from "./components/EndingSection";
import SlideProgress from "./components/SlideProgress";
import SlideNavigation from "./components/SlideNavigation";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-cream overflow-x-hidden selection:bg-brand-orange/20 selection:text-brand-orange">
      {/* Slide Arrow and Side-Click navigation overlay */}
      <SlideNavigation />

      {/* Immersive subtle slide container */}
      <main className="w-full">
        {/* Slide 1 - Hero */}
        <HeroSection />

        {/* Slide 2 - Problem */}
        <ProblemSection />

        {/* Slide 3 - Solution */}
        <SolutionSection />

        {/* Slide 4 - Stats */}
        <StatsSection />

        {/* Slide 5 - Features */}
        <FeaturesSection />

        {/* Slide 6 - Learning Flow */}
        <FlowSection />

        {/* Slide 7 - Why Mechi */}
        <WhyMechiSection />

        {/* Slide 8 - Future Vision */}
        <VisionSection />

        {/* Slide 9 - Ending */}
        <EndingSection />
      </main>

      {/* Persistent Presentation slide-tracker (non-interactive) */}
      <SlideProgress />
    </div>
  );
}
