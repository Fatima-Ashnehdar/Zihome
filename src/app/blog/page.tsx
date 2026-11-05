/**@format */

import { AmazingBanner } from "./components/amazing-banner/amazingBanner";
import { LatestContent } from "./components/latest-content/latestContent";
import { LayoutBanner } from "./components/layoutBanner";
import { MostAttractive } from "./components/most-attractive/mostAttractive";
import { PictorialMagazine } from "./components/pictorial-magazine/pictorialMagazine";
import { BlogTitle } from "./components/title";

export default function BlogPage() {
  return (
    <div dir="rtl" className="py-8 px-30 mt-[13%] flex flex-col gap-y-8 bg-nutral-50">
      <BlogTitle />
      <div className="flex flex-col gap-y-12">
        <AmazingBanner />
        <div className="relative">
          <LatestContent />
          <MostAttractive />
        </div>
        <LayoutBanner />
        <PictorialMagazine />
      </div>
    </div>
  );
}
