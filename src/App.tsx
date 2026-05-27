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
      <SlideNavigation />

      <main className="w-full">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <StatsSection />
        <FeaturesSection />
        <FlowSection />
        <WhyMechiSection />
        <VisionSection />
        <EndingSection />
      </main>
      <SlideProgress />
    </div>
  );
}
