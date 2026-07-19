/** @format */

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Share2 } from "lucide-react";
import { Heart } from "lucide-react";
import { Bell } from "lucide-react";

export function TooltipIcon() {
  const icons = [
    {
      id: 1,
      icon: <Heart className="text-gray-500" />,
      hover: "مورد علاقه",
    },
    {
      id: 2,
      icon: <Share2 className="text-gray-500" />,
      hover: "اشتراک گذاری",
    },
    {
      id: 3,
      icon: <Bell className="text-gray-500" />,
      hover: "پیام ها",
    },
  ];
  return (
    <div className="flex flex-col gap-y-3.5">
      {icons.map((item) => (
        <Tooltip key={item.id}>
          <TooltipTrigger
            render={
              <Button variant={"ghost"} size={"icon-sm"}>
                {item.icon}
              </Button>
            }
          ></TooltipTrigger>
          <TooltipContent>
            <p>{item.hover}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
