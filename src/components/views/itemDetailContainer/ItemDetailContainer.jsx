import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { productos } from '../../../data/productos';
import Loading from '../../loading/Loading';
import ItemDetail from './itemDetail/itemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState();
	const { id } = useParams();

	useEffect(() => {
		setProduct(productos.find(producto => producto.id === id));
	}, [id]);

	return (
		<section className='item-container min-vh-100'>
			{product ? (
				<ItemDetail key={product.id} data={product}></ItemDetail>
			) : (
				<Loading />
			)}
		</section>
	);
};

export default ItemDetailContainer;
