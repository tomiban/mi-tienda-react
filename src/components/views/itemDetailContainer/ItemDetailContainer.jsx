import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ItemDetailContainer.css';

import ItemDetail from './itemDetail/itemDetail';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	console.log(id)
	useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(item=> {
        setProduct(<ItemDetail key={item.id} data={item}></ItemDetail>);
      })
	}, [id]);

	return (
		<section className="item-container">
      {product}
		</section>
	);
};
export default ItemDetailContainer;
