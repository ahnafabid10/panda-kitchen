"use client"
import { CartContext } from '@/src/Context/CartProvider';
import React, { use, useState } from 'react';

const CardButton = ({food}) => {

  const [inCart, setInCart] = useState(false)
  const {addToCart} = use(CartContext)
  const handleAdd2Cart=()=>{
    addToCart(food)
    setInCart(true)
  }

    return (

            <button
            onClick={handleAdd2Cart}
            disabled={inCart}
            className="border border-orange-500 text-orange-500 text-sm sm:text-base py-2.5 rounded-xl hover:bg-orange-50 transition font-medium disabled:bg-gray-100 disabled:text-gray-400"
          >
            {inCart ? "Added" : "Added to cart"}
            
          </button>
    );
};

export default CardButton;