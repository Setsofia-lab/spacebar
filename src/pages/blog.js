import React from "react";
import "react-bootstrap";
import BlogPost from "../components/blogpost";
//import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Blog() {
  // const navigate = useNavigate();

  const blogpost = [
    {
      image:
        "https://www.einvestghana.com/wp-content/uploads/2020/02/Ghana-Night-.jpg",
      title: "Best events locations in Ghana",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568306954278-df7b9ad9a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
      title: "Best events locations in Ghana",
    },
    {
      image:
        "https://www.worldatlas.com/r/w1200/upload/ca/1e/b0/shutterstock-1177833901.jpg",
      title: "Best events locations in Ghana",
    },
    {
      image:
        "https://www.worldatlas.com/r/w1200/upload/ca/1e/b0/shutterstock-1177833901.jpg",
      title: "Best events locations in Ghana",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Acca.jpg",
      title: "Best events locations in Ghana",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Acca.jpg",
      title: "Best events locations in Ghana",
    },
  ];

  return (
    <div>
      <section id="blog">
        <Navbar />

        <div >
          <div style={{ paddingRight: "5%", paddingLeft: "5%" }}>
            <div className="row">
            {blogpost.map((blogpost) => {
              return (
                <BlogPost title={blogpost.title} image={blogpost.image} />
              );
            })}
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
