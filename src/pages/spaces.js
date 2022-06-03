import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EventSpace from "../components/eventSpace";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const spaces = [
  {
    name: "Pheonix",
    price: "GHc800/hr",
    capacity: "100 heads",
    location: "Labone",
    description: "Blah blah blah",
    image: "https://www.istockphoto.com/photo/table-setting-for-an-event-party-or-wedding-reception-gm1177485677-328741458?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fevent-space&utm_term=event%20space%3A%3Asearch-explore-top-affiliate-outside-feed-x-v2%3Acontrol",
  },
  {
    name: "Pheonix",
    price: "GHc800/hr",
    capacity: "100 heads",
    location: "Labone",
    description: "Blah blah blah",
    image: "https://unsplash.com/photos/Ht9FPY8XLog",
  },
  {
    name: "Pheonix",
    price: "GHc800/hr",
    capacity: "100 heads",
    location: "Labone",
    description: "Blah blah blah",
    image: "https://unsplash.com/photos/fIHozNWfcvs",
  },
  {
    name: "Pheonix",
    price: "GHc800/hr",
    capacity: "100 heads",
    location: "Labone",
    description: "Blah blah blah",
    image: "https://unsplash.com/photos/csK5XPO87lI",
  },
  {
    name: "Pheonix",
    price: "GHc800/hr",
    capacity: "100 heads",
    location: "Labone",
    description: "Blah blah blah",
    image: "https://unsplash.com/photos/OBXjQtturqk",
  },
];

function Space() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      
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
      

      <section id="spaces">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h2 style={{ textAlign: "center", fontWeight: "400" }}>
                Available event spaces
              </h2>
              <div className="hline"></div>
            </div>
          </div>
          <div className="row">
            {spaces.map((space) => {
              return (
                <EventSpace
                  description={space.description}
                  price={space.price}
                  name={space.name}
                  location={space.location}
                  capacity={space.capacity}
                  image={space.image}
                />
              );
            })}
          
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

export default Space;
