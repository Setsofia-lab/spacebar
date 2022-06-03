import React from "react";

const EventSpace = ({
  image,
  description,
  price,
  name,
  location,
  capacity,
}) => {
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div>
        <img src={{ uri: image }} alt="" />
      </div>
      <div className="row">
        <h5>{name}</h5> <h6>{location}</h6>
      </div>
      <p style={{ fontStyle: "italic ", fontSize: "18px" }}>{price}</p>
      <p style={{ fontStyle: "italic ", fontSize: "18px" }}>{capacity}</p>
      <p style={{ fontStyle: "italic bold", fontSize: "20px" }}>
        {description}{" "}
      </p>
    </div>
  );
};

export default EventSpace;
