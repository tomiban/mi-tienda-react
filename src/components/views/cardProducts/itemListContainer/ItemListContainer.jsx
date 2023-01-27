import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../itemList/ItemList';
import Loading from '../../../loading/Loading';
import './ItemListContainer.css';

export const ItemListContainer = () => {

	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {

		fetch(categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : 'https://fakestoreapi.com/products/')
			.then(res => res.json())
			.then(productos => {
				setData(<ItemList data={productos}></ItemList>);
				setLoading(false);
			});
	}, [categoryId]);



	return (
		<section className='items-container min-vh-100'>
			<div className="cards">
				{loading ? <Loading /> : data}
			</div>

		</section>
	);

};

export default ItemListContainer;