import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-5">
              <div className="col-md-4">
                <h4 className="logo-text">Spacebar</h4>
                <p>
                  {" "}
                  Create memorable moments with unique spaces for your upcoming
                  events - Book now
                </p>
                
              </div>
              <div className="col-md-2">
                <h5 className="title-sm">Navigation</h5>
                <div className="footer-links">
                  <a href="blog">Blog</a>
                  <a href="spaces">Find Spaces</a>
                  <a href="explore">Explore other Cities</a>
                  <a href="home">Contact Us</a>
                  <a href="">moments</a>
                </div>
              </div>
              <div className="col-md-2">
                <h5 className="title-sm">More</h5>
                <div className="footer-links">
                  <a href="#">FAQ's</a>
                  <a href="#">Privacy & Policy</a>
                  <a href="#">Liscences</a>
                </div>
              </div>
              <div className="col-md-2">
                <h5 className="title-sm">Contact</h5>
                <div className="footer-links">
                  <p className="mb" style={{ margin: "0px" }}>
                    CT 9606 Cantonments-Accra
                  </p>
                  <p className="mb" style={{ margin: "0px" }}>
                    {" "}
                    057-054-5165/050-571-5339{" "}
                  </p>
                  <p className="mb" style={{ margin: "0px" }}>
                    friends@ourspacebar.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-between gy-3">
              <div className="col-md-6">
                <p className="mb-0">© ourspacebar.com. All rights reserved</p>
              </div>
              <div className="col-auto">
                <p className="mb-0">Created by Spacebar Inc.</p>
              </div>
            </div>
          </div>
        </div>
        </footer> 
    );
  };
  
  export default Footer;
