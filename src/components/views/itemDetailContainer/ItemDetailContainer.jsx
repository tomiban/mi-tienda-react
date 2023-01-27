import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.css';

import ItemDetail from './itemDetail/itemDetail';
import Loading from '../../loading/Loading';

const ItemDetailContainer = () => {

	const [loading, setLoading] = useState(true);
	
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then(res => res.json())
			.then(item => {
				setProduct(<ItemDetail key={item.id} data={item}></ItemDetail>);
				setLoading(false)
			});
	}, [id]);

	return (
		<section className="item-container min-vh-100">
			{loading ? <Loading/> : product  }
		</section>
	);
};
export default ItemDetailContainer;
