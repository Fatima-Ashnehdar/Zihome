/**@format */

import { mockFooterLinks } from "@/layout/data/mockLayout";

export function FooterLink() {
  return (
    <div className="flex gap-x-30">
      {mockFooterLinks.map((category) => (
        <div key={category.title} className="flex flex-col gap-y-6">
          <p className="text-sm text-gray-900">{category.title}</p>
          <div className="flex flex-col gap-y-4">
            {category.link.map((link) => (
              <div key={link.id}>
                <p className="text-sm text-gray-600">{link.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
