"use client";

import { data } from "@/data/data";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [ProductList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    setProductList(data);
  }, []);

  const add = (id) => {
    const itemInCart = cart.find((cartItem) => cartItem.item.id === id);
    if (itemInCart) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      const product = ProductList.find((product) => product.id === id);
      setCart((prevCart) => [...prevCart, { item: product, quantity: 1 }]);
    }
  };

  const remove = (id) => {
    const itemInCart = cart.find((cartItem) => cartItem.item.id === id);

    if (itemInCart && itemInCart.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.item.id !== id)
      );
    }
  };

  const removeComplete = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== id));
  }

  const value = {
    ProductList,
    cart,
    add,
    remove,
    removeComplete
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useCart() {
  return useContext(AppContext);
}
