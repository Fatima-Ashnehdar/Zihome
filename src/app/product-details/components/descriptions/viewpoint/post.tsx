/**@format */

import { Star } from "lucide-react";

import { ViewPointModal } from "../../modal/viewPointModal";

const postViewPoint = {
  title: "دیدگاه خود را با ما در میان بگذارید",
  score: "۴ از ۵",
  totalOpinions: "از مجموع ۸۵ نظر",
  postOpinion: " با ارسال نظر خود میتوانید به دیگران کمک کنید تا خرید مطمئن داشته باشید.",
};

const stars = [
  { id: 1, isFilled: false },
  { id: 2, isFilled: true },
  { id: 3, isFilled: true },
  { id: 4, isFilled: true },
  { id: 5, isFilled: true },
];

export function PostViewPoint() {
  return (
    <div className="sticky top-0 right-0 w-full">
      <div className="flex flex-col gap-y-6 border rounded-2xl px-5 py-6">
        <p className="text-base text-gray-950">{postViewPoint.title}</p>
        <div>
          <p className="text-base text-gray-800">{postViewPoint.score}</p>
          <div className="flex items-center gap-x-4">
            <div className="flex gap-x-1">
              {stars.map((star) => (
                <Star
                  key={star.id}
                  className={`size-4 ${star.isFilled ? "text-yellow-400" : "text-gray-400"}`}
                />
              ))}
            </div>
            <p className="text-base text-gray-600">{postViewPoint.totalOpinions}</p>
          </div>
        </div>
        <p className="text-base text-gray-950">{postViewPoint.postOpinion}</p>
        <ViewPointModal />
      </div>
    </div>
  );
}
