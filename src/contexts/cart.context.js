import { createContext, useEffect, useState } from "react";

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
 cartCount: 0,
 clearItemFromCart: () => null,
 addItemToCart: () => null,
 removeItemToCart: () => null,
});

export const CartProvider = ({ children }) => {
 const [isCartOpen, setIsCart] = useState(false);
 const [cartItems, setCartItems] = useState([]);
 const [cartCount, setCartCount] = useState(0);
 useEffect(() => {
  const newCartCount = cartItems.reduce(
   (total, cartItem) => total + cartItem.quantity,
   0,
  );
  setCartCount(newCartCount);
 }, [cartItems]);
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
 const clearItemFromCart = (item) => {
  const updatedArray = cartItems.filter((cart) => cart.id !== item.id);
  setCartItems(updatedArray);
 };
 const addItemToCart = (item) => {
  setCartItems((currentCartItems) =>
   currentCartItems.map((cart) =>
    cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart,
   ),
  );
 };
 const removeItemToCart = (item) => {
  setCartItems((currentCartItems) =>
   currentCartItems.map((cart) =>
    cart.id === item.id ? { ...cart, quantity: cart.quantity - 1 } : cart,
   ),
  );
 };
 const value = {
  isCartOpen,
  toggleCart,
  cartItems,
  addToCartItems,
  cartCount,
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
 };

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
