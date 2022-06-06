import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" navbar-fixed-top navbar-expand-lg">
      <div className="container">
        <a
          className="navbar-brand logo-text"
          href="#"
          style={{ color: "#ff5a60", fontWeight: "700" }}
        >
          spacebar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                style={{ color: "#ff5a60", fontWeight: "bold" }}
              >
                HOME
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link pointer"
                onClick={() => {
                  navigate("spaces");
                }}
                style={{
                  color: "#ff5a60",
                  fontWeight: "bold",
                }}
              >
                EVENT SPACES
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                style={{ color: "#ff5a60", fontWeight: "bold" }}
              >
                OUR SERVICES
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#explore"
                style={{ color: "#ff5a60", fontWeight: "bold" }}
              >
                EXPLORE
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                style={{ color: "#ff5a60", fontWeight: "bold" }}
              >
                CONTACT
              </a>
            </li> */}
            <li className="nav-item" style={{paddingRight:"15px"}}>
              <a
                href="#listing"
                className="btn btn-brand"
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
                Add listing
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#listing"
                onClick={() => {
                  navigate("booking");
                }}
                className="btn btn-brand"
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
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
