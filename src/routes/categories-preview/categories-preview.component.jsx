// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/categories.selector";

export default function CategoriesPreview() {
  // const { categories } = useContext(CategoriesContext)
  const categories = useSelector(selectCategories);
  return (
    <div>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return (<CategoryPreview key={title} title={title} products={products} />)
      })}
    </div>
  );
}