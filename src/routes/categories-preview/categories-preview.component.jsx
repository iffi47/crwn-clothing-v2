// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function CategoriesPreview() {
  // const { categories } = useContext(CategoriesContext)
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return (<CategoryPreview key={title} title={title} products={products} />)
      })}
    </div>
  );
}