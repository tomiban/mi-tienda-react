import "./FavoriteList.css"

import { useFavoritesContext } from "../../../context/FavContext";
import { Link } from "react-router-dom";

const FavoriteList = () => {

  const { favorites } = useFavoritesContext();
  
  return (
    <>
					{favorites.length ? (
						<>
							<div className='row-product'>
								{favorites.map(product => (
									<div className='cart-product' key={product.id}>
                    <div className='info-cart-product'>
                      <div className="img-producto-carrito">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="product-body-favorito">
                      <p className='titulo-producto-carrito'>
												{product.title}
											</p>
											<span className='precio-producto-carrito'>
												 $ {product.price}
                      </span>
                      
                        <Link to={`PreEntrega2Banchio/item/${product.id}`}><button className="btn-producto-favorito ms-2">Comprar</button></Link>
                  
                      </div>
										</div>
									</div>
								))}
							</div>

						
						</>
					) : (
						<p className='text-dark text-center pt-3'>No tienes favoritos</p>
					)}
				</>
		
  );
};
export default FavoriteList;
