"use client";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";
import categoriesData from "@/components/Data/Categories.json";
const Filter = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const defaultData = categoriesData.toSpliced(4, categoriesData.length - 5);
  const [data, setData] = useState(defaultData);
  const handleLoadMore = () => {
    setIsLoadMore(true);
    setData(categoriesData);
  };

  return (
    <div className="flex flex-col gap-2  w-44">
      <div className="w-full px-2 py-4 md:p-4">
        <h3 className="text-md md:text-lg font-bold m-2 text-nowrap">
          All Categories
        </h3>
        <hr />
        <div className="p-2 flex flex-col gap-3 text-wrap text-sm md:text-md">
          {data.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>
            </div>
          ))}
          {!isLoadMore && (
            <div onClick={handleLoadMore} className="flex gap-3 cursor-pointer">
              <p>More </p>
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            </div>
          )}
        </div>
        <div className="filter">
          <h4 className="text-md md:text-lg font-semibold m-2">
            Search Filter
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Filter;
