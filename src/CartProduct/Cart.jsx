import React, { useContext } from "react";
import CartProductCart from "./CartProductCard"
import "./Cart.css";
import { CartContext } from "../App";

const Cart=()=>{
    const products=useContext(CartContext);
    console.log(products);
    return(
        
    )
}
export default Cart;