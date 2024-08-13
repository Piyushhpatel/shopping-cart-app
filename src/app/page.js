"use client";

import Products from "@/components/Products";
import { AppContext } from "@/Context/AppContext";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const { ProductList, add, remove } = useContext(AppContext);

  const addToCart = (id) => {
    add(id);
    toast.success("Item Added to Cart")
  };

  const removeFromCart = (id) => {
    remove(id);
    toast('Item Removed from Cart', {
      icon: '😑'
    })
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto p-8">
      {ProductList.map((item) => (
        <Products
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.images[0]}
          price={item.price}
          addToCart={addToCart}
          images={item.images}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}
