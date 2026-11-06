/**@format */

import { mockHeaderLinks } from "../data/mockLayout";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import { HeaderMegaMenuTabs } from "./mega-menu/tabs";
import Link from "next/link";

export function HeaderLinks() {
  return (
    <div className="hidden lg:flex gap-x-6 bg-white px-[8%] py-5">
      {mockHeaderLinks.map((item) => (
        <div key={item.id}>
          {item.hover ? (
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center gap-x-2 cursor-pointer">
                  {item.icon}
                  <p
                    className={`text-sm xl:text-base ${item.color ? "text-primary border-l pl-5" : "text-gray-600"}`}
                  >
                    {item.title}
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <HeaderMegaMenuTabs />
              </HoverCardContent>
            </HoverCard>
          ) : (
            <Link href={item.href}>
              <div className="flex items-center gap-x-2 cursor-pointer">
                {item.icon}
                <p
                  className={`text-sm xl:text-base ${item.color ? "text-primary border-l pl-5" : "text-gray-600"}`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
