import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import {
 addCollectionAndDocuments,
 getCategoriesAndDocuments,
} from "../utlis/firebase.utils";

export const CategoriesContext = createContext({
  setCategories: () => null,
  categories: {}
});

export const CategoriesProvider = ({children}) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
   addCollectionAndDocuments("categories", SHOP_DATA);
   const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    // console.log(categoryMap);
    setCategories(categoryMap);
   };
   getCategoriesMap();
  }, []);
  const value={categories, setCategories};
  return <CategoriesContext.Provider value={value}>
    {children}
  </CategoriesContext.Provider>
}