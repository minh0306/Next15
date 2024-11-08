import Item from "./Item";
// import { CategoryProps } from "./type";
import Data from "@/components/Data/Categories.json";
const Categories = () => {
  return (
    <div className="bg-white flex flex-col">
      <div className="h-full w-full flex py-4 px-2">
        <h3 className=" text-lg uppercase text-gray-300">categories</h3>
      </div>
      <div className="bg-white w-full flex flex-wrap min-w-full">
        {Data &&
          Data.map((item) => (
            <Item img={item.img} name={item.name} key={item.name} />
          ))}
      </div>
    </div>
  );
};
export default Categories;
