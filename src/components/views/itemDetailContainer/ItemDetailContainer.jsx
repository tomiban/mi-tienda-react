import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


import './ItemDetailContainer.css';

import ItemDetail from './itemDetail/itemDetail';
import Loading from '../../loading/Loading';

const ItemDetailContainer = () => {

	const [loading, setLoading] = useState(true);

	const [product, setProduct] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const querydb = getFirestore()
		const queryDoc = doc(querydb, 'listaProductos', id)
		getDoc(queryDoc)
			.then(res => setProduct({id: res.id, ...res.data()})
		);
		setLoading(false);
	}, [id]);

	return (
		<section className="item-container min-vh-100">
			{loading ? <Loading /> : <ItemDetail key={product.id} data={product}></ItemDetail>}
		</section>
	);
};
export default ItemDetailContainer;
