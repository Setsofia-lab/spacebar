import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { selectedListing } from "../redux/users";

const EventSpace = ({ image, price, name, location, capacity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div style={{ height: "70vh" }} className="overflow-hidden">
        <section
          id="book"
          className="align-item-stretch"
          style={{ height: "100%" }}
        >
          <div className="e-card" style={{ height: "100%" }}>
            <div className="e-card-image">
              <SimpleImageSlider
                width={"100%"}
                height={"40vh"}
                images={image}
                showBullets={true}
                showNavs={true}
                style={{
                  borderRadius: "15px",
                  position: "relative",
                }}
              />
            </div>
            <div
              className=" e-card-body d-flex flex-column align-content-between justify-content-between p-2"
              style={{ height: "30vh" }}
            >
              {" "}
              <h5
                style={{
                  // height: "2em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineClamp: 2,
                  // whiteSpace: "nowrap",
                }}
              >
                {name}
              </h5>
              <div className="d-flex justify-content-between">
                <div
                  className=" e-card-text"
                  style={{ fontSize: "18", marginRight: "50px" }}
                >
                  <h6>{location}</h6>
                </div>
                <div className=" e-card-icon">
                  <h6>4.5/5 stars</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div
                  className=" e-card-text"
                  style={{ fontStyle: "italic ", marginRight: "50px" }}
                >
                  <h6>{price} GHS</h6>
                </div>
                <div className=" e-card-text">
                  <h6>{capacity} heads</h6>
                </div>
              </div>
              <div
                onClick={() => {
                  dispatch(selectedListing(name));
                  navigate("/booking");
                }}
              >
                <button
                  href="/booking"
                  className="btn btn-brand"
                  style={{
                    backgroundColor: "#fff",
                    color: "#ff5a60",
                    fontWeight: "500",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    padding: "12px 28px",
                    borderRadius: "30",
                    width: "100%",
                    border: "2px solid #ff5a60",
                  }}
                >
                  {" "}
                  BOOK{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventSpace;
