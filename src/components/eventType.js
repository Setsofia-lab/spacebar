import React from "react";
import {useNavigate} from "react-router-dom";

const EventType = ({ image, type }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div
        onClick={() => {
          navigate("space");
        }}
      >
        <img src={image} alt="" style={{ borderRadius: "5px" }} />
      </div>
      <h4 >{type}</h4>
    </div>
  );
};

export default EventType;
