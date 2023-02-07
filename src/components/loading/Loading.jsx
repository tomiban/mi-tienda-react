import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
    return (
        
        <div className="d-flex align-items-center justify-content-center me-5 mb-5" style={{
            height: "25vw"
        }}>
            <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
            </div>
       
    );
};
export default Loading;
