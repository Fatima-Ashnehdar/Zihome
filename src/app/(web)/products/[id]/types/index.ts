import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ProductsSimilarCardProps {
  id: number;
  photo: StaticImageData;
  name: string;
  score: number;
  model: string;
  previousPrice: number;
  currentPrice: number;
}

export interface ViewPointCardProps {
  id: string;
  name: string;
  date: string;
  score: string;
  opinion: string;
  answer: string;
  question: string;
}

export interface QuestionsCardProps {
  id: string;
  question: string;
  answer: string;
  // icon: ReactNode;
}

export interface AnswerModalProps {
  answer: string;
  question: string;

  // icon: ReactNode;
}

export interface ImageGalleryProps {
  picture: StaticImageData;
}

export interface SpecificationProps {
  key: string;
  value: string;
}

export interface FeaturesDetailsProps {
  name: string;
  score: number;
  specifications: SpecificationProps[];
}

export interface LittlePictureProps {
  id: number;
  picture: string;
}

export interface ProductImageProps {
  id: string;
  url: string;
  isMain: boolean;
  sortOrder: number;
}

// export interface picturesDetailsProps {
//   product: {
//     mainPicture: string;
//     littlePictures: LittlePictureProps[];
//     images: ProductImageProps[];
//   };
// }

export interface ImageGalleryProps {
  picture: StaticImageData;
  images: ProductImageProps[];
}
