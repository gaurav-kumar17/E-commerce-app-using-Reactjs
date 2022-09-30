import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./CartProduct/Cart";
import Home from "./Pages/Home";
import Example from "./useRef";
import Component1, { Component2, Component3, Component4 } from "./Context";

export const CartContext = createContext();
function App() {
  const [items, setItems] = useState(["prod1","prod2","prod3","prod4"]);

  return (
    <>
      <CartContext.Provider value={items}>
        <Header />
        {/* <Example/> */}
        <Component1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}
export default App;
