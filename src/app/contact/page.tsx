/**@format */

import { ContactDescription } from "./components/description";
import { ContactForm } from "./components/form/form";
import { ContactHero } from "./components/hero";
import { ContactInformation } from "./components/information/information";

export default function ContactPage() {
  return (
    <div dir="rtl" className="py-8 mt-[11%] flex flex-col gap-y-10 bg-nutral-50">
      <ContactHero />
      <div className="flex flex-col gap-y-16 px-30">
        <ContactDescription />
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  );
}
