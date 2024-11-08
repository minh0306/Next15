import React from "react";
import Carousel from "../Slide/Slide";
import Image from "next/image";
import Banner2 from "@/public/assets/banner2.jpg";
import Banner3 from "@/public/assets/banner3.jpg";
const BannerLayout = () => {
  return (
    <div className="w-full flex gap-2">
      <Carousel />
      <div className="flex flex-col gap-1">
        <Image
          src={Banner2}
          width={380}
          height={100}
          alt="baaner"
          className=" rounded-md"
        />
        <Image
          src={Banner3}
          width={380}
          height={100}
          alt="banner"
          className=" rounded-md"
        />
      </div>
    </div>
  );
};
export default BannerLayout;
