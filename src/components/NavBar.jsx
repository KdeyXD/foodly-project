import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import '../assets/css/NavBar.css' // Assuming you have a CSS file for styling
const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar px-4">
      <div className="d-flex align-items-center w-100 justify-content-between">
        {/* Logo in the center for mobile, left for desktop */}
        <div className="d-md-none flex-grow-1 d-flex justify-content-center">
          <Navbar.Brand href="#home">Foodly</Navbar.Brand>
        </div>
        <div className="d-none d-md-block">
          <Navbar.Brand href="#home" className="me-4">Foodly</Navbar.Brand>
        </div>
        {/* Search in the middle, only on desktop */}
        <Form className="flex-grow-1 mx-4 d-none d-md-block" style={{ maxWidth: 400 }}>
          <FormControl type="search" placeholder="Search food..." className="me-2" aria-label="Search" />
        </Form>
        {/* Cart and User Profile on the right, only on desktop */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <Nav.Link href="#cart" className="d-flex align-items-center">
            <span role="img" aria-label="cart">🛒</span>
          </Nav.Link>
          <Nav.Link href="#profile" className="d-flex align-items-center">
            <span role="img" aria-label="user">👤</span>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  )
}

export default NavBar
