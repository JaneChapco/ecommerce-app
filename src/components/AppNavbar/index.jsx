import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import "./index.css";

function AppNavbar({ favourites = [], cart = [] }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt=""
            src="/fork-and-spoon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          The Kitchen Shelf
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/favourites"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Favourites ({favourites.length})
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart ({cart.length})
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/account"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Hi, Jane
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
