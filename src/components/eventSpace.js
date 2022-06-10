import React from "react";


const EventSpace = ({ image, price, name, location, capacity }) => {
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div className=" e-card">
        <div className="e-card-image">
          <img src={image} alt="" style={{ borderRadius: "10px" }} />
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
            <div className=" e-card-text">
              <h6>rating</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div
              className=" e-card-text"
              style={{ fontStyle: "italic ", marginRight: "50px" }}
            >
              <h6>{price}</h6>
            </div>
            <div className=" e-card-text">
              <h6>{capacity}</h6>
            </div>
          </div>
          <button
            type="submit"
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
  );
};

export default EventSpace;