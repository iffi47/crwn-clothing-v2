import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
 //find if cartItems contain productToAdd
 const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
 //if found increment quantity
 if (existingCartItem) {
  return cartItems.map((cartItem) =>
   cartItem.id === productToAdd.id
    ? { ...cartItem, quantity: cartItem.quantity + 1 }
    : cartItem,
  );
 }
 //return new CartItems if not existed in the current cartItems array;
 return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
 isCartOpen: false,
 toggleCart: () => null,
 cartItems: [],
 addToCartItems: () => null,
});


export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const toggleCart = () => {
   setIsCart((prev) => {
    return !prev;
   });
   //  console.log(isCartOpen);
   return isCartOpen;
  };
  const addToCartItems = (item) => {
   setCartItems((currentCartItems) => addCartItem(currentCartItems, item));
  };
  const value = { isCartOpen, toggleCart, cartItems, addToCartItems };

  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
}