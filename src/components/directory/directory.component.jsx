import { CategoriesContainer } from "./directory.style.jsx";
import DirectoryItem from "../directory-item/directory-item.component";

export default function Directory({ categories }) {
  // console.log(categories);

  return (
    <>
      <CategoriesContainer>
        {categories.map((category) => (
          <DirectoryItem
            key={category.id}
            cat={category}
          />
        ))}
      </CategoriesContainer>
    </>
  )
}