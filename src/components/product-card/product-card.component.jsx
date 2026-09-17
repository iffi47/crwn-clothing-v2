import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import "./product-card.styles.scss";
import { ProductCartContainer, Price, Name, Footer } from "./product-card.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function ProductCard({product}) {
  const { name, price, imageUrl } = product;
  const { cartItems, addToCartItems } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCartItems(product)
    // console.log(cartItems);
  }
  return(
    <>
      <ProductCartContainer>
        <img src={imageUrl} alt={name} />
        <Footer>
          <Name>
            {name}
          </Name>
          <Price>
            {price}
          </Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>Add Item</Button>
      </ProductCartContainer>
    </>
  )
}