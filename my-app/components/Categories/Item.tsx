import Image from "next/image";
import { ItemProps } from "./type";

const Item = ({ img, name }: ItemProps) => {
  return (
    <div className="container h-[110px] w-[103.8px] border border-gray-200  bg-white flex items-center justify-center relative hover:bg-white hover:shadow-lg hover:z-10">
      <Image
        src={img}
        alt={name}
        fill
        className="p-4 "
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className=" text-xs self-end ">{name}</p>
    </div>
  );
};
export default Item;
