/**@format */

import { Separator } from "@/components/ui/separator";

import { InformationContactZiHome } from "./contactZiHome";
import { InformationMap } from "./map";
import { InformationTitle } from "./title";
import { InformationSocialMedia } from "./socialmedia";

export function ContactInformation() {
  return (
    <div className="flex flex-col gap-y-10 border rounded-lg py-12">
      <InformationTitle />
      <div className="flex flex-col gap-y-10 px-25">
        <InformationMap />
        <InformationContactZiHome />
        <Separator />
        <InformationSocialMedia />
      </div>
    </div>
  );
}
