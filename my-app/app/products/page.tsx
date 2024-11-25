"use client";
import ItemList from "@/components/Item/Items";
import { fetchProducts, ProductListResponse } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Products = () => {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState("popular");
  const itemPerPage = 6;
  const { data, isLoading, isError } = useQuery<ProductListResponse>({
    queryKey: ["products", page],
    queryFn: () => fetchProducts({ page, itemPerPage }),
    ...{ keepPreviousData: true },
  });
  console.log(44, data);
  const activeCSS = " bg-yellow-300 text-white px-1 md:px-2 py-1";
  const inActiveCss = "bg-white px-2 py-1";
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to fetch data.</div>;
  // page: number;
  // itemPerPage: number;
  // orderBy: string;
  // searchBy: string;
  // orderByDirection: "asc" | "desc";
  // search: string;
  // categoryCode: string;
  return (
    <main>
      <div className="sort-pagination flex p-2 justify-between bg-[#00000008] items-center my-4">
        <div className=" flex gap-3 text-xs md:text-sm">
          <span className="text-gray-500 text-sm place-self-center">
            Sort by
          </span>
          <button
            className={active === "popular" ? activeCSS : inActiveCss}
            onClick={() => setActive("popular")}
          >
            Popular
          </button>
          <button
            className={active === "latest" ? activeCSS : inActiveCss}
            onClick={() => setActive("latest")}
          >
            Latest
          </button>
          <button
            className={active === "topSale" ? activeCSS : inActiveCss}
            onClick={() => setActive("topSale")}
          >
            Top sale
          </button>
          <button
            className={active === "price" ? activeCSS : inActiveCss}
            onClick={() => setActive("price")}
          >
            Price
          </button>
        </div>
        <div className="pagination flex items-center text-xs text-nowrap px-1">
          <span className="md:mr-4 mr-1">
            Page {page} /{" "}
            {data?.totalItem && Math.ceil(data?.totalItem / itemPerPage)}
          </span>
          <button
            className={
              page !== 1
                ? " p-1 rounded-sm border border-gray-200 bg-white "
                : "text-gray-400" +
                  " p-1 rounded-sm border border-gray-200 bg-white "
            }
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            <NavigateBeforeIcon fontSize="small" />
          </button>
          <button
            className={
              data?.hasNextPage
                ? " p-1 rounded-sm border border-gray-200 bg-white "
                : "text-gray-400" +
                  " p-1 rounded-sm border border-gray-200 bg-white "
            }
            disabled={!data?.hasNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <NavigateNextIcon fontSize="small" />
          </button>
        </div>
      </div>
      <ItemList data={data?.data || []} />
    </main>
  );
};
export default Products;
