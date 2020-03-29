import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartContextProvider from './contexts/CartContext';
import ProductContextProvider from './contexts/ProductContext';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <CartContextProvider>
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
