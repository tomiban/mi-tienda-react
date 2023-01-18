import './Item.css';
import ItemCount from '../itemCount/ItemCount';
import FavWidget from '../../../header/favwidget/FavWidget'

const Item = ({ data }) => {
	const onAdd = cantidad => {
		console.log('Compraste ' + cantidad + ' unidades');
	};

	return (
		<div className="card">
			<div className="card-fav-ico">
				<span ><FavWidget /></span>
			</div>
			<div className="card-img">
				<img src={data.image} alt="" />
			</div>

			<div className="card-body">
				<div className="card-title">
					<p className="card-title">{data.title}</p>
				</div>

				<span className="card-price">$ {data.price}</span>
				<ItemCount stock={7} initial={1} onAdd={onAdd} className="card-quantity" ></ItemCount>
			</div>
		</div>
	);
};
export default Item;
