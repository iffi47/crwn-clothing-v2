import { useContext } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export default function CartIcon({ onClick }) {
  const { cartCount } = useContext(CartContext)
  return(
    <>
      <div className="cart-icon-container" onClick={onClick}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">
          {cartCount}
      </span>
    </div>
    </>
  )
}