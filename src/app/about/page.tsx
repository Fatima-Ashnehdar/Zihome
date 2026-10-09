/**@format */

import { AboutFeatures } from "./components/features";
import { AboutGoals } from "./components/goals";
import { AboutHero } from "./components/hero";
import { AboutMap } from "./components/map";
import { AboutStory } from "./components/story";

export default function AboutPage() {
  return (
    <div dir="rtl" className="py-8 mt-[11%] flex flex-col gap-y-10 bg-nutral-50">
      <AboutHero />
      <div className="flex flex-col gap-y-16 px-30">
        <AboutStory />
        <AboutFeatures />
        <AboutMap />
        <AboutGoals />
      </div>
    </div>
  );
}
