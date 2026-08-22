import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrownLogo } from "../../assets/images/007 crown.svg";

const Navigation = () => {
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
         <Link className="nav-link" to="/signin">
           SIGN IN
         </Link>
       </div>
     </div>
   <Outlet></Outlet>
   </>
 );
};


export default Navigation;