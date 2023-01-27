//1) Modulos
import React, { useState } from "react";
import { useCartContext } from "../../../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

//2) Estilos
import "./ItemCart.css";

// 3) Componentes

const ItemCart = ({ product }) => {

  const { removeProduct } = useCartContext();

  return (


    <div className="card rounded-3 mb-0">
      <div className="card-body p-3">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2 text-center">
            <img src={product.image}
              className="img-fluid rounded-3 img-carrito" />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-4">
            <p className="lead fw-normal m-0">{product.title.substring(0, 20)}</p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 d-flex flex-column justify-content-center align-items-center text-center my-2">
              <small className="text-muted">Cantidad</small>
              <input className="form-control input-sm text-center fw-bold" disabled value={ product.quantity } />
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2
           d-flex flex-column justify-content-center align-items-center text-center">
            <small className="text-muted">Subtotal</small>
            <input className="form-control input-sm text-center fw-bold" disabled value= {'$ ' + product.price } />
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-center mt-3">
            <span className="text-danger btn-remove" onClick={() => removeProduct(product.id)}><FaTrash></FaTrash ></span>
          </div>
        </div>
      </div>
    </div>



  );
};
export default ItemCart;
