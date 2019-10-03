import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home" className="menuTop">
          Dungeons and Dragons Character builder
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/charbuild" style={{color: 'red'}}>
            Character Builder Page
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default AppNavbar;