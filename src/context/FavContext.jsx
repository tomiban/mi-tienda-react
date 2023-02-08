import React, { useState, useContext } from "react";

const FavoritesContext = React.createContext([]);

export const useFavoritesContext = () => useContext(FavoritesContext);

const FavoritesContextProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);
    
    const isInFavorites = (id) => favorites.find(fav => fav.id === id)
    
    const removeToFavorites = product => setFavorites(favorites.filter(favorito => favorito.id !== product.id))
    
    const addToFavorites = (product) => {
        if (isInFavorites(product.id)) {
            removeToFavorites(product)
        } else {
            setFavorites([...favorites, product]);
        }
    };
    
	return (
		<div>
			<FavoritesContext.Provider value={{favorites, setFavorites, addToFavorites }}>
				{children}
			</FavoritesContext.Provider>
		</div>
	);
};

export default FavoritesContextProvider;
