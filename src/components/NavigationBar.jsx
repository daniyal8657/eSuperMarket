import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink to="/welcome">
            <Navbar.Brand href="/welcome">DAVID's eStore</Navbar.Brand>
          </NavLink>
          <Nav>
            <NavLink to="/home">Shopping</NavLink>
            <NavLink to="/newPage">New Page</NavLink>
            {/* <NavLink to="/productDetails">Product Details</NavLink> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
