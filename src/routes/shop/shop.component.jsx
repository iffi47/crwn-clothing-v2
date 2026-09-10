import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

export default function Shop() {
  const { categories } = useContext(CategoriesContext)
  return (
    <div className="products-container">
      {Object.keys(categories).map((title) => {
        <h2>{title}</h2>
        {
          categories[title].map((category) => (
            <ProductCard key={category.id} product={category} />
          ))
        }
      })}
    </div>
  );
}