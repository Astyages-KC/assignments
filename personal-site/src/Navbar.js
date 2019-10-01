import React from 'react';
import { Nav, Navbar} from "react-bootstrap";

const AppNavbar = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
            
            Clark Real Estate
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/agentPageForm">Agent Page</Nav.Link>
        </Nav>
        
      </Navbar>
      </>
    )
}

export default AppNavbar

