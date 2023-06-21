import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Outlet } from 'react-router-dom';

export default function MyNavbar() {
  
  return (
      <div>
        <Navbar expand='lg' className="bg-body-tertiary mb-3">
          <Container fluid className='justify-content-start'>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
            <Navbar.Brand href="/" className='px-3'>Mitra</Navbar.Brand>
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-lg'
              aria-labelledby='offcanvasNavbar-expand-lg'
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbar-expand-lg'>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as={NavLink} to='/'>Posts</Nav.Link>
                  <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Container>
          <Outlet/>
        </Container>
      </div>
  )
}
