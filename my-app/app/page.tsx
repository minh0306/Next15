// import Image from "next/image";
import BannerImage from "@/components/Data/BannerIamge.json";
import BannerSimple from "@/components/BannerSimple/BannerSimple";
import Categories from "@/components/Categories/Categories";
import Carousel from "@/components/Slide/Slide";
import BannerLayout from "@/components/BannerLayout/BannerLayout";

const bannderSmall = {
  name: "bannerSmall",
  img: "/assets/bannersmall.jpg",
  link: "",
};
const bannerSmall2 = {
  name: "bannerSmall2",
  img: "/assets/cover.jpg",
  link: "",
};
export default function Home() {
  return (
    // <div className=" flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
    <main className="flex-1 flex flex-col w-full py-3 2xl:px-60 md:px-20  px-4 sm:px-8 gap-3 ">
      <section>
        <BannerLayout />
      </section>
      <section>
        <BannerSimple props={BannerImage} />
      </section>
      <section>
        <BannerSimple props={[bannderSmall]} />
      </section>
      <section>
        <BannerSimple props={[bannerSmall2]} />
      </section>
      <section>
        <Categories />
      </section>
    </main>
  );
}
