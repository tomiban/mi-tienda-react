import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import ItemCount from "../itemCount/ItemCount";
import { useCartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";
import Loading from "../../../loading/Loading";

import "./ItemDetail.css"
const ItemDetail = ({ data }) => {
	const { addProduct } = useCartContext();
	const { title, price, image, description, category, rate } = data;
	const [goToCart, setGoToCart] = useState(false);

	const [loading, setLoading] = useState(true);


	const onAdd = (count) => {
		setGoToCart(true);
		addProduct(data, count);
	};

	const botones = () => {
		return (
			<>
				<Link
					to='/mi-tienda-react'
					className=''>
					<Button variant='primary'>Seguir comprando</Button>
				</Link>
				<Link
					to='/mi-tienda-react/cart'
					className='mx-3'>
					<Button variant='outline-success'>Ir al carrito</Button>
				</Link>
			</>
		);
	};

	return (
		<div className='container-fluid py-5'>
			<div className='row'>
				<div className='col-md-6 position-relative'>
					{loading && <Loading />}
					<img
						src={image}
						alt={title}
						className='img-fluid max-img-size'
						onLoad={() => setLoading(!loading)}
					/>
				</div>
				<div className='col-md-6 mt-2'>
					<h4 className='text-uppercase text-black-50'>{category}</h4>
					<h1 className='display-6'>{title}</h1>
					<p className='lead fw-bolder'>
						Rating {rate}
						<AiFillStar className='text-warning mb-1 mx-1' />
					</p>
					<h3 className='display-6 fw-bold my-3'>$ {price}</h3>
					<p className='lead'>{description}</p>

					{goToCart ? (
						botones()
					) : (
						<ItemCount
							initial={1}
							stock={7}
							onAdd={onAdd}
							className=''
						/>
					)}
				</div>
			</div>
		</div>
	);
};
export default ItemDetail;
