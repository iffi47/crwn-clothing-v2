import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

export default function Directory({ categories }) {
  console.log(categories);

  return (
    <>
      <div className="categories-container">
        {Object.keys(categories).map((title) => {
          <>
            {categories[title].map((product) => (
              <CategoryItem
                key={product.id}
                cat={product}
                id={product.id}
              />
            ))}
          </>
        })}
      </div>
    </>
  )
}