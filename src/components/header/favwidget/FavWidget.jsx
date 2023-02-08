import React, { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import "./FavWidget.css";

import { useFavoritesContext } from "../../../context/FavContext";

const FavWidget = ({ product, isFav, toggleFav}) => {
	const { addToFavorites, favorites } = useFavoritesContext();
    
    return (
        <span onClick={() => {
            addToFavorites(product) ;
            toggleFav();
        }}>
             {isFav ? <BsSuitHeartFill /> : <BsSuitHeart />}
        </span>
    );
};

export default FavWidget;
