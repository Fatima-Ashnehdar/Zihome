import { StaticImageData } from "next/image";

import { ReactNode } from "react";

export interface AttractiveCardProps {
  id: number;
  time: string;
  visit: string;
  title: string;
  picture: StaticImageData;
}

export interface ContentCardProps {
  id: number;
  title: string;
  data: string;
  paragraph: string;
  icon: ReactNode;
  picture: StaticImageData;
}
