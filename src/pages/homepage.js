import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";


const eventType = [
  {
    image:"",
    type: "GHc800/hr",
  
  },
]
function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example">
      <section id="home">
        <Navbar />

        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p
                className="text-white h1"
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  paddingBottom: "10%",
                  paddingTop: "10%",
                }}
              >
                FIND AFFORDABLE AND UNIQUE EVENT SPACES FOR YOUR UPCOMING EVENTS{" "}
              </p>

              <div className="search-container">
                <form action="/action_page.php">
                  <input
                    type="text"
                    placeholder="What are you planning.."
                    name="search"
                    style={{ width: "30%", height: "40px" }}
                  />
                  <input
                    type="text"
                    placeholder="Where.."
                    name="search"
                    style={{ width: "25%", height: "40px" }}
                  />
                  <input
                    type="date"
                    placeholder="When.."
                    value=""
                    style={{ width: "25%", height: "40px" }}
                  />
                  <button
                    type="submit"
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
                    {" "}
                    Search{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="spaces">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  paddingBottom: "2%",
                }}
              >
                Book a unique space for your event
              </h1>
              <div className="hline"></div>
            </div>
          </div>

          <div className="row">
            {eventType.map((eventType) => {
              return (
                <eventType
                  type={eventType.type}
                />
              );
            })}
          <div className="row">
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/wedding.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Wedding</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/coporate.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Coporate Meet up</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/parties.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Parties</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/background2.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Baby Showers</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/networking1.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Social Networking</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/engagement.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Engagement</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/background1.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Funeral</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/clubs.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Club meet-up</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img src={require("../images/background2.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Others</h4>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Our Services
              </h1>
              <div className="hline"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="icon-box">
                <i className="bx bxs-landscape"></i>
              </div>
              <h4 className="title-sm mt-4">Event Planners</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt sunt molestiae!
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="icon-box">
                <i className="bx bxs-coffee"></i>
              </div>
              <h4 className="title-sm mt-4">Caterers</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt sunt molestiae!
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="icon-box">
                <i className="bx bxs-image"></i>
              </div>
              <h4 className="title-sm mt-4">Photography</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt sunt molestiae!
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="icon-box">
                <i className="bx bxs-check-shield"></i>
              </div>
              <h4 className="title-sm mt-4">Decor and Set-Up</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt sunt molestiae!
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="icon-box">
                <i className="bx bx-laptop"></i>
              </div>
              <h4 className="title-sm mt-4">Event Advertisement</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt sunt molestiae!
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div className="icon-box">
                <i className="bx bxs-happy-heart-eyes"></i>
              </div>
              <h4 className="title-sm mt-4">Designers</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt sunt molestiae!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="explore">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h1
                h1
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  paddingBottom: "0.5%",
                }}
              >
                Explore top event locations
              </h1>
              <div className="hline"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("Spaces");
                }}
              >
                <img src={require("../images/L5.jpg")} alt="" />
                <p>Hello here</p>
              </div>
              <h4 className="title-sm mt-4">Osu</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("Spaces");
                }}
              >
                <img src={require("../images/L1.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">East Legon</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("Spaces");
                }}
              >
                <img src={require("../images/L2.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Accra</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("Spaces");
                }}
              >
                <img src={require("../images/L3.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Labadi</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("Spaces");
                }}
              >
                <img src={require("../images/L4.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Tema</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("Spaces");
                }}
              >
                <img src={require("../images/L5.jpg")} alt="" />
              </div>
              <h4 className="title-sm mt-4">Labadi</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Contact Us
              </h1>
              <div className="hline"></div>
            </div>
            <div className="col-lg-4">
              <img src={require("../images/background1.jpg")} alt="" />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <form>
                <div className="mb-3">
                  <small>Name</small>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <small>Email</small>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <small>Phone Number</small>
                  <input type="tel" className="form-control" id="phone" />
                </div>

                <button
                  type="submit"
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
                  {" "}
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="listing" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3
                className="text-white"
                style={{
                  textAlign: "center",
                  textTransform: "none",
                  fontWeight: "400",
                }}
              >
                List your outdoor spaces to earn extra income.
              </h3>
            </div>
            <div className="col-auto">
              <a href="#contact" className="btn btn-light">
                {" "}
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
