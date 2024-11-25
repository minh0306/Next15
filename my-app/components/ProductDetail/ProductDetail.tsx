"use client";
import { Button } from "@mui/material";
import { Rating } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { Item } from "@/services/productService";
const ProductDetails = ({ product }: { product: Item }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleAddToCart = () => {
    console.log(product, quantity);
    const item = {
      ...product,
      quantity: quantity,
      image: product.imageUrls[0],
      description: "Bluetooth 24key control, 5m",
      discount: 10,
    };
    addToCart(item);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Product Images */}
      <div className="w-full ">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          className="w-full rounded-lg"
          width={400}
          height={400}
          quality={99}
        />
        <div className="flex space-x-2 mt-2">
          {product.imageUrls.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg cursor-pointer border"
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="flex flex-col space-y-4">
        {/* Product Title */}
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        {/* Rating and Reviews */}
        <div className="flex items-center space-x-2">
          <Rating value={product.rating} precision={0.1} readOnly />
          <span className="text-gray-600">{`(${product.reviews} Ratings)`}</span>
        </div>

        {/* Price */}
        <div className="text-red-600 text-3xl font-bold">{product.price} đ</div>

        {/* Free Shipping */}
        {product.freeShipping && (
          <span className="text-green-500 font-medium">Free Shipping</span>
        )}

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => handleQuantityChange(false)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(true)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button variant="outlined" color="secondary" fullWidth>
            Buy Now
          </Button>
        </div>

        {/* Return Policy */}
        <span className="text-sm text-gray-500">{product.returnPolicy}</span>

        {/* Shipping Location */}
        <span className="text-sm text-gray-500">{`Shipping to: ${product.location}`}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
