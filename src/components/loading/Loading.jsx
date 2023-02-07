import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
    return (
        
            <div className="position-absolute top-100 start-50 translate-middle me-5 mb-5">
            <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
            </div>
       
    );
};
export default Loading;
