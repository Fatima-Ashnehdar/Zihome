/**@format */

import { mockFooterLinks } from "@/layout/data/mockLayout";

export function FooterLink() {
  return (
    <div className="flex gap-x-[10%] lg:gap-x-5.5 xl:gap-x-30">
      {mockFooterLinks.map((category) => (
        <div
          key={category.title}
          className="flex flex-col gap-y-3 xs:gap-y-4 sm:gap-y-5 md:gap-y-6"
        >
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-900">{category.title}</p>
          <div className="flex flex-col gap-y-1 xs:gap-y-2 sm:gap-y-3 md:gap-y-4">
            {category.links.map((link) => (
              <div key={link.id}>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600">{link.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
