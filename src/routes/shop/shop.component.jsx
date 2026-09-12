import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

export default function Shop() {
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