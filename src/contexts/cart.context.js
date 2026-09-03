import { createContext, useState } from "react";


export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () =>  null
});


export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCart] = useState(false);
  const toggleCart =() => {
    setIsCart((prev) => {
      return !prev
    })
  }
  const value = {isCartOpen, toggleCart};

  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
}