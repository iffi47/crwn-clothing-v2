import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function ProductCard({product}) {
  const { name, price, imageUrl } = product;
  const { cartItems, addToCartItems } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCartItems(product)
    console.log(cartItems);
  }
  return(
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">
            {name}
          </span>
          <span className="price">
            {price}
          </span>
        </div>
        <Button buttonType="inverted" onClick={handleAddToCart}>Add Item</Button>
      </div>
    </>
  )
}