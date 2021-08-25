import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./components/Home";
import { NewPage } from "./components/NewPage";
import { TopNav } from "./components/TopNav";
import { NavigationBar } from "./components/NavigationBar";
import { ProductDetails } from "./components/ProductsDetails";
import { WelcomePage } from "./components/WelcomePage";
import { CategoryPage } from "./components/CategoryPage";
import { MensCategory } from "./components/MensCategory";

export const App = () => {
  const [prod, setProd] = useState([]);
  return (
    <div>
      <Router>
        <NavigationBar />

        <Switch>
          <div>
            <Route path="/">
              <Redirect to="welcome" />
            </Route>
            <Route path="/welcome">
              <WelcomePage />
            </Route>
            <Route path="/home">
              <Home prod={prod} setProd={setProd} />
            </Route>
            <Route path="/newPage">
              <NewPage />
            </Route>
            <Route path="/productDetails">
              <ProductDetails />
            </Route>
            <Route path="/category">
              <CategoryPage prod={prod} setProd={setProd} />
            </Route>
            <Route path="/mens">
              <MensCategory />
            </Route>
          </div>
        </Switch>
      </Router>
      {/* <img src="2.jpg" style={{ background: "100%" }} /> */}
    </div>
  );
};
