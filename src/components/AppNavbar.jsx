import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router";

function AppNavbar({ cart }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand 
          as={NavLink}
          to='/'
        >
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          ShopEasy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={NavLink}
              to='/products'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Products
            </Nav.Link>
            <Nav.Link 
              as={NavLink}
              to='/bestsellers'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Bestsellers
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              as={NavLink}
              to='/cart'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Cart ({cart.length})
            </Nav.Link>
            <Nav.Link 
              as={NavLink}
              to='/account'
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Your account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;