import React from "react";
import CartProductCart from "./CartProductCard"
import "./Cart.css";

const Cart=()=>{

    return(
        <div className="container pb-4">
            <div className="row">
                <div className="col-9">
                    <CartProductCart/>
                    <CartProductCart/>
                    <CartProductCart/>
                    <CartProductCart/>
                </div>  

                <div className="col-3">
                    
                </div>
            </div>
        </div>
    )
}
export default Cart;