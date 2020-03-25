import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
