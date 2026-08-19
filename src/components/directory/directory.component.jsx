import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

export default function Directory({ categories }) {
  return (
    <>
      <div className="categories-container">
        {categories.map((cat) => (
          <CategoryItem
            cat={cat}
            id={cat.id}
          />
        ))}
      </div>
    </>
  )
}