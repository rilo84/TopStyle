import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './home';
import Cart from './cart';
import Clothes from './clothes';

const main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/clothes" component={Clothes} />
    </Switch>
  );
};

export default main;
