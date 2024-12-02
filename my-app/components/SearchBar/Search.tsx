"use client";
import { useEffect, useState } from "react";
import MenuData from "../Data/TopMenuSearch.json";
import SearchIcon from "@mui/icons-material/Search";
import { useParamsContext } from "@/contexts/QueryParamsContext";

const Search = () => {
  const { params, updateParams } = useParamsContext();

  const [visibleItems, setVisibleItems] = useState(MenuData.length);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateParams({ ...params, search: value });
  };

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleItems(2);
      } else if (width < 680) {
        setVisibleItems(3);
      } else if (width < 900) {
        setVisibleItems(4);
      } else if (width < 1200) {
        setVisibleItems(5);
      } else {
        setVisibleItems(MenuData.length);
      }
    };
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex bg-white rounded-md p-1 h-10 mt-2">
        <input
          className="text-sm w-full px-4 focus:outline-none"
          placeholder="Search for item"
          id="search-bar"
          onChange={handleSearch}
        />
        <div className=" bg-yellow-300 rounded-md w-20 p-2 items-center justify-center flex">
          <SearchIcon />
        </div>
      </div>
      <div className="top-menu flex  gap-2 lg:gap-3 2xl:gap-4 text-xs text-nowrap">
        {MenuData.slice(0, visibleItems).map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};
export default Search;
