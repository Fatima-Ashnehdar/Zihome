import { FeaturesDetails } from "./featureDetails";
import { PicturesDetails } from "./picturesDetails";

export function Details() {
  return (
    <div className="flex border border-gray-200 rounded-2xl px-8 py-6 w-full bg-white">
      <PicturesDetails />
      <FeaturesDetails />
    </div>
  );
}
