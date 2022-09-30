import React, { useContext } from "react";
import CartProductCart from "./CartProductCard"
import "./Cart.css";
import { CartContext } from "../App";

const Cart=()=>{
    const products=useContext(CartContext);
    console.log(products);
    return(
        <div className="container pb-4">
            <div className="row">
                <div className="col-9">
                    {products && products.map(()=>{
                        return <CartProductCart/>;
                    })}
                    
                </div>  

                <div className="col-3">
                    
                </div>
            </div>
        </div>
    )
}
export default Cart;