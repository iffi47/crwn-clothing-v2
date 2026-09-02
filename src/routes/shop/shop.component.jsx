import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

export default function Shop() {
  const  {products} = useContext(ProductsContext)
  return (
    <div>
      {products.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          {/* {category.items.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))} */}
        </div>
      ))}
    </div>
  );
}