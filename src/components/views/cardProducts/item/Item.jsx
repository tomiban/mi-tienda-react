import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import "./Item.css";

import FavWidget from "../../../header/favwidget/FavWidget";
import { useFavoritesContext } from "../../../../context/FavContext";

const Item = ({ data }) => {
	const { favorites, setFavorites } = useFavoritesContext();
  
	const [isFav, setIsFav] = useState(
	  favorites.some(fav => fav.id === data.id) // devuelve true si el producto en cuestion se encuentra en el array favorites
	);
  
	const toggleFav = () => {
	  if (isFav) { // si es true, ya fue agregado por lo que al clickear, lo eliminamos con un filter
		setFavorites(favorites.filter(fav => fav.id !== data.id)); 
	  } else {
		setFavorites([...favorites, data]); // caso contrario, lo agregamos
	  }
	  setIsFav(!isFav); // invertimos el estado para cambiar las clases
	};
  
	return (
	  <div className='card-product'>
		<div className='card-product-top'>
		  <span className={isFav ? "isFav" : "noFav"}>
			<FavWidget product={data} isFav={isFav} toggleFav={toggleFav} />
		  </span>
		</div>
		<div className='card-product-img'>
		  <img src={data.image} alt='' />
		</div>
  
		<div className='card-product-body'>
		  <h5 className='card-product-title '>{data.title}</h5>
		  <span className='card-product-text '>$ {data.price}</span>
		  <div className='card-product-link'>
			<Link
			  to={`/PreEntrega2Banchio/item/${data.id}`}
			  className='btn btn-primary px-4 card-link'>
			  Comprar{" "}
			</Link>
		  </div>
		</div>
	  </div>
	);
  };
export default Item;
