import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { House } from 'react-bootstrap-icons'; // House icon
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#home">World Wide Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between" >
            <Nav.Link as={Link} to="/London">
              <House className="me-3" /> 
            </Nav.Link>
            <Nav.Link as={Link} to="/this-year">
              This Year Wrapped
            </Nav.Link>
            <Nav.Link as={Link} to="/next-trip">
              Next Trip
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
