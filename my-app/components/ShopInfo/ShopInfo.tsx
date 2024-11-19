import Image from "next/image";
const ShopInfo = () => {
  return (
    <div className="flex gap-1 md:gap-4 w-full items-center p-2 md:p-3">
      <div className="flex gap-2 md:gap-4">
        <div>
          <Image
            src={"/products/bear.jpg"}
            alt="shop-ava"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 ">
          <span>Shopgiare</span>
          <span className="text-gray-400">Active 4 minutes ago</span>
          <div className="flex gap-2">
            <button className="bg-orange-200 text-orange-500 rounded-sm border border-orange-500 p-1 md:p-2">
              Chat Now
            </button>
            <button className=" rounded-sm border border-gray-300 p-1 md:p-2">
              View Shop
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 flex-1 px-2 md:px-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Rating</span>
          <span className="text-orange-500">117,9k</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Response rate</span>
          <span className="text-orange-500">82%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Joined</span>
          <span className="text-orange-500">7 years ago</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Products</span>
          <span className="text-orange-500">1,3k</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Response time</span>
          <span className="text-orange-500">within hours</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Follower</span>
          <span className="text-orange-500">11,7k</span>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
