import React, { useState, useEffect } from 'react';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr"
import {Button} from "react-bootstrap"
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(stock === 0 ? stock : parseInt(initial));

	const decrementar = () => {
		setCount(count - 1);
	};

	const aumentar = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<div className="box-quantity">
				<button className='btn-quantity' onClick={aumentar} disabled={count >= stock}>
                <GrFormAdd className='icono'/>
				</button>
				<span>{count}</span>
				<button className='btn-quantity' onClick={decrementar} disabled={count <= 1}>
					<GrFormSubtract className='icono' ></GrFormSubtract>
				</button>
			</div>
			<div className='w-100'>
				<Button
					variant='dark'
					size="sm"
					className="mt-2 px-1 py-2"
					disabled={stock <= 0}
					onClick={() => onAdd(count)}>
					Agregar a carrito
				</Button>
			</div>
		</div>
	);
};
export default ItemCount;
