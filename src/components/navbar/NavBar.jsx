import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CartWidget from "../cartwidget/CartWidget";
import Badge from 'react-bootstrap/Badge';


function CollapsibleExample() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="warning" variant="yellow">
			<Container className=''>
				<Navbar.Brand href="#home">
					<img
						src="../../logo.svg"
						width="30"
						height="30"
						color="blue"
						className="d-inline-block align-top mx-2"
						alt="Pet Shop logo"
					/>
					Pet Shop
				</Navbar.Brand>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Productos..."
						className="me-1"
                        aria-label="Search"
                       
					/>
					<Button variant="outline-primary">Buscar</Button>
                </Form>
                
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="d-flex justify-content-end" id="responsive-navbar-nav">
					<Nav >
						<NavDropdown title="Favoritos" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Item</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
                            Item
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Item</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
                            Item
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title="Mi cuenta" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Compras</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Ayuda
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Mi Perfil</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Cerrar Sesión
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="#features" className=''>
						
                                <CartWidget></CartWidget>
								<Badge bg="primary">0</Badge>
							
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
