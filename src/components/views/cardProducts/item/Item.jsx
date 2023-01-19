import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import './Item.css';
import ItemCount from '../itemCount/ItemCount';
import FavWidget from '../../../header/favwidget/FavWidget';

const Item = ({ data }) => {
	const onAdd = cantidad => {
		console.log('Compraste ' + cantidad + ' unidades');
	};
	
	return (
		<div className="card">
			<div className="card-top">
				<span className='fav-ico'>
					<FavWidget />
				</span>
			</div>
			<div className="card-img">
				<img src={data.image} alt="" />
			</div>

			<div className="card-body">
				<div className="card-title">
					<p className="">{data.title}</p>
					<Link to={`/product/${data.id}`} className="card-link">Ver detalle </Link>
				</div>

				<span className="card-price">$ {data.price}</span>
				<ItemCount
					stock={7}
					initial={1}
					onAdd={onAdd}
					className="card-quantity"></ItemCount>
			</div>
		</div>
	);
};
export default Item;
