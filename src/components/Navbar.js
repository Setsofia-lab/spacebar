import React from "react";
import { useNavigate } from "react-router-dom";
import Listing from "../pages/listing";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ color: "#ff5a60", fontWeight: "700" , fontSize:"32px" }}
        >
          spacebar
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:"30%"}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#space">
                EVENT SPACES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#explore"
              >
                EXPLORE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#footer">
                BLOG
              </a>
            </li>
          </ul>
          <div className="ButtonHolder">
            <a
              onClick={() => {
                navigate("listing");
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
              Add listing
            </a>

            <a
              href="#listing"
              onClick={() => {
                navigate("space");
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className=ame="HomePageNav">
      <div className=ame="SpacebarHeaderLogo">
        {" "}
        <a
          className=ame="navbar-brand logo-text"
          href="#"
          style={{ color: "#ff5a60", fontWeight: "700" }}
        >
          spacebar
        </a>
      </div>
      <div className=ame="HeaderOption">
      <a
          className=ame="nav-link pointer"
          onClick={() => {
            navigate("space");
          }}
          style={{ color: "#ff5a60", fontWeight: "bold" }}
        >
          EVENT SPACES
        </a>
        <a
          className=ame="nav-link pointer"
          href="#explore"
          style={{ color: "#ff5a60", fontWeight: "bold" }}
        >
          EXPLORE
        </a>
        <a
          className=ame="nav-link pointer"
          href="#"
          style={{ color: "#ff5a60", fontWeight: "bold" }}
        >
          BLOG
        </a>
      </div>
      <div className=ame="ButtonHolder">
        <a
          href="#listing"
          className=ame="btn btn-brand"
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

        
        <a
          href="#listing"
          onClick={() => {
            navigate("space");
          }}
          className=ame="btn btn-brand"
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
      </div>
    </div> */
}
