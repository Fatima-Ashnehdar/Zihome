/**@format */

import { mockAboutFeatures } from "../data/mock-about";

export function AboutFeatures() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <p className="text-lg text-gray-900 font-bold">{mockAboutFeatures.title}</p>
      <div className="flex gap-x-6 w-full">
        {mockAboutFeatures.feature.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-y-5 border shadow-card rounded-lg w-full py-12"
          >
            {item.icon}
            <p className="text-base text-gray-900">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
