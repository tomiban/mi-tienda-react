import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../itemList/ItemList';

import './ItemListContainer.css';

export const ItemListContainer = () => {

	const [data, setData] = useState();

	const { categoryId } = useParams();

	useEffect(() => {
		fetchData();
	}, [categoryId]);

	const fetchData = async () => {
		const data = await fetch(categoryId ? `https://fakestoreapi.com/products/category/${categoryId}`: 'https://fakestoreapi.com/products/');
		const productos = await data.json();
		setData(<ItemList data={productos}></ItemList>);
	};


	return (
		<section className='items-container'>
		<div className="cards">
			{data}
		</div>

		</section>
	);
};

export default ItemListContainer;
