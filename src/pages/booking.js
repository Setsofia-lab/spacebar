import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";


function Booking() {
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
                  <img
                    src={require("../images/wedding.jpg")}
                    alt=""
                    style={{ height: "250px" }}
                  />
                  <h4
                    style={{
                      textAlign: "left",
                      fontWeight: "400",
                      paddingBottom: "2%",
                    }}
                  >
                    Phoenix Lounge Osu{" "}
                  </h4>

                  <h5>About Space</h5>
                  <p>
                    This studio was created out of our passion for visual arts
                    and with a mission to support contemporary talent. We
                    understand your needs, and are here to help you to create
                    your dreams. We can offer creative set designs and all
                    lighting and grip demands of the most talented and demanding
                    of creatives. One of New York oldest prop-house is 10 ft
                    away, opening up a whole new real of set up possibilities.
                    And we are have a network of talents: from make up artists
                    and stylist to set designers and print{" "}
                  </p>
                  <hr></hr>
                  <h5>Rate</h5>
                  <p>GHS 850</p>
                  <hr></hr>
                  <h5>Availability</h5>
                  <p>24/7</p>
                  <hr></hr>
                  <h5>Capacity</h5>
                  <p>100 heads</p>
                  <hr></hr>
                  <h5>Amenities</h5>
                  <p>
                    Expect a call from spacebar team and discussion on payment
                    and security. Once you confirm, your guests will receive
                    information on how to get there and details like your wifi
                    code.
                  </p>
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
                </div>
                <div className="col-lg-6 ">
                  <div
                    className="container"
                    style={{ marginRight: "25px", marginLeft: "25px" }}
                  >
                    <h1 style={{ fontWeight: "400", paddingleft: "25%" }}>
                      Request for booking
                    </h1>
                    <form action="reservation.php" method="post">
                      <div className="elem-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Sam Spacebar"
                          pattern="[A-Z\sa-z]{3,50}"
                          required
                        />
                      </div>
                      <div className="elem-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="sam@spacebar.com"
                          required
                        />
                      </div>
                      <div className="elem-group">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="050-136-9080"
                          pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
                          required
                        />
                      </div>
                      <hr></hr>
                      <div className="elem-group">
                        <label for="event-selection">Event type</label>
                        <select
                          id="event-selection"
                          name="event-selection"
                          required
                        >
                          <option value="">Choose from the List</option>
                          <option value="connecting">Party</option>
                          <option value="adjoining">Wedding</option>
                          <option value="adjacent">Coporate Meeting</option>
                          <option value="adjacent">Bridal Shower</option>
                          <option value="adjacent">Video Shoot</option>
                          <option value="adjacent">Photo Shoot</option>
                          <option value="adjacent">Funeral</option>
                          <option value="adjacent">Networking Event</option>
                          <option value="adjacent">Other</option>
                        </select>
                      </div>
                      <div className="elem-group ">
                        <label for="adult">Attendance</label>
                        <input
                          type="number"
                          id="attendance"
                          name="total_attendance"
                          placeholder="e.g 100"
                          min="10"
                          required
                        />
                      </div>
                      <div className="elem-group">
                        <label for="date">Event Date</label>
                        <input
                          type="date"
                          id="checkin-date"
                          name="checkin"
                          required
                        />
                      </div>
                      <div className="elem-group inlined">
                        <label for="start-time">Start Time</label>
                        <input
                          type="time"
                          id="start-time"
                          name="start-time"
                          required
                        />
                      </div>
                      <div className="elem-group inlined">
                        <label for="end-date">End Time</label>
                        <input
                          type="time"
                          id="end-time"
                          name="end-time"
                          required
                        />
                      </div>
                      <hr></hr>
                      <div className="elem-group">
                        <label for="message">Description</label>
                        <textarea
                          id="message"
                          name="visitor_message"
                          placeholder="Tell us anything else that might be important."
                          required
                        ></textarea>
                      </div>
                      <button
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
                        <i className="fa fa-search"> Book for Space</i>
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
                <a href="#contact" className="btn btn-light">
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

//  <section>
//   <div className="row align-items-center">
//   <div className="col-12 section-intro">
//     <div className="hline"></div>
//   </div>
//   <div className="col-lg-4">
//     <img
//       src={require("../images/clubs.jpg")}
//       alt=""
//       style={{ paddingBottom: "5%" }}
//     />
//     <h3 style={{ fontWeight: "400", paddingBottom: "5%" }}>
//       Pheonix Lounge - Labone
//     </h3>

//     <h4>About Space</h4>
//     <p>
//       This studio was created out of our passion for visual arts and
//       with a mission to support contemporary talent. We understand
//       your needs, and are here to help you to create your dreams. We
//       can offer creative set designs and all lighting and grip demands
//       of the most talented and demanding of creatives. One of New York
//       oldest prop-house is 10 ft away, opening up a whole new real of
//       set up possibilities. And we are have a network of talents: from
//       make up artists and stylist to set designers and print{" "}
//     </p>
//     <hr></hr>
//     <h4>Cost per hour</h4>
//     <p>GHS 850 per hour</p>
//     <hr></hr>
//     <h4>Availability</h4>
//     <p> Open 24/7</p>
//     <hr></hr>
//     <h4>Capacity</h4>
//     <p> 150 heads</p>
//     <hr></hr>
//     <h4>Amenities</h4>
//     <li>
//       Tableware Bathrooms Heat Large table Photography Lighting{" "}
//     </li>
//     <hr></hr>
//     <h4>Safety Policy</h4>
//     <link> Read About our Safety Policy</link>
//   </div>

// </div>
// </section>
