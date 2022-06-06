import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EventType from "../components/eventType";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const eventType = [
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Coporate Meeting",
  },
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Wedding",
  },
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Parties",
  },
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Baby Shower",
  },
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Shoots",
  },
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Funerals",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1557804500-7a58fbcd4d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  //   type: "Engagement",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1557804500-7a58fbcd4d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  //   type: "Engagement",
  // },
];
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
                  paddingBottom: "5%",
                  paddingTop: "10%",
                }}
              >
                Find affordable and unique event spaces for your upcoming events{" "}
              </p>

              <div className="search-container">
                <form action="/action_page.php">
                  <input
                    type="text"
                    placeholder="What are you planning.."
                    name="search"
                    style={{ width: "30%", height: "45px" }}
                  />
                  <input
                    type="text"
                    placeholder="Where.."
                    name="search"
                    style={{ width: "25%", height: "45px" }}
                  />
                  <input
                    type="date"
                    placeholder="When.."
                    // value=""
                    style={{ width: "25%", height: "45px" , paddingRight:"15px" }}
                  />
                  <button
                    type="submit"
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
                      height:"45px"
                    }}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="space">
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
                <EventType type={eventType.type} image={eventType.image} />
              );
            })}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 section-intro">
            <div className="hline"></div>
          </div>
          <div className="col-lg-4">
            <img src={require("../images/clubs.jpg")} alt="" />
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h2
              style={{
                textAlign: "left",
                fontWeight: "400",
                paddingBottom: "2%",
              }}
            >
              How Spacebar works
            </h2>

            <h4>Find the perfect space</h4>
            <p>
              Browse the marketplace and tailor your search to your activity
              needs.
            </p>
            <h4>Book it with ease</h4>
            <p>
              Once you find a perfect match, book the space and pay online
              through our easy-to-use payment system
            </p>
            <h4>Meet and create memorable events</h4>
            <p>
              Create a memorable experience in a memorable space, and enjoy!
            </p>
          </div>
        </div>
      </div> 

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
                  navigate("space");
                }}
              >
                <img
                  src={require("../images/L5.jpg")}
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <h4 >Osu</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img
                  src={require("../images/L1.jpg")}
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <h4 >East Legon</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img
                  src={require("../images/L2.jpg")}
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <h4 >Dansoman</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img
                  src={require("../images/L3.jpg")}
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <h4 >Labadi</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img
                  src={require("../images/L4.jpg")}
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <h4 >Tema</h4>
            </div>
            <div className="col-lg-4 col-sm-6 p-4">
              <div
                onClick={() => {
                  navigate("space");
                }}
              >
                <img
                  src={require("../images/L5.jpg")}
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h4 >Adenta</h4>
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
                List your outdoor space to earn extra income.
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
