import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar collapseOnSelect id="navbg" expand="lg" bg="warning">
            <Link to="/">
              <Navbar.Brand id="navtext">Open Source</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Navbar.Text id="navtext">
                Contributed to:{" "}
                <a href="#login" id="navtext">
                  Open Source
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Navbars;
