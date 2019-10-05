import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home" className="menuTop">
          Dungeons & Dragons
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
        <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="/home">Home</NavDropdown.Item>
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
        <NavDropdown.Item href="/charbuild">
            Character Page</NavDropdown.Item>
            <NavDropdown.Item href="/classinfo">Class Info</NavDropdown.Item>
      </NavDropdown>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/charbuild">
            Character Page</Nav.Link>
          <Nav.Link href="/classinfo">Class Info</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNavbar;

