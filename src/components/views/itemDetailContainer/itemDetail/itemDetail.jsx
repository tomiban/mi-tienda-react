import "./ItemDetail.css";

const ItemDetail = ({data}) => {
    
    const {title, price, image, description, category, rating } = data

    return (
        <div className="itemDetail">
            
            <p>{title}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{description}</p>
            <p>Rating: { rating.rate }</p>
            <img src={image}></img>
      </div>
  );
};
export default ItemDetail;
