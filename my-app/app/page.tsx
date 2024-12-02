import BannerImage from "@/components/Data/BannerIamge.json";
import BannerSimple from "@/components/BannerSimple/BannerSimple";
import Categories from "@/components/Categories/Categories";
import BannerLayout from "@/components/BannerLayout/BannerLayout";
import ItemList from "@/components/Item/Items";

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
const mockData = Array.from({ length: 20 }, (_, i) => ({
  id: (i + 1).toString(),
  name: "Búp Bê Gấu Biến Hình Dễ Thương 25cm Sang Trọng Đồ Chơi Búp Bê Quà Tặng Sinh Nhật ",
  imageUrls: [`/products/bear.jpg`],
  discount: 57000,
  discountPercentage: 12,
  price: 13000,
  description: "",
}));
export default function Home() {
  return (
    // <div className=" flex-1 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
    <main className="flex-1 flex flex-col w-full py-3 2xl:px-60 xl:px-56 md:px-20  px-4 sm:px-8 gap-3 ">
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
      <section>
        <ItemList data={mockData} />
      </section>
    </main>
  );
}
