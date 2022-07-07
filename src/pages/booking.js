import React, { useEffect, useState } from "react";
import "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { addBookings } from "../utils/firebase";

function Booking() {
  const dispatch = useDispatch();
  // const bookingList = useSelector((state) =>state.booking.value);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventSelection, setEventSelection] = useState("");
  const [attendance, setAttendance] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [info, setInfo] = useState("");

  const [selectedListing, setSelectedListing] = useState({});
  const { listing, listings } = useSelector((state) => state.users);

  useEffect(() => {
    const filteredListing = listings.filter((spaces) => {
      return spaces.name == listing;
    });
    filteredListing.length && setSelectedListing(filteredListing[0]);
  }, []);
  useEffect(() => {
    console.log(selectedListing);
  }, [selectedListing]);
  const navigate = useNavigate();
  return (
    <div>
      <section id="booking">
        <Navbar />

        <div
          className="container"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <div className="d-flex justify-content-between">
            <div
              className="container"
              style={{ marginRight: "25px", marginLeft: "25px" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <img src={selectedListing.images} alt="something" />

                  <h4>{selectedListing.name}</h4>
                  <hr></hr>
                  <h5>Location</h5>
                  <p>{selectedListing.location}</p>
                  <hr></hr>
                  <h5>About Space</h5>
                  <p>{selectedListing.description}</p>
                  <hr></hr>
                  <h5>Rate</h5>
                  <p>{selectedListing.hourlyRate}GHS/hr</p>
                  <hr></hr>
                  <h5>Availability</h5>
                  <p>24/7</p>
                  <hr></hr>
                  <h5>Capacity</h5>
                  <p>{selectedListing.capacity}heads</p>
                  <hr></hr>
                  <h5>Amenities</h5>
                  <p>{selectedListing.amenities}</p>
                  <hr></hr>
                  <h5>Host Rules</h5>
                  <p>
                    Guests are charged upfront through Spacebar's secure payment
                    system. Your payout is directly deposited after each event,
                    minus our 25% service fee.
                  </p>
                  <hr></hr>
                  <h5>Security and Safety Guidelines</h5>
                  <p>
                    Guests are charged upfront through Spacebar's secure payment
                    system. Your payout is directly deposited after each event,
                    minus our 25% service fee.
                  </p>
                  <hr></hr>
                </div>

                <div className="col-lg-6 ">
                  <div
                    className="container"
                    style={{ marginRight: "25px", marginLeft: "25px" }}
                  >
                    <h1 style={{ fontWeight: "400", paddingleft: "25%" }}>
                      Request for booking
                    </h1>
                    <form action="reservation">
                      <div className="elem-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Sam Spacebar"
                          pattern="[A-Z\sa-z]{3,50}"
                          required
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </div>
                      <div className="elem-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="sam@spacebar.com"
                          required
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                      <div className="elem-group">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="000-000-0000"
                          pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
                          required
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        />
                      </div>
                      <hr></hr>
                      <div className="elem-group">
                        <label for="eventSelection">Event type</label>
                        <select
                          id="eventSelection"
                          name="eventSelection"
                          required
                          onChange={(event) => {
                            setEventSelection(event.target.value);
                          }}
                        >
                          <option value="">Choose from the List</option>
                          <option value="Party">Party</option>
                          <option value="wedding">Wedding</option>
                          <option value="Coporate Meeting">Coporate Meeting</option>
                          <option value="Bridal Shower">Bridal Shower</option>
                          <option value="Video Shoot">Video Shoot</option>
                          <option value="Photo Shoot">Photo Shoot</option>
                          <option value="Funeral">Funeral</option>
                          <option value="Networking Event">Networking Event</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="elem-group ">
                        <label for="adult">Attendance</label>
                        <input
                          type="number"
                          id="attendance"
                          name="attendance"
                          placeholder="e.g 100"
                          min="10"
                          required
                          onChange={(event) => {
                            setAttendance(event.target.value);
                          }}
                        />
                      </div>
                      <div className="elem-group">
                        <label for="date">Event Date</label>
                        <input
                          type="date"
                          id="checkinDate"
                          name="checkinDate"
                          required
                          onChange={(event) => {
                            setCheckinDate(event.target.value);
                          }}
                        />
                      </div>
                      <div className="elem-group inlined">
                        <label for="start-time">Start Time</label>
                        <input
                          type="time"
                          id="startTime"
                          name="startTime"
                          required
                          onChange={(event) => {
                            setStartTime(event.target.value);
                          }}
                        />
                      </div>
                      <div className="elem-group inlined">
                        <label for="end-date">End Time</label>
                        <input
                          type="time"
                          id="endTime"
                          name="endTime"
                          required
                          onChange={(event) => {
                            setEndTime(event.target.value);
                          }}
                        />
                      </div>
                      <hr></hr>
                      <div className="elem-group">
                        <label for="message">Additional Info</label>
                        <textarea
                          id="info"
                          name="info"
                          placeholder="Tell us anything else that might be important."
                          required
                          onChange={(event) => {
                            setInfo(event.target.value);
                          }}
                        ></textarea>
                      </div>
                      <button
                        onClick={async (e) => {
                          e.preventDefault();
                          await addBookings({
                            name,
                            email,
                            phone,
                            eventSelection,
                            attendance,
                            checkinDate,
                            startTime,
                            endTime,
                            info,
                          });
                        }}
                        type="submit"
                        className="btn btn-brand"
                        style={{
                          backgroundColor: "#ff5a60",
                          color: "#fff",
                          fontWeight: "500",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          padding: "12px 28px",
                          borderRadius: "30",
                        }}
                      >
                        Book
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="list" className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3
                  className="text-white"
                  style={{ fontWeight: "400", textAlign: "center" }}
                >
                  List your outdoor spaces to earn extra income.
                </h3>
              </div>
              <div className="col-auto">
                <a
                  href="listing"
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
      </section>

      <Footer />
    </div>
  );
}

export default Booking;
