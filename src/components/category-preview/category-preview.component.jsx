import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";

export default function CategoryPreview({ title, products }) {
  const handleTitleClick = () => {
    console.log("Title");

  }
  return (
    <>
      <div className="category-preview-container">
        <h2><span onClick={handleTitleClick}>{title.toUpperCase()}</span></h2>
        <div className="preview">
          {
            products.filter((_, idx) => idx < 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </>
  )
}