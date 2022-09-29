import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./CartProduct/Cart";
import Home from "./Pages/Home";
import Example from "./Example";
function App() {
  return (
    <>
      <Header />
      <Example/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}
export default App;
