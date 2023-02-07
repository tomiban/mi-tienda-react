import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./Item.css";

import FavWidget from "../../../header/favwidget/FavWidget";

const Item = ({ data }) => {

	const [isFav, setIsFav] = useState(data.isFav || false);

	const toggleFav = () => {
        setIsFav(!isFav);
	};
	
	return (
		<div className='card-product'>
			<div className='card-product-top'>
				<span className={isFav ? "isFav" : "noFav" } >
					<FavWidget product={data} isFav={isFav} toggleFav={toggleFav} />
				</span>
			</div>
			<div className='card-product-img'>
				<img
					src={data.image}
					alt=''
				/>
			</div>

			<div className='card-product-body'>
				<h5 className='card-product-title '>{data.title}</h5>
				<span className='card-product-text '>$ {data.price}</span>
				<div className='card-product-link'>
					<Link
						to={`/PreEntrega2Banchio/item/${data.id}`}
						className='btn btn-primary px-4 card-link'>
						Comprar{" "}
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Item;
