//1) Modulos
import React from "react";
import { useCartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//2) Estilos
import "./CartContainer.css";
import ItemCart from "../ItemCart/ItemCart";

// 3) Componentes

const Cart = () => {


    const { cart, totalPrice } = useCartContext();


    if (cart.lengt
    ) {
        return (
            <div className="container">
                <p>Carrito vacío..</p>
                <Link className="btn btn-outline-success" to="/">Continuar comprando</Link>
            </div>
        );
    }

    return (
        <section className="min-h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-xl-10">

                        <div className="mb-4">
                            <h3 className="fw-normal mb-0 text-black">Carrito de compras</h3>
                        </div>

                        {cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)}
                        </div>


                    <div className="col-12 col-xl-7">
                    <div className="card">
                            <div className="card-body p-4 d-flex justify-content-around">
                                <div className="">
                                    <p className="mb-0 me-5 d-flex align-items-center">
                                        <span className="lead text-muted me-2">Total del pedido:</span> <span
                                            className="lead fw-bold">$ {totalPrice().toFixed(2)}</span>
                                    </p>
                                </div>
                                <div className="">
                                    <Button variant="dark" >Pagar</Button>
                                </div>
                            </div>
                        </div>

                      </div>

                    
                </div>
            </div>
        </section>

    );
};
export default Cart;
