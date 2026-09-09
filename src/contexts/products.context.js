import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import { addCollectionAndDocuments } from "../utlis/firebase.utils";

export const ProductsContext = createContext({
  setProducts: () => null,
  products: []
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
   addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  const value={products, setProducts};
  return <ProductsContext.Provider value={value}>
    {children}
  </ProductsContext.Provider>
}