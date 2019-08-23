import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Button from 'react-bootstrap/Button'
import './HomePage.css';

function HomePage () {
  // const navbarStyle = {
  //   backgroundColor:
  // }
  return (
    <div className='hero'>
      <div className="hero-overlay">
      <h1>Perfected Hands</h1>
      <Navbar className="bg-light justify-content-between" expand="lg">
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
      </div>
      {/* <Jumbotron>  
      <h1>Perfect Hands Luxury</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
 </Jumbotron> */}

    </div>
  )
}
export default HomePage;