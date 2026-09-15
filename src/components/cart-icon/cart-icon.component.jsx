import { useContext } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";
// import "./cart-icon.styles.scss";
import { Shopping, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

export default function CartIcon({ onClick }) {
  const { cartCount } = useContext(CartContext)
  return(
    <>
      <CartIconContainer onClick={onClick}>
        <Shopping />
        <ItemCount>
          {cartCount}
        </ItemCount>
      </CartIconContainer>
    </>
  )
}