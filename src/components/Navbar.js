import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";




export default () => {
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/" style={{ color: "#ff5a60", fontSize: "36px" }}>
        <img src={require("../images/logo.svg")} alt="spacebar" style={{height:"35%" , width:"50%"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: "center" }}>
            <Nav.Link href="/space" style={{ fontSize: "16px" }}>Browse Spaces</Nav.Link>
            <Nav.Link href="/" style={{ fontSize: "16px" }}>Explore</Nav.Link>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="/blog" style={{ fontSize: "16px" }}>Blog</NavDropdown.Item>
              <NavDropdown.Item href="/contact" style={{ fontSize: "16px" }}>Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/moments" style={{ fontSize: "16px" }}>Spacebar Moments</NavDropdown.Item>
            </NavDropdown>

            <button
              className="btn btn-brand"
              onClick={() => navigate("/listing")}
              style={{
                fontFamily:"Source Sans Pro",
                backgroundColor: "#ff5a60",
                color: "#fff",
                fontWeight: "500",
                fontSize: "12px",
                textTransform: "uppercase",
                padding: "12px 28px",
                borderRadius: "30",
                width:"30%"
              }}
            >
              ADD LISTING
            </button>

            {user && (
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
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
