import React, { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import "react-bootstrap";
import EventSpace from "../components/eventSpace";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch, useSelector } from "react-redux";
import { setListingsToState } from "../redux/users";
import { getListings } from "../utils/firebase";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const items = [getListings];

const images = [
  {
    url:
      "https://media.gettyimages.com/photos/presenting-to-coworkers-picture-id576901748?k=20&m=576901748&s=612x612&w=0&h=aXZ-XTrC3WX0ncluMORE72yP3jojrlYIGO8KRIE_kHU=",
  },
  {
    url:
      "https://media.gettyimages.com/photos/wedding-guests-applauding-newlyweds-picture-id56901619?k=20&m=56901619&s=612x612&w=0&h=dIHaXa3PtR4jjbcbCc9IHCfaCjaf5ZaO55b2SP4iZhU=",
  },

  {
    url:
      "https://media.gettyimages.com/photos/its-a-day-for-family-picture-id1064987534?k=20&m=1064987534&s=612x612&w=0&h=ulf0L8BnwaE_PanIPRUtaSdP90slu2ti0n01JQBlaSA=",
  },
];

function Items({ listings }) {
  return (
    <div className="items">
      {listings && listings.map((item) => <div>{listings}</div>)}
    </div>
  );
}

function Space() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [ind, setInd] = useState(0);
  const [newListings, setNewListings] = useState([]);
  const { listings } = useSelector((state) => state.users);
  useEffect(() => {
    const getAllSpaces = async () => {
      const spacesFromDB = await getListings();
      dispatch(setListingsToState(spacesFromDB));
    };
    getAllSpaces();
  }, []);

  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 12;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setNewListings(listings.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listings.length / 12));
  }, [listings, itemOffset, 12]);

  // Invoke when user click to request another page.
  const handlePageClick = (listings) => {
    const newOffset = listings.selected * 12;
    console.log(
      `User requested page number ${listings.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    const changeImageIndex = listings.selected % 2 == 0 ? 0 : 1;
    setInd(changeImageIndex);
  };

  return (
    <div>
      <Navbar />
      <div
        className=""
        style={{
          height: "610px",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundColor: "red",
          backgroundImage:
            'url("https://thumb.tildacdn.com/tild3666-3738-4234-a536-343630363430/-/format/webp/safarivalley_2689507.png")',
        }}
      >
        <div className="backgroundImageOpacity"></div>{" "}
        <div className="row" style={{ justifyContent: "center" }}>
          <h1
            className="text-white"
            style={{
              textAlign: "center",
              paddingTop: "10%",
              paddingBottom: "2%",
              fontSize: "62px",
              fontWeight: "500",
            }}
          >
            {" "}
            Browse through our spaces{" "}
          </h1>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <h1
            className="text-white"
            style={{
              textAlign: "center",
              paddingBottom: "2%",
              fontSize: "22px",
            }}
          >
            {" "}
            Check out our list of the top 10 spaces in Accra for 2022
          </h1>
          <button
            onClick={() => {
              navigate("/blog");
            }}
            // href="/blog"
            target="_blank"
            style={{
              width: "20%",
              backgroundColor: "#ff5a60",
              borderRadius: "3px",
              paddingBottom: "10",
            }}
          >
            {" "}
            Read Blog{" "}
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 section-intro">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "500",
                color: "#ff5a60",
                paddingTop: "1%",
              }}
            >
              Your space, Your choice.
            </h1>
            <div className="hline">
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "1%",
                  fontSize: "20px",
                }}
              >
                {" "}
                Select from our distinct featured spaces or exquisite unique
                spaces.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row-container" style={{ paddingTop: "50px" }}>
        <div className="row align-items-center">
          <div
            className="col-lg-6"
            style={{
              height: "510px",
              position: "",
              backgroundImage:
                'url("https://exp.cdn-hotels.com/hotels/30000000/29980000/29970700/29970657/9a639199_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium")',
            }}
          >
            <div>
              <div className="row" style={{ justifyContent: "center" }}>
                <h1
                  className="text-white"
                  style={{
                    textAlign: "center",
                    paddingTop: "20%",
                    paddingBottom: "2%",
                    fontSize: "62px",
                  }}
                >
                  {" "}
                  Featured Spaces{" "}
                </h1>
                <button
                  onClick={() => {
                    navigate("/space");
                  }}
                  style={{
                    width: "15%",
                    backgroundColor: "#ff5a60",
                    borderRadius: "30px",
                  }}
                >
                  {" "}
                  Browse{" "}
                </button>
              </div>
              <div className="row" style={{ justifyContent: "center" }}></div>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              height: "510px",
              position: "",
              backgroundImage:
                'url("https://images.trvl-media.com/hotels/3000000/2810000/2804900/2804841/bb590468.jpg?impolicy=resizecrop&rw=1200&ra=fit")',
            }}
          >
            <div>
              <div className="row" style={{ justifyContent: "center" }}>
                <h1
                  className="text-white"
                  style={{
                    textAlign: "center",
                    paddingTop: "20%",
                    paddingBottom: "2%",
                    fontSize: "62px",
                  }}
                >
                  {" "}
                  Unique spaces{" "}
                </h1>
              </div>
              <div className="row" style={{ justifyContent: "center" }}>
                <button
                   onClick={() => {
                    navigate("/space");
                  }}
                  style={{
                    width: "15%",
                    backgroundColor: "#ff5a60",
                    borderRadius: "30px",
                  }}
                >
                  {" "}
                  Browse{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="space">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: "#ff5a60",
                }}
              >
                Featured spaces
              </h1>
              <div className="hline"></div>
            </div>
          </div>

          <div className="row">
            <CardGroup>
              {newListings &&
                newListings.map((space) => {
                  return (
                    <EventSpace
                      index={ind}
                      description={space.description}
                      price={space.price}
                      name={space.name}
                      location={space.location}
                      capacity={space.capacity}
                      // image={space.images}
                      image={space.images}
                    />
                  );
                })}
            </CardGroup>
          </div>
        </div>
        <div style={{ marginLeft: "50%", paddingTop: "2%" }}>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </section>
      <section id="list" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3
                className="text-white"
                style={{
                  textAlign: "center",
                  textTransform: "none",
                  fontWeight: "400",
                }}
              >
                List your outdoor spaces to earn extra income.
              </h3>
            </div>
            <div className="col-auto">
              <a
                href="#contact"
                className="btn btn-light"
                style={{ color: "#ff5a60" }}
              >
                {" "}
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Space;
