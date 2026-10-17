/**@format */

import { Button } from "@/components/ui/button";

import picture from "@public/pictures/dashboard/sidebar-header.png";

import { PencilLine } from "lucide-react";

import Image from "next/image";

export function SidebarTitle() {
  return (
    <div className="flex flex-col">
      <Image src={picture} alt="sidebar-header" className="h-35" />
      <div className="flex justify-between px-6">
        <p>فاطمه اشنه در</p>
        <Button variant={"link"} className="px-0">
          <PencilLine />
        </Button>
      </div>
    </div>
  );
}
