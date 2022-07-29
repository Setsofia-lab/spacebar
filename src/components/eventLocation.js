import React from "react";
import {useNavigate} from "react-router-dom";

const EventLocation = ({ image, location }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div className="e-card-image">
      <div
        onClick={() => {
          navigate("space");
        }}
      >
        <img src={image} alt="" style={{ objectFit: 'cover', borderRadius: "10px" , height:"300px "}} />
      </div>
      <div className="e-card-title"><h4 style={{ textAlign:"center" }}>{location}</h4></div>
      </div>
    </div>
  );
};

export default EventLocation;