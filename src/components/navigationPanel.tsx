import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationPanel() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ gap: '1rem' }}>
                    <Nav.Link as={Link} to="/">Объявления</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Заказы</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationPanel;
