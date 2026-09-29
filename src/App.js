import { Route, Routes } from "react-router-dom";
import Home from "./routes/homes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
 onAuthStateChangedListener,
 createUserDocumentFromAuth,
 addCollectionAndDocuments,
 getCategoriesAndDocuments,
} from "./utlis/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action.js";
import { useDispatch } from "react-redux";
import { SHOP_DATA } from "./shop-data.js";
import { setCategories } from "./store/categories/categories.action.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   const unsubscribe = onAuthStateChangedListener((user) => {
    if (user) {
     createUserDocumentFromAuth(user);
    }
    dispatch(setCurrentUser(user));
   });
   // console.log(unsubscribe);

   return unsubscribe;
  }, []);
  useEffect(() => {
   addCollectionAndDocuments("categories", SHOP_DATA);
   const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    // console.log(categoryMap);
    dispatch(setCategories(categoryMap));
   };
   getCategoriesMap();
  }, []);
 return (
  <>
   <Routes>
    <Route
     path="/"
     element={<Navigation />}>
     <Route
      index
      element={<Home />}
     />
     <Route
      path="/shop/*"
      element={<Shop />}
     />
     <Route
      path="/checkout"
      element={<Checkout />}
     />
     <Route
      path="/auth"
      element={<Authentication />}
     />
    </Route>
   </Routes>
  </>
 );
};

export default App;
