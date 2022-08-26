import React from "react";
import logo from "../../assets/logo.png";
import { Navbar, Nav, Button } from "react-bootstrap";
//https://react-bootstrap.github.io/components/navbar/

import "../../styles/navbar.css";
const NavbarEclipse = (props) => {
  const { setScreen } = props;
  return (
    <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand className="navbar-brand" href="/">
        <div className="nav-header-logo">
          <img src={logo} />
          <div className="nav-header-logo-text">
            Asociación Argentina de Astronomía
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="link-container">
        <Nav.Link onClick={() => {
          setScreen(1);
          window.scrollTo(0, 500);
          }}>
          <p style={{ fontSize: 'initial !important' }}>Astronomía</p>
        </Nav.Link>
        <Nav.Link onClick={() => {
          setScreen(2);
          window.scrollTo(0, 500);
          }}>
          <p style={{ fontSize: 'initial !important' }}>Eclipse</p>
        </Nav.Link>
        <Nav.Link onClick={() => {
          setScreen(3);
          window.scrollTo(0, 500);
          }}><p style={{ fontSize: 'initial !important' }}>Totalidad</p></Nav.Link>
        <Nav.Link onClick={() => {
          setScreen(4);
          window.scrollTo(0, 500);
          }}>
          <p style={{ fontSize: 'initial !important' }}>Eclipse Patagónico</p>
        </Nav.Link>
        <Nav.Link onClick={() => {
          setScreen(5);
          window.scrollTo(0, 500);
          }}><p style={{ fontSize: 'initial !important' }}>Educación</p></Nav.Link>
        <Nav.Link onClick={() => {
          setScreen(6);
          window.scrollTo(0, 500);
          }}>
          <p style={{ fontSize: 'initial !important' }}>Contacto</p>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEclipse;
