import React from "react";

const eventType = ({ image,type }) => {
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div>
        <img src={{ uri: image }} alt="" />
      </div>
      <h6>{type}</h6>
    </div>
  );
};

export default eventType;