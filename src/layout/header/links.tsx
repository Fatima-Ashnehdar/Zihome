/**@format */

import { mockHeaderLinks } from "../data/mockLayout";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import { HeaderMegaMenuTabs } from "./mega-menu/tabs";

export function HeaderLinks() {
  return (
    <div className="flex gap-x-6 bg-white px-30 py-5">
      {mockHeaderLinks.map((item) => (
        <div key={item.id}>
          {item.hover ? (
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex items-center gap-x-2 cursor-pointer">
                  {item.icon}
                  <p
                    className={`text-base ${item.color ? "text-primary border-l pl-5" : "text-gray-600"}`}
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
            <div className="flex items-center gap-x-2 cursor-pointer">
              {item.icon}
              <p
                className={`text-base ${item.color ? "text-primary border-l pl-5" : "text-gray-600"}`}
              >
                {item.title}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
