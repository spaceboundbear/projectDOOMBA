import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand className="d-none d-sm-block" to="/about">
          project.DOOMBA
        </Navbar.Brand>
        <Nav className="justify-content-end  mx-auto mx-md-0">
          <NavLink className="nav-link" to="/home">
            HOME
          </NavLink>
          <NavLink className="nav-link" to="/drive">
            DRIVE
          </NavLink>
          <NavLink className="nav-link" to="/data">
            DATA
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
