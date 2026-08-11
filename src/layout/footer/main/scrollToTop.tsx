"use client";

/**@format */

import { Button } from "@/components/ui/button";

import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <div className="absolute top-0 left-[13%]">
      <Button
        variant={"ghost"}
        onClick={() => {
          window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
          });
        }}
      >
        <ChevronUp className="size-6 text-gray-600" />
      </Button>
    </div>
  );
}
