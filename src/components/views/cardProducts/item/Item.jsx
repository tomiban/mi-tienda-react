import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './Item.css';

import FavWidget from '../../../header/favwidget/FavWidget';

const Item = ({ data }) => {


	return (
		<div className="card-product">
			<div className="card-product-top">
				<span className="fav-ico">
					<FavWidget />
				</span>
			</div>
			<div className="card-product-img">
				<img src={data.image} alt="" />
			</div>

			<div className="card-body d-flex flex-column align-items-center justify-content-end text-center">
				<h5 className="card-title mt-3 mb-2">{data.title.substring(0, 20)}</h5>
				<span className="card-text lead mb-2 fw-bold">$ {data.price}</span>
				<div className="card-link">
				<Link to={`/item/${data.id}`} className="btn btn-primary px-4 card-link">
					Comprar	{' '}
				</Link>
				</div>
			</div>
		</div>


	);
};
export default Item;
