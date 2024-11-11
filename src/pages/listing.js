import React, { useState } from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { addListing } from "../utils/firebase";

function Listing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [dailyRate, setDailyrate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [info, setInfo] = useState("");
  const [amenities, setAmenities] = useState("");
  const [images, setImages] = useState({});

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h5>
          {name}Listing is succefully submitted! Navigate to{" "}
          <a href="/">HomePage</a>
        </h5>
        <h5>
          Or Browse featured <a href="/space">Spaces</a>
        </h5>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: !submitted ? "" : "none",
        }}
      >
        <h6>All fields required.Please fill all fields</h6>
      </div>
    );
  };

  return (
    <div>
      <Navbar />

      <section id="listing">
        <div
          className=""
          style={{
            height: "610px",
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundColor: "hsla(0, 10%, 20%, 0.3)",
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/5fb2f8c5528c9024dcb915de/1605641581803-2FK6N8Q5GPTPIRPO4XVJ/four-tips-remote-hiring.png?format=1500w")',
          }}
        >
          {" "}
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
              Become a space owner{" "}
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
              Learn how to make extra cash from listing your space
            </h1>
            <button
              // onClick={() => {
              //   navigate("space");
              // }}
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
      </section>

      <section>
        <div style={{ paddingRight: "30%", paddingLeft: "30%" }}>
          <h1 style={{ fontWeight: "400", paddingBottom: "2%" }}>
            List your space
          </h1>
          {successMessage()}
          {errorMessage()}
          <form action="reservation">
            <h5>Personal details</h5>
            <div className="elem-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                pattern="[A-Z\sa-z]{3,50}"
                required={true}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="elem-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required={true}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="elem-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
                required={true}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <h5>Space details</h5>
            <hr></hr>
            <div className="elem-group">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                pattern="[A-Z\sa-z]{3,50}"
                required={true}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>

            <div className="elem-group ">
              <label for="adult">Capacity</label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                placeholder=" 100"
                min="10"
                required={true}
                onChange={(event) => {
                  setCapacity(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="elem-group ">
              <label for="adult">Daily Rate</label>
              <input
                type="number"
                id="dailyRate"
                name="dailyRate"
                placeholder=" GHS 250"
                required={true}
                onChange={(event) => {
                  setDailyrate(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="elem-group inlined">
              <label for="start-date">Availability start date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required={true}
                onChange={(event) => {
                  setStartDate(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="elem-group inlined">
              <label for="end-date">Availability end date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required={true}
                onChange={(event) => {
                  setEndDate(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              />
            </div>
            <hr></hr>
            <div className="elem-group">
              <label for="message">Amenities</label>
              <textarea
                id="amenities"
                name="amenities"
                placeholder="Washroom,CCTV,BBQ,"
                required={true}
                onChange={(event) => {
                  setAmenities(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              ></textarea>
            </div>
            <div className="elem-group">
              <label for="message">Description</label>
              <textarea
                id="info"
                name="info"
                placeholder=" This studio was created out of our passion for visual arts
                and with a mission to support contemporary talent. We
                understand your needs, and are here to help you to create
                your dreams. We can offer creative set designs and all
                lighting and grip demands of the most talented and demanding
                of creatives. One of New York oldest prop-house is 10 ft"
                required={true}
                onChange={(event) => {
                  setInfo(event.target.value);
                }}
                style={{
                  fontFamily: "Source Sans Pro",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
              ></textarea>
            </div>
            <hr></hr>
            <div className="elem-group">
              <p>Upload at least quality images of your space:</p>
              <input
                type="file"
                id="images"
                name="images"
                style={{
                  fontFamily: "Source Sans Pro",
                  padding: "3%",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setImages({ ...images, 0: event.target.files[0] });
                }}
              />
              <input
                type="file"
                id="images"
                name="images"
                style={{
                  fontFamily: "Source Sans Pro",
                  padding: "3%",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
                onChange={(event) => {
                  setImages({ ...images, 1: event.target.files[0] });
                }}
              />
              <input
                type="file"
                id="images"
                name="images"
                style={{
                  fontFamily: "Source Sans Pro",
                  padding: "3%",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
                onChange={(event) => {
                  setImages({ ...images, 2: event.target.files[0] });
                }}
              />
              <input
                type="file"
                id="images"
                name="images"
                style={{
                  fontFamily: "Source Sans Pro",
                  padding: "3%",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
                onChange={(event) => {
                  setImages({ ...images, 3: event.target.files[0] });
                }}
              />
              <input
                type="file"
                id="images"
                name="images"
                style={{
                  fontFamily: "Source Sans Pro",
                  padding: "3%",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
                onChange={(event) => {
                  setImages({ ...images, 4: event.target.files[0] });
                }}
              />
              <input
                type="file"
                id="images"
                name="images"
                style={{
                  fontFamily: "Source Sans Pro",
                  padding: "3%",
                  borderColor: "#11245a",
                  borderRadius: "15px",
                }}
                onChange={(event) => {
                  setImages({ ...images, 5: event.target.files[0] });
                }}
              />
            </div>
            <button
              onClick={async (e) => {
                e.preventDefault();
                await addListing({
                  name,
                  email,
                  phone,
                  location,
                  capacity,
                  dailyRate,
                  startDate,
                  endDate,
                  amenities,
                  info,
                  images,
                });
                setSubmitted(true);
                //navigate("/");
              }}
              type="submit"
              className="btn btn-brand"
              style={{
                fontFamily: "Montserrat",
                backgroundColor: "#ff5a60",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "uppercase",
                padding: "12px 28px",
                borderRadius: "30",
                width: "100%",
              }}
            >
              List Space
            </button>
          </form>
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
                Know more about our security and safety policy.
              </h3>
            </div>
            <div className="col-auto">
              <a
                href="listing"
                className="btn btn-light"
                style={{ color: "#ff5a60" }}
              >
                {" "}
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Listing;
