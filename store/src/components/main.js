import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Clothes from './Clothes';
import Shoes from './Shoes';
import ProductDetails from './ProductDetails';
import Login from './Login';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/clothes" component={Clothes} />
      <Route exact path="/shoes" component={Shoes} />
      <Route path="/shoes/:id" component={ProductDetails} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Main;
