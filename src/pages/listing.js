import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Listing() {
   const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <section id="listing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 section-intro">
              <div className="hline"></div>
            </div>
            <div className="col-lg-4">
              <img src={require("../images/wedding.jpg")} alt="" />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h2
                style={{
                  textAlign: "left",
                  fontWeight: "400",
                  paddingBottom: "2%",
                }}
              >
                How to become a Spacebar host{" "}
              </h2>

              <h4>List your space for free</h4>
              <p>
                Set your price, add photos and details, then your listing is
                ready to be seen by millions of people searching for space.
              </p>
              <h4>Get contacted by spacebar team</h4>
              <p>
                Expect a call from spacebar team and discussion on payment and
                security. Once you confirm, your guests will receive information
                on how to get there and details like your wifi code.
              </p>
              <h4>Get paid every time</h4>
              <p>
                Guests are charged upfront through Spacebar's secure payment
                system. Your payout is directly deposited after each event,
                minus our 25% service fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ paddingRight: "30%", paddingLeft: "30%" }}>
          <h1 style={{ fontWeight: "400", paddingBottom: "2%" }}>
            List your space
          </h1>

          <form action="reservation" method="post">
            <div className="elem-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                pattern="[A-Z\sa-z]{3,50}"
                required
              />
            </div>
            <div className="elem-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@email.com"
                required
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
              />
            </div>
            <hr></hr>
            <div className="elem-group">
              <label for="event-selection"> Select Event types</label>
              <select id="event-selection" name="event-selection" required>
                <option value="">Choose from the List</option>
                <option value="connecting">Party</option>
                <option value="adjoining">Party</option>
                <option value="adjacent">Party</option>
                <option value="adjacent">Party</option>
                <option value="adjacent">Party</option>
                <option value="adjacent">Party</option>
                <option value="adjacent">Party</option>
                <option value="adjacent">Party</option>
                <option value="adjacent">Party</option>
              </select>
            </div>
            <div className="elem-group ">
              <label for="adult">Capacity</label>
              <input
                type="number"
                id="attendance"
                name="total_attendance"
                placeholder=" 100"
                min="10"
                required
              />
            </div>
            <div className="elem-group ">
              <label for="adult">Hourly Rate</label>
              <input
                type="number"
                id="rate"
                name="rate"
                placeholder=" GHS 250"
                required
              />
            </div>
            <div className="elem-group inlined">
              <label for="start-date">Availability start date</label>
              <input type="date" id="start-date" name="start-date" required />
            </div>
            <div className="elem-group inlined">
              <label for="end-date">Availability end date</label>
              <input type="date" id="end-date" name="end-date" required />
            </div>
            <hr></hr>
            <div className="elem-group">
              <label for="message">Amenities</label>
              <textarea
                id="amenities"
                name="amenities"
                placeholder="Washroom,CCTV,BBQ,"
                required
              ></textarea>
            </div>
            <div className="elem-group">
              <label for="message">Description</label>
              <textarea
                id="message"
                name="visitor_message"
                placeholder=" This studio was created out of our passion for visual arts
                and with a mission to support contemporary talent. We
                understand your needs, and are here to help you to create
                your dreams. We can offer creative set designs and all
                lighting and grip demands of the most talented and demanding
                of creatives. One of New York oldest prop-house is 10 ft"
                required
              ></textarea>
            </div>
            <hr></hr>
            <div className="elem-group">
              <p>Upload at least quality images of your space:</p>
              <input
                type="file"
                id="images"
                name="filename"
                style={{ padding: "3%" }}
              />
              <input
                type="file"
                id="images"
                name="filename"
                style={{ padding: "3%" }}
              />
              <input
                type="file"
                id="images"
                name="filename"
                style={{ padding: "3%" }}
              />
              <input
                type="file"
                id="images"
                name="filename"
                style={{ padding: "3%" }}
              />
              <input
                type="file"
                id="images"
                name="filename"
                style={{ padding: "3%" }}
              />
              <input
                type="file"
                id="images"
                name="filename"
                style={{ padding: "3%" }}
              />
            </div>
            <button
              type="submit"
              href="#home"
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
