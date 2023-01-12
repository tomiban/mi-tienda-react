import './Item.css';
import ItemCount from '../itemCount/ItemCount';

const Item = ({ data }) => {
	const onAdd = cantidad => {
		console.log('Compraste ' + cantidad + ' unidades');
	};

	return (
		<div className="card">
			<div className="card-img">
				<img src={data.image} alt="" />
			</div>
			<div className="card-body">
				<p>{data.title}</p>
				<span>$ {data.price}</span>
			</div>

			<ItemCount className="card-btn" initial={1} stock={8} onAdd={onAdd} />
		</div>
	);
};
export default Item;
