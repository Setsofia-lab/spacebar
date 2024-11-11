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
        <img src={image} alt="" style={{ objectFit: 'cover', cursor:"pointer", borderTopLeftRadius: "25px" , borderBottomRightRadius:"25px", paddingBottom:"3%"  , height:"350px", width:"100%"}} />
      </div>
      <div className="e-card-title" style={{cursor:"pointer"}}><h4 >{type}</h4></div>
      </div>
    </div>
  );
};

export default EventType;
