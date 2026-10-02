import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../utlis/firebase.utils.js";
import { useDispatch } from "react-redux";
import { SHOP_DATA } from "../../shop-data.js";
import { fetchCategoriesStart } from "../../store/categories/categories.action.js";
import { useEffect } from "react";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
    dispatch(fetchCategoriesStart())
  }, []);
  return (
    // <div className="shop-container">
    //   {Object.keys(categories).map((title) => {
    //     const products = categories[title]
    //     return (<CategoryPreview key={title} title={title} products={products} />)
    //   })}
    // </div>
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
}