/**@format */

import Image from "next/image";

import logo from "@public/pictures/login/logo.png";

const loginTitle = {
  title: "زیبایی به سبک",
  text: "متنوع ترین کالکشن خانه و آشپزخانه و دکوراسیون",
  image: logo,
};

export function Title() {
  return (
    <div className=" flex flex-col items-center gap-y-3">
      <div className="flex items-center gap-x-1">
        <p className="text-3xl text-gray-800">{loginTitle.title}</p>
        <Image alt="logo" src={loginTitle.image} className="w-25" />
      </div>
      <p className="text-base text-gray-600">{loginTitle.text}</p>
    </div>
  );
}
