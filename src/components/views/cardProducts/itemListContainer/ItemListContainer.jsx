import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


import ItemList from '../itemList/ItemList';
import Loading from '../../../loading/Loading';
import './ItemListContainer.css';

export const ItemListContainer = () => {

	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {

		const querydb = getFirestore();
		const queryCollection = collection(querydb, 'listaProductos');
		
		
		if (categoryId) {
			const queryFilter = query(queryCollection, where('category', '==', categoryId)) 
			
			getDocs(queryFilter)
			.then(res => setData(res.docs.map(product => (({ id: product.id, ...product.data() })))));
		} else {
			getDocs(queryCollection)
			.then(res => setData(res.docs.map(product => (({ id: product.id, ...product.data() })))));
		}

	
		
		
		
			setLoading(false);
		
	}, [categoryId]);
	


	return (
		<section className='items-container min-vh-100'>
			<div className="cards">
				{loading ? <Loading /> : <ItemList data={data}></ItemList>}
			</div>

		</section>
	);

};

export default ItemListContainer;