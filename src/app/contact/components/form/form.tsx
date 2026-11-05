/**@format */

import { Button } from "@/components/ui/button";

import { FormInputGroupe } from "./inputGroupe";
import { FormTitle } from "./title";

export function ContactForm() {
  return (
    <div>
      <FormTitle />
      <FormInputGroupe />
      <div className="flex justify-end mt-4">
        <Button size={"xl"}>
          <p>ثبت و ارسال</p>
        </Button>
      </div>
    </div>
  );
}
