import { Hero } from "./home/components/hero/hero";
import { ProposalList } from "./home/components/proposal/list";
import { AmazingOfferCards } from "./home/components/proposal/amazingOfferCards";
import { CategoryList } from "./home/components/category/list";
import { BannerCollection } from "./home/components/collection/banner";
import { BestSelling } from "./home/components/best-selling/bestSelling";
import { Blog } from "./home/components/blog/blog";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 py-8 mt-[13%] bg-nutal-50">
      <Hero />
      <div dir="rtl" className="flex flex-col gap-y-15 px-30">
        <AmazingOfferCards />
        <CategoryList />
        <BannerCollection />
        <BestSelling />
        <Blog />
      </div>
    </div>
  );
}
