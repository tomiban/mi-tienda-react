import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./Item.css";

import FavWidget from "../../../header/favwidget/FavWidget";

const Item = ({ data }) => {
	return (
		<div className='card-product'>
			<div className='card-product-top'>
				<span className='fav-ico'>
					<FavWidget />
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
						to={`/item/${data.id}`}
						className='btn btn-primary px-4 card-link'>
						Comprar{" "}
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Item;
