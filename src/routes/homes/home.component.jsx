import { useContext } from "react";
import Directory from "../../components/directory/directory.component"
import { CategoriesContext } from "../../contexts/categories.context";

export default function Home() {
  const { categories } = useContext(CategoriesContext);
  return(
    <>
      <Directory categories={categories} />
    </>
  )
}