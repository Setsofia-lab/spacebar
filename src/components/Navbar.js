import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ color: "#ff5a60", fontSize: "36px" }}>
          spacebar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Nav.Link href="/space">Event Spaces</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="">Spacebar Moments</NavDropdown.Item>
            </NavDropdown>

            <button
              className="btn btn-brand"
              onClick={() => navigate("/listing")}
              style={{
                backgroundColor: "#ff5a60",
                color: "#fff",
                fontWeight: "500",
                fontSize: "12px",
                textTransform: "uppercase",
                padding: "12px 28px",
                borderRadius: "30",
              }}
            >
              Add Listing
            </button>

            <button
              className="btn btn-brand"
              onClick={() => navigate("/signup")}
              style={{
                backgroundColor: "#ff5a60",
                color: "#fff",
                fontWeight: "500",
                fontSize: "12px",
                textTransform: "uppercase",
                padding: "12px 28px",
                borderRadius: "30",
                marginLeft: "10px",
              }}
            >
              Sign Up
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
