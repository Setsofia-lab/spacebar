import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

//import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-3">
              <h4 className="logo-text">Spacebar</h4>
              <p>
                {" "}
                Create memorable moments with unique spaces for your upcoming
                events - <a href="/space">Browse Spaces now</a> 
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="title-sm">Navigation</h5>
              <div className="footer-links">
                <a href="/blog">Blog</a>
                <a href="/space">Find Spaces</a>
                <a href="/space">Explore other Cities</a>
                <a href="/">Contact Us</a>
                <a href="/moments">Spacebar Moments</a>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="title-sm">Social Media</h5>
              <div className="social-container">
                <div className="col justify-content-between gy-2">
                  <a
                    href="https://www.facebook.com/ourpacebarhq/"
                    className="facebook social"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a
                    href="https://twitter.com/ourspacebarhq"
                    className="twitter social"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a
                    href="https://instagram.com/ourspacebarhq"
                    className="instagram social"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://chat.whatsapp.com/Lo6wYbSCNdfFY0EfPwjpBl"
                    className="whatsapp social"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="title-sm">Contact Us</h5>
              <div className="footer-links">
                <a>+233 50 571 5339 /+233 20 049 8056 </a>
                <a>info@ourspacebar.com </a>
                <a>friends@ourspacebar.com </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-2">
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
