import { axios } from "@/libs/axios";
import { BaseQueryParams } from "@/types/inex";

export type Category = {
  code: string;
  description: string;
  id: string;
  imageUrl: string;
  name: string;
};
export type Item = {
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
};
export type ProductListResponse = {
  data: Item[];
  totalItem: number;
  hasNextPage: boolean;
};
export const fetchProducts = async (
  params: Partial<BaseQueryParams>
): Promise<ProductListResponse> => {
  return await axios.get(`/product/list`, {
    params: params,
  });
};
export const fetchProductDetail = async (id: string): Promise<Item> => {
  return await axios.get(`/product/${id}`);
};

export const fetchAllCategory = async (): Promise<Category[]> => {
  return await axios.get("category/list");
};
