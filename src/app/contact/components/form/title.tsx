/**@format */

import { Button } from "@/components/ui/button";

import { mockFormTitle } from "../../data/mock-contact";

export function FormTitle() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-base text-gray-900 font-bold">{mockFormTitle.title}</p>
      <div className="flex justify-between">
        <p className="text-base text-gray-900">{mockFormTitle.description}</p>
        <Button variant={"outline"} size={"xl"}>
          <p>سوالات متداول</p>
        </Button>
      </div>
    </div>
  );
}
