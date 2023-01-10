import React, {useState, useEffect} from "react";
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd}) => {

   
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
            <button onClick={ aumentar } disabled={count >= stock} >+</button>
			<span>{count}</span>
            <button onClick={decrementar} disabled={count <= 1 }>-</button>
			<div>
                <button className="btnAgregar" disabled={stock <= 0} onClick={ () => onAdd(count)}>Agregar al carrito</button>
			</div>
		</div>
	);
};
export default ItemCount;
