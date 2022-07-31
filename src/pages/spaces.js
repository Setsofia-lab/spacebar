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
import { ReactDOM } from "react";

const items = [getListings];

const images = [
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRrsjPVGW8W0omG3Ayh2--s7qNyu0fWW4Pw&usqp=CAU",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9j4A_4UpYPqyZwQtnAz91lIzj1gYxoCcg4Q&usqp=CAU",
  },

  {
    url:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4" style={{ paddingTop: "50px" }}>
            <div>
              <SimpleImageSlider
                width={"100%"}
                height={304}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{
                  borderRadius: "15px",
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h2
              style={{
                textAlign: "left",
                fontWeight: "400",
                paddingBottom: "2%",
                paddingTop: "4%",
              }}
            >
              How Spacebar works
            </h2>

            <h4>Find the perfect space</h4>
            <h6>
              Browse our featured spaces and find the right space for your event
              needs. Spaces range from indoor auditoriums to outdoor gardens,
              private suites with root top swimming pools and other unqiue
              spaces
            </h6>
            <h4>Book it with ease</h4>
            <h6>
              Once you find a perfect match, book the space by providing
              accurate details for the spaces required, cross check the info
              provided and click BOOK to submit Our customer service team will
              contact you with a summary of your booking and provide appropriate
              steps to make payments through our easy-to-use payment system
            </h6>
            <h4>Meet and create memorable events</h4>
            <h6>
              Create a memorable experience in a memorable space, and enjoy!
            </h6>
          </div>
        </div>
      </div>

      <section id="space">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h2 style={{ textAlign: "center", fontWeight: "400" }}>
                Featured spaces on spacebar
              </h2>
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
        <div style={{marginLeft:"50%", paddingTop:"2%" }}>
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
        /></div>
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
