import "./directory.style.scss";
import DirectoryItem from "../directory-item/directory-item.component";

export default function Directory({ categories }) {
  // console.log(categories);

  return (
    <>
      <div className="categories-container">
        {Object.keys(categories).map((title) =>
          categories[title].map((product) => (
            <DirectoryItem
              key={product.id}
              cat={product}
              id={product.id}
            />
          ))
        )}
      </div>
    </>
  )
}