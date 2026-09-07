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
const removeCartItem = (cartItems, cartItemToRemove) => {};

const clearCartItem = (cartItems, cartItemToClear) =>
 cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
 isCartOpen: false,
 toggleCart: () => null,
 cartItems: [],
 addToCartItems: () => null,
 cartCount: 0,
 clearItemFromCart: () => null,
 addItemToCart: () => null,
 removeItemToCart: () => null,
 cartTotal: 0,
});

export const CartProvider = ({ children }) => {
 const [isCartOpen, setIsCart] = useState(false);
 const [cartItems, setCartItems] = useState([]);
 const [cartCount, setCartCount] = useState(0);
 const [cartTotal, setCartTotal] = useState(0);
 useEffect(() => {
  const newCartCount = cartItems.reduce(
   (total, cartItem) => total + cartItem.quantity,
   0,
  );
  const newCartTotal = cartItems.reduce(
   (total, cartItem) => total + cartItem.quantity * cartItem.price,
   0,
  );
  setCartCount(newCartCount);
  setCartTotal(newCartTotal);
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

 const addItemToCart = (item) => {
  setCartItems(addCartItem(cartItems, item));
 };
 const removeItemToCart = (cartItemToRemove) => {
  setCartItems(removeCartItem(cartItems, cartItemToRemove));
 };

 const clearItemFromCart = (cartItemToClear) => {
  setCartItems(clearCartItem(cartItems, cartItemToClear));
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
  cartTotal,
 };

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
