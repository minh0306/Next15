"use client";

import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "@/contexts/CartContext";
const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;
    if (!/^\d+$/.test(value)) {
      value = value.replace(/[^0-9]/g, "");
    }
    if (value === "") {
      return;
    }
    const numericValue = parseInt(value, 10);

    if (numericValue < 1) {
      return;
    }
    updateQuantity(id, numericValue);
  };
  return (
    <div className="container mx-auto p-4 2xl:p-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <Button variant="contained" color="primary" href="/">
          Go to Seller Centre
        </Button>
      </header>

      {/* Cart Items */}
      <div className="bg-white shadow-md rounded-md p-4 ">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center border-b py-4"
          >
            {/* Product Image */}
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className=" object-cover rounded-md"
              />

              {/* Product Details */}
              <div className="flex-grow lg:flex gap-6 pr-16 pl-4">
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold truncate md:text-wrap w-60">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">{item.id}</p>
                </div>
                {/* <p className="text-sm text-gray-500">{item.variations}</p> */}
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-400 line-through">
                  {/* {item.originalPrice} đ */}
                  {item.price} đ
                </p>
                <p className="text-lg font-bold text-red-500">{item.price} đ</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              <button
                disabled={item.quantity <= 1}
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-6 outline items-center flex justify-center outline-gray-200 outline-1 rounded-sm hover:bg-gray-100 cursor-pointer disabled:cursor-default disabled:text-gray-300 disabled:hover:bg-white"
              >
                -
              </button>
              <input
                value={item.quantity}
                className="max-w-16 border  border-gray-200 text-center pl-2"
                onChange={(e) => handleQuantityChange(item.id, e)}
                type="text"
                min={1}
              />
              <button
                className="w-6 outline items-center flex justify-center outline-gray-200 outline-1 rounded-sm hover:bg-gray-100 cursor-pointer disabled:cursor-default disabled:text-gray-300 disabled:hover:bg-white"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <IconButton
                aria-label="delete"
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}

        {/* Empty Cart */}
        {cart.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            Your cart is empty. Start shopping!
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            Free shipping on orders from 0,00 đ
          </p>
        </div>
        <div>
          <p className="text-lg font-bold">
            Total:{" "}
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}{" "}
            đ
          </p>
          <Button variant="contained" color="primary" className="ml-4">
            Check Out
          </Button>
        </div>
      </footer>
    </div>
  );
};
export default CartPage;
