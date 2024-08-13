"use client";

import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import QuantityCounter from "./QuantityCounter";
import { AppContext } from "@/Context/AppContext";
import toast from "react-hot-toast";

const CartItem = ({ id, image, title, description, price, removeFromCart, quantity}) => {
  const {remove, add} = useContext(AppContext);

  const AddQuantity = () => {
    add(id);
    toast("Yayy!!!", {
      icon: '😁'
    })
  }

  const removeQuantity = () => {
    remove(id);
    toast("Nooo!!", {
      icon: '😭'
    })
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[40%] select-none">
          <img src={image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{title}</h1>
          <h1 className="text-base text-slate-700/60 font-medium text-balance">
          {`${description.substr(0,100)}...`}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${price}</p>
            <div>
              <QuantityCounter quantity={quantity} increase={AddQuantity} decrease={removeQuantity} />
            </div>
            <div
              className="v bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={() => removeFromCart(id)}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
