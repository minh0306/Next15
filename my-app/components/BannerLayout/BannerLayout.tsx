import Carousel from "../Slide/Slide";
import Image from "next/image";
import Banner2 from "@/public/assets/banner2.jpg";
import Banner3 from "@/public/assets/banner3.jpg";
const BannerLayout = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-2">
      <div className="col-span-2 ">
        <Carousel />
      </div>
      <div className=" flex flex-col gap-1">
        <Image
          src={Banner2}
          width={380}
          height={100}
          alt="banner"
          className="rounded-md object-cover w-full h-auto"
        />
        <Image
          src={Banner3}
          width={380}
          height={100}
          alt="banner"
          className="rounded-md object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};
export default BannerLayout;
