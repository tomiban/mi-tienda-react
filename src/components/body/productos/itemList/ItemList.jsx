import Item from "../item/Item";


const ItemList = ({ data = []}) => {
  
  return (
    data.map(producto => <Item key={producto.id} data={producto} />)
      
  );
};
export default ItemList;
