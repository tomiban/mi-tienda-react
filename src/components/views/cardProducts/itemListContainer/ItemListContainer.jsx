import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { productos } from '../../../../data/productos';
import Loading from '../../../loading/Loading';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = () => {
	const [data, setData] = useState();
	const { categoryId } = useParams();

	useEffect(() => {
		setData(
			categoryId
				? productos.filter(producto => producto.category === categoryId)
				: productos,
		);
	}, [categoryId]);

	return (
		<section className='items-container min-vh-100'>
			<div className='cards'>
				{data ? <ItemList data={data}></ItemList> : <Loading />}
			</div>
		</section>
	);
};

export default ItemListContainer;
