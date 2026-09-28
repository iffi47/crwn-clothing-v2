import { Link, Outlet } from "react-router-dom";
// import "./navigation.style.scss";
import { useSelector } from "react-redux";
import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from "./navigation.style";
import { ReactComponent as CrownLogo } from "../../assets/images/007 crown.svg";
// import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utlis/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

 return (
   <>
     <NavigationContainer>
       <LogoContainer to="/">
         <CrownLogo className="logo" />
       </LogoContainer>
       <NavLinksContainer className="nav-links-container">
         <NavLink to="/shop">
           SHOP
         </NavLink>
         <NavLink to="/checkout">
           CHECKOUT
         </NavLink>
         {currentUser ? <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink> : <NavLink to="/auth">
           SIGN IN
         </NavLink>}
         <CartIcon onClick={() => setIsCartOpen(!isCartOpen)} />
       </NavLinksContainer>
       {isCartOpen && <CartDropdown />}
     </NavigationContainer>
   <Outlet></Outlet>
   </>
 );
};


export default Navigation;