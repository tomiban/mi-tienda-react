import React from "react";

import { BsCart4 } from "react-icons/bs";

import { useCartContext } from "../../../context/CartContext";
import "./CartWidget.css";



export const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <>
            <BsCart4 className="cart-icon" />
            <span className="badge bg-warning p-1">{totalProducts() || ''}</span>
        </>
    );
};

export default CartWidget;