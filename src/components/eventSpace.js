import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const EventSpace = ({ image, price, name, location, capacity }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <section id="book">
        <div className=" e-card">
          <div className="e-card-image">
            <SimpleImageSlider
              width={"25%"}
              height={"40vh"}
              images={image}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <div className=" e-card-body">
            {" "}
            <h5>{name}</h5>
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
                <h6>{price} GHS/hr</h6>
              </div>
              <div className=" e-card-text">
                <h6>{capacity} heads</h6>
              </div>
            </div>
            <div
              onClick={() => {
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
  );
};

export default EventSpace;
