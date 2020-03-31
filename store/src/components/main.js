import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Clothes from './Clothes';
import Shoes from './Shoes';
import Search from './Search';
import ProductDetails from './ProductDetails';
import Login from './Login';
import OrderConfirmation from "./OrderConfirmation";
import Register from "./Register";
import MyPage from "./MyPage";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/clothes" component={Clothes} />
      <Route exact path="/search/" component={Search} />
      <Route path="/search/:word" component={Search} />
      <Route exact path="/shoes" component={Shoes} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/confirmation" component={OrderConfirmation} />
      <Route path="/mypage" component={MyPage} />
    </Switch>
  );
};

export default Main;
