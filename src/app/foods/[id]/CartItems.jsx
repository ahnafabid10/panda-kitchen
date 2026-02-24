"use client";
import { CartContext } from "@/src/Context/CartProvider";
import { useContext } from "react";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return <div>
    {cart.length} Items Added
    </div>;
};

export default CartItems;