import "./Item.css";
import ItemCount from "../itemCount/ItemCount";



const Item = ({ data }) => {
    
    const onAdd = (cantidad) => {
        console.log('Compraste ' + cantidad + ' unidades')
    }
    
    return (
        <div className="card">
        <a href="" className="item">
            <img src={data.image} alt="" />
                <p>{data.title}</p>
            </a>
          <ItemCount initial={1} stock={8} onAdd={onAdd} />  
        </div>
  );
};
export default Item;
