import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext)
  return (
    <div>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return (<CategoryPreview key={title} title={title} products={products} />)
      })}
    </div>
  );
}