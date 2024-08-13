"use client";

import { data } from "@/data/data";
import { createContext, useContext, useEffect, useState } from "react";


//Creating App Context here
export const AppContext = createContext();

//Creating a Provider for the App Context
export function AppContextProvider({ children }) {
  const [ProductList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    setProductList(data);
  }, []);

  /*Function to add the item to the cart it adds the item if it doesn't exist 
   and add to quantity if item already exist */
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

  /*Function to remove the item from the cart it reduce the quantity if quantity is more than 1 
    and remove it from cart if quantity is 1 */
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

  //Function to completly remove item from cart regardless of quantity
  const removeComplete = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== id));
  }

  //Values
  const value = {
    ProductList,
    cart,
    add,
    remove,
    removeComplete,
    setCart
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}


//Custom hook to reduce import statement
export function useCart() {
  return useContext(AppContext);
}
