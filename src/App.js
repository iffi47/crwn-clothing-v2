import { Route, Routes } from "react-router-dom";
import Home from "./routes/homes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
const App = () => {
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
    </Route>
    <Route
     path="/auth"
     element={<Authentication />}
    />
   </Routes>
  </>
 );
};

export default App;
