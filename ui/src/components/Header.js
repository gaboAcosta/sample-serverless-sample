
import React, { useState } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const logout = () => {
  sessionStorage.setItem('token', '');
}

const Header = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  if (redirectToLogin) {
    logout()
    window.location.href = '/login'
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/" className={'navbar-brand'}>
          e-nventario
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/users" className={'nav-link'}>Users</Link>
          <Button
            variant={"secondary"}
            style={{ position: 'fixed', right: '1em' }}
            onClick={()=>setRedirectToLogin(true)}
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
