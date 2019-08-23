import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavBar (){
  return (
    <Navbar className='navbar'bg='light' expand="lg">
        <Navbar.Brand><h2 className="ml-4 font-weight-bold">LUXURY DETAILING</h2></Navbar.Brand>
        <Nav.Item>
           <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/'>Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/'>Contact</Nav.Link>
        </Nav.Item>
      </Navbar>
  )
}
export default NavBar;