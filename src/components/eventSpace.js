import React from "react";

const EventSpace = ({
  image,
  price,
  name,
  location,
  capacity,
}) => {
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div>
        <img src={image} alt="" style={{borderRadius:"10px"}} />
      </div>
      <div className="d-flex ">
        <p className="h6" style={{ fontStyle: "italic ", fontSize: "20px" , marginRight:"40px" }}>{name}</p> <p className="h6" style={{ fontStyle: "italic ", fontSize: "20px" }}>{location}</p>
      </div>
      <div className="d-flex ">
      <p style={{ fontStyle: "bold", fontSize: "18px" , marginRight:"40px"}}>{price}</p> <hr></hr>
      <p style={{ fontStyle: "italic ", fontSize: "18px" , marginRight:"40px"}}>{capacity}</p>
      </div>
    </div>
  );
};

export default EventSpace;
