"use client";
import { useState } from "react";
import ItemCard from "./Item";
import { Item } from "@/services/productService";

const ItemList = ({ data }: { data: Item[] }) => {
  const ITEMS_PER_ROW = 6;
  const [rowsToShow, setRowsToShow] = useState(2);

  const loadMore = () => {
    setRowsToShow((prevRows) => prevRows + 1);
  };
  const itemsToShow = rowsToShow * ITEMS_PER_ROW;

  return (
    <div className="bg-white w-full">
      <div className="h-full w-full flex py-4 px-2">
        <h3 className=" text-lg uppercase text-gray-300">products</h3>
      </div>
      <hr />
      {data && data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 ">
          {data.slice(0, itemsToShow).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex p-6 ">
          <p className="w-full text-center"> No product is found</p>
        </div>
      )}

      {itemsToShow < data?.length && (
        <div className="w-full flex justify-center pb-4">
          <button
            className="px-16 py-2 bg-slate-100 rounded-sm text-gray-600"
            type="button"
            onClick={loadMore}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
