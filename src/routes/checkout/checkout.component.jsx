// import "./checkout.styles.scss";
import { Total, CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock } from "./checkout.styles";
import CartItem from "../../components/cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/checkout-item.component";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <>
      <CheckoutContainer>
        <CheckoutHeader>
          <CheckoutHeaderBlock >
            <span>Product</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock >
            <span>Description</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock >
            <span>Quantity</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock >
            <span>Price</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock >
            <span>Remove</span>
          </CheckoutHeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>TOTAL: ${cartTotal}</Total>
      </CheckoutContainer>
    </>
  )
}