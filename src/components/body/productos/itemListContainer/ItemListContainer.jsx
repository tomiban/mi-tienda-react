import React, {useState, useEffect} from "react";
import ItemList from "../itemList/ItemList";

import "./ItemListContainer.css"

export const ItemListContainer = () => {

  

    const [data, setData] = useState();
    
    useEffect(() => {
      fetchData()
    }, []);
    
    const fetchData = async() => {
        const data = await fetch("https://fakestoreapi.com/products");
        const productos = await data.json()
        setData(productos)
   }

    return (
        <div className="">
           <div className="item-container"> <ItemList data={data} /></div>
            </div>
    );
};

export default ItemListContainer;