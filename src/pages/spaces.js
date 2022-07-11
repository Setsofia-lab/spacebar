import React, { useEffect, useState } from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EventSpace from "../components/eventSpace";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch, useSelector } from "react-redux";
import { setListingsToState } from "../redux/users";
import { getListings } from "../utils/firebase";

const images = [
  {
    url:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },

  {
    url:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
];

function Space() {
  const dispatch = useDispatch();
  const { listings } = useSelector((state) => state.users);
  useEffect(() => {
    const getAllSpaces = async () => {
      const spacesFromDB = await getListings();
      dispatch(setListingsToState(spacesFromDB));
    };
    getAllSpaces();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4" style={{ paddingTop: "50px" }}>
            <div>
              <SimpleImageSlider
                width={496}
                height={304}
                images={images}
                showBullets={true}
                showNavs={true}
              />
            </div>
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
                Featured spaces on spacebar
              </h2>
              <div className="hline"></div>
            </div>
          </div>
          <div className="row">
            {listings &&
              listings.map((space) => {
                return (
                  <EventSpace
                    description={space.description}
                    price={space.hourlyRate}
                    name={space.name}
                    location={space.location}
                    capacity={space.capacity}
                    image={space.images}
                  />
                );
              })}
          </div>
        </div>
      </section>

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
                List your outdoor spaces to earn extra income.
              </h3>
            </div>
            <div className="col-auto">
              <a
                href="#contact"
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

export default Space;
