import {useParams} from "react-router-dom";
import Item from "../item/Item";


const ItemList = ({ data = []}) => {
  
  return (
    data.map(producto => <Item key={producto.id} data={producto} />)
      
  );
};
export default ItemList;
