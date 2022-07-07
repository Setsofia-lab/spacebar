import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EventType from "../components/eventType";
import EventLocation from "../components/eventLocation";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const eventType = [
  {
    image:
      "https://media.istockphoto.com/photos/corporate-business-team-and-manager-in-a-meeting-close-up-picture-id639467826?k=20&m=639467826&s=612x612&w=0&h=V0wmz5zqbEWiiFYL7FdXT_i5FOXy2bsMmVSwMR2ttIg=",
    type: "Coporate Meeting",
  },
  {
    image: "https://ondistudio.com/wp-content/uploads/2020/05/drone1.jpg",
    type: "Wedding",
  },
  {
    image:
      "https://res.cloudinary.com/splacer/image/upload/e_improve,f_auto,q_auto,g_auto,c_fill,dpr_2,w_1920,h_1080/v1/production/Splaces/013518/14_q4dgeq.jpg",
    type: "Parties",
  },
  {
    image:
      "https://flo.health/uploads/media/sulu-630x-inset/09/1229-Pregnant%20woman%20is%20opening%20a%20new%20gift%20at%20baby%20shower.jpg?v=1-0",
    type: "Baby Shower",
  },
  {
    image:
      "https://pbblogassets.s3.amazonaws.com/uploads/2016/07/BTS-Featured1.jpg",
    type: "Shoots",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/5d842a5884f8e80274cf429d/1599360995544-3O7VZBP4W38G9VEG1FA8/funeral+venue+south+eastern+melbourne?format=500w",
    type: "Funerals",
  },
];
const eventLocation = [
  {
    image:
      "https://www.einvestghana.com/wp-content/uploads/2020/02/Ghana-Night-.jpg",
    location: "East Legon",
  },
  {
    image: "https://images.unsplash.com/photo-1568306954278-df7b9ad9a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
    location: "Accra",
  },
  {
    image:
      "https://www.worldatlas.com/r/w1200/upload/ca/1e/b0/shutterstock-1177833901.jpg",
      location: "Kasoa",
  },
  {
    image:
      "https://huvudstadsguiden.eu/wp-content/uploads/2021/01/Accra-1-580x368.jpg",
      location: "Adenta",
  },
  {
    image:
      "https://cdn.statically.io/img/i0.wp.com/odarteyghnews.com/wp-content/uploads/2021/12/Accra-odarteyghnews.com_.jpg?resize=768%2C409&ssl=1&quality=70&f=auto",
      location: "Tema",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Acca.jpg",
    location: "Labadi",
  },
  
];
function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <section id="home">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div
                className="container"
                style={{ backgroundColor: "hsla(0, 4%, 20%, 0.4)" }}
              >
                <p
                  className="text-white h1"
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    paddingBottom: "0%",
                    paddingTop: "15%",
                  }}
                >
                  Find affordable and unique event spaces for your upcoming
                  events{" "}
                </p>
              </div>

              <div className="search-container" style={{ paddingTop: "6%" }}>
                <form action="">
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
                    style={{
                      width: "25%",
                      height: "45px",
                      paddingRight: "15px",
                    }}
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
                      height: "45px",
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
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  paddingBottom: "2%",
                }}
              >
                Top event locations
              </h1>
              <div className="hline"></div>
            </div>
          </div>

          <div className="row">
            {eventLocation.map((eventLocation) => {
              return (
                <EventLocation location={eventLocation.location} image={eventLocation.image} />
              );
            })}
          </div>
        </div>
      </section>

     
      {/* <section id="contact">
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
      </section> */}

      <section id="list" className="py-5">
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
              <a
                href="listing"
                className="btn btn-light"
                style={{ color: "#ff5a60" }}
              >
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
