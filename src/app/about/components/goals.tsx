/**@format */

import { mockAboutGoals } from "../data/mock-about";

export function AboutGoals() {
  return (
    <div className="flex flex-col gap-y-12">
      {mockAboutGoals.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-4">
          <p className="text-base text-gray-900 font-bold">{item.title}</p>
          <div className="flex flex-col gap-y-3.5">
            {item.paragraphs.map((text) => (
              <p key={text.id} className="text-base text-gray-900">
                {text.text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
