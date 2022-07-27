import React from "react";
import {useNavigate} from "react-router-dom";

const BlogPost = ({ image, title }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 p-4">
      <div className="e-card-image">
      <div
        onClick={() => {
          navigate("blogpage");
        }}
      >
        <img src={image} alt="" style={{paddingBottom:"10%"}} />
      </div>
      <div className="e-card-title"><a href="blogpage" style={{ fontFamily:"Source Sans Pro" , fontSize:"28px" }}>{title}</a></div>
      </div>
    </div>
  );
};

export default BlogPost;