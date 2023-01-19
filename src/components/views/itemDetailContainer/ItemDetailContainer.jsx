import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.css';

import ItemDetail from './itemDetail/itemDetail';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);

	const { productId } = useParams();
	useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(item=> {
        setProduct(<ItemDetail key={item.id} data={item}></ItemDetail>);
      })
	}, [productId]);

	return (
		<section className="item-container">
      {product}
		</section>
	);
};
export default ItemDetailContainer;
