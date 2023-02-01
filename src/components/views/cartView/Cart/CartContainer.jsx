//1) Modulos
import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useCartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//2) Estilos
import "./CartContainer.css";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// 3) Componentes

const Cart = () => {

    const MySwal = withReactContent(Swal);

    const { cart, totalPrice } = useCartContext();


    const order = {
        buyer: {
            name: 'Tomas Banchio',
            email: 'tbanchio@15@gmail.com',
            phone: '3459212428',
            address: 'Gabarret 1824',
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    };


    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
       
        MySwal.fire({
            icon: 'question',
            title: <p>¿Estás seguro de confirmar la compra?</p>,
            text: 'Su orden aún no ha sido procesada...',
            showDenyButton: true,
            denyButtonText: 'No',
            confirmButtonText: 'Sí',
            confirmButtonColor: '#198754'
        }).then(res => {
            if (res.isConfirmed) {
                addDoc(orderCollection, order)
                .then(({ id }) => console.log(id)
                );
                MySwal.fire({
                    icon: 'success',
                    title: <p>¡Compra realizada!</p>
                }) 
            } 
        })

    };

    if (cart.length === 0) {
        return (
            <div className="container vh-100 ">
                <div className="d-flex flex-column justify-content-end align-items-center p-5 m-5">
                <p className="lead fw-bold text-center my-4">Carrito vacío..</p>
                <Link className="btn btn-outline-primary" to="/">Continuar comprando</Link>
                </div>
            </div>
        );
    }

    return (
        <section className="min-vh-100">
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-xl-10">

                        <div className="mb-4">
                            <h3 className="fw-normal mb-0 text-black">Carrito de compras</h3>
                        </div>

                        {cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)}
                    </div>


                    <div className="col-12 col-xl-7">
                        <div className="card mt-3">
                            <div className="card-body p-4 d-flex justify-content-around">
                                <div className="">
                                    <p className="mb-0 me-5 d-flex align-items-center">
                                        <span className="lead text-muted me-2">Total del pedido:</span> <span
                                            className="lead fw-bold">$ {totalPrice().toFixed(2)}</span>
                                    </p>
                                </div>
                                <div className="">
                                    <Button variant="dark" onClick={handleClick}>Pagar</Button>
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
