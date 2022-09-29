import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";

const CartProductCard = () => {
  return (
    <div className="myCard mb-4">
      <img
        src="https://thumbs.dreamstime.com/b/young-asia-woman-workin-online-e-commerce-shopping-home-startup-fashion-cloth-business-preparing-many-parcel-box-delivery-246599520.jpg"
        alt=""
        className="rounded itemImg"
      />

      <div className=".btnGroup">
        <button className="btn btn-primary me-2">-</button>
        <span>6</span>
        <button className="btn btn-primary ms-2">+</button>
      </div>

      <div className="btn btn-danger">
        <FaTrash />
      </div>
      
    </div>
  );
};
export default CartProductCard;
