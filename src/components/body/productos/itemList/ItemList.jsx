import Item from "../item/Item";


const ItemList = ({ data = [], categoria }) => {
  
  const listaPorCategoria = data.filter(producto => producto.category == categoria)


  return (
    
    listaPorCategoria.map(producto => <Item key={producto.id} data={producto} />)
      
  );
};
export default ItemList;
