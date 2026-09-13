import "./directory.style.scss";
import DirectoryItem from "../directory-item/directory-item.component";

export default function Directory({ categories }) {
  // console.log(categories);

  return (
    <>
      <div className="categories-container">
        {categories.map((category) => (
          <DirectoryItem
            key={category.id}
            cat={category}
          />
        ))}
      </div>
    </>
  )
}