import React from "react";
import {useNavigate} from "react-router-dom";

const EventType = ({ image, type }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div className="e-card-image">
      <div
        onClick={() => {
          navigate("space");
        }}
      >
        <img src={image} alt="" style={{ borderRadius: "5px" , height:"150px"}} />
      </div>
      <div className="e-card-title"><h4 style={{ textAlign:"center" }}>{type}</h4></div>
      </div>
    </div>
  );
};

export default EventType;
