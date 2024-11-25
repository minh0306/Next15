import { Item } from "@/services/productService";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ item }: { item: Item }) => (
  <Link href={`/products/${item.id}`}>
    <div className="w-40 p-2 border rounded-lg shadow-md">
      <div className="relative">
        <Image
          src={item?.imageUrls[0]}
          alt={item.name}
          width={150}
          height={150}
          className="w-full h-32 rounded-md object-cover"
        />
        {item.discountPercentage != 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1 rounded">
            -{item.discountPercentage}%
          </span>
        )}
      </div>
      <div className="mt-2">
        <div className="flex items-center space-x-1">
          <span className="bg-red-500 text-white text-xs px-1 rounded text-nowrap">
            Yêu thích
          </span>
          <span className="text-xs text-gray-600 truncate">{item.name}</span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          {item.discountPercentage != 0 ? (
            <span className="bg-yellow-300 text-yellow-800 text-xs px-1 rounded">
              đ{item.discountPercentage} off
            </span>
          ) : (
            <span className="h-4"></span>
          )}
        </div>
        <div className="text-red-500 font-bold text-lg mt-1">đ{item.price}</div>
      </div>
    </div>
  </Link>
);

export default ItemCard;
