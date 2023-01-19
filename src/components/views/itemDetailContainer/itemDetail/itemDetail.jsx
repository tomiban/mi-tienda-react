import 'bootstrap/dist/css/bootstrap.min.css';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import {Container, Button} from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

const ItemDetail = ({ data }) => {
	const { title, price, image, description, category, rating } = data;
	console.log(rating);
    return (
        
		<Container className='py-5'>
			<div className="row py-5">
				<div className="col-md-6">
					<img src={image} alt={title} height="400px" width="400px"></img>
				</div>
				<div className="col-md-6 mt-2">
					<h4 className="text-uppercase text-black-50">{category}</h4>
					<h1 className="display-6">{title}</h1>
					<p className="lead fw-bolder">
						Rating {rating.rate && rating.rate}
						<AiFillStar className='text-warning mb-1 mx-1'/>
					</p>
                    <h3 className="display-6 fw-bold my-3">$ {price}</h3>
                    <p className="lead">{description}.</p>
                    <Button variant="dark" className='px-4 py-2'>Agregar al Carrito</Button>
                    <Button variant="outline-dark" className='ms-2 px-3 py-2'>Ir al Carrito</Button>
				</div>
			</div>
		</Container>
	);
};
export default ItemDetail;
