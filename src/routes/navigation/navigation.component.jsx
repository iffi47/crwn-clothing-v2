import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrownLogo } from "../../assets/images/007 crown.svg";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utlis/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSignOut = async () => {
    // console.log("Signout ");
    await signOutUser();
    setCurrentUser(null);
  };
 return (
   <>
     <div className="navigation">
       <Link className="logo-container" to="/">
         <CrownLogo className="logo" />
       </Link>
       <div className="nav-links-container">
         <Link className="nav-link" to="/shop">
           SHOP
         </Link>
         {currentUser ? <span className="nav-link" onClick={handleSignOut}>SIGN OUT</span> : <Link className="nav-link" to="/auth">
           SIGN IN
         </Link>}
           <CartIcon />
       </div>
     </div>
   <Outlet></Outlet>
   </>
 );
};


export default Navigation;