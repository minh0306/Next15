"use client";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useEffect, useState } from "react";
// import categoriesData from "@/components/Data/Categories.json";
import { Category, fetchAllCategory } from "@/services/productService";
import { useParamsContext } from "@/contexts/QueryParamsContext";
const Filter = () => {
  // const [isLoadMore, setIsLoadMore] = useState(false);
  // const defaultData = categoriesData.toSpliced(4, categoriesData.length - 5);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  // const handleLoadMore = () => {
  //   setIsLoadMore(true);
  //   // setData(categoriesData);
  // };
  const { params, updateParams } = useParamsContext();
  const getCategory = async () => {
    try {
      const res = await fetchAllCategory();
      setCategoryData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Failed to fetch data.</div>;
  return (
    <div className="flex flex-col gap-2  w-44">
      <div className="w-full px-2 py-4 md:p-4">
        <h3
          className="text-md md:text-lg font-bold m-2 text-nowrap cursor-pointer"
          onClick={() => updateParams({ ...params, categoryCode: "" })}
        >
          All Categories
        </h3>
        <hr />
        <div className="p-2 flex flex-col gap-3 text-wrap text-sm md:text-md">
          {categoryData?.map((item) => (
            <div
              key={item.name}
              onClick={() =>
                updateParams({ ...params, categoryCode: item.code })
              }
              className=" cursor-pointer"
            >
              <span>{item.name}</span>
            </div>
          ))}
          {/* {!isLoadMore && (
            <div onClick={handleLoadMore} className="flex gap-3 cursor-pointer">
              <p>More </p>
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
            </div>
          )} */}
        </div>
        {/* <div className="filter">
          <h4 className="text-md md:text-lg font-semibold m-2">
            Search Filter
          </h4>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
