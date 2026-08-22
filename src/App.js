import { Route, Routes } from "react-router-dom";
import Home from "./routes/homes/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
 return (
  <>
   <Routes>
    <Route
     path="/"
     element={<Navigation />}>
     <Route
      index
      path="/home"
      element={<Home />}></Route>
    </Route>
   </Routes>
  </>
 );
};

export default App;
