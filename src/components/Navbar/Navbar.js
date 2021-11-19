import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Button from "../Button";
import logo from "../../assets/main-logo.png";
import "./navbar.scss";

const Navb = () => {
  return (
    <div className="container">
      <Navbar className="nav" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav nav-fill mx-auto w-50">
            <li className="nav-item">
              <a href="/">About</a>
            </li>
            <li className="nav-item">
              <a href="/">Features</a>
            </li>
            <li className="nav-item">
              <a href="/">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="/">Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="/">Help</a>
            </li>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link className="mx-4 fw-bold">Sing In</Nav.Link>
            <Button styles="outlined-button" text="Sign Up" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navb;
