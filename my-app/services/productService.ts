import { axios } from "@/libs/axios";
import { BaseQueryParams } from "@/types/inex";

type Category = {
  code: string;
  description: string;
  id: string;
  imageUrl: string;
  name: string;
};
export interface Item {
  category?: Category;
  id: string;
  name: string;
  imageUrls: string[];
  discount: number;
  discountPercentage?: number;
  price: number;
  description: string;
  soldCount?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  freeShipping?: boolean;
  returnPolicy?: string;
  location?: string;
}
export type ProductListResponse = {
  data: Item[];
  totalItem: number;
  hasNextPage: boolean;
};
export const fetchProducts = async (
  params: BaseQueryParams
): Promise<ProductListResponse> => {
  return await axios.get(`/product/list`, {
    params: params,
  });
  // console.log(57, response.data);
  // return response;
};
