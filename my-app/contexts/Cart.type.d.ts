export interface CartItem {
  category?: Category;
  id: string;
  name: string;
  imageUrls?: string[];
  discount: number;
  discountPercentage?: number;
  price: number;
  description: string;
  soldCount?: number;
  image: string;
  quantity: number;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, value: number) => void;
}
