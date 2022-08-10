import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EventType from "../components/eventType";
import EventLocation from "../components/eventLocation";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const eventType = [
  {
    image:
      "https://media.gettyimages.com/photos/presenting-to-coworkers-picture-id576901748?k=20&m=576901748&s=612x612&w=0&h=aXZ-XTrC3WX0ncluMORE72yP3jojrlYIGO8KRIE_kHU=",
    type: "CORPORATE MEETINGS",
  },
  {
    image:
      "https://media.gettyimages.com/photos/wedding-guests-applauding-newlyweds-picture-id56901619?k=20&m=56901619&s=612x612&w=0&h=dIHaXa3PtR4jjbcbCc9IHCfaCjaf5ZaO55b2SP4iZhU=",
    type: "MARRIAGE CEREMONIES",
  },
  {
    image:
      "https://media.gettyimages.com/photos/its-a-day-for-family-picture-id1064987534?k=20&m=1064987534&s=612x612&w=0&h=ulf0L8BnwaE_PanIPRUtaSdP90slu2ti0n01JQBlaSA=",
    type: "PARTIES",
  },
  {
    image:
      "https://media.gettyimages.com/photos/women-smiling-at-baby-shower-picture-id149316508?k=20&m=149316508&s=612x612&w=0&h=YLTo-oZV7QG0IaTZSShyDgRMzCgGyHtCbkY6FxsXjJQ=",
    type: "BRIDAL/BABY SHOWERS",
  },
  {
    image:
      "https://media.gettyimages.com/photos/rapper-gigi-lamayne-on-the-set-of-a-video-shoot-directed-by-mj-by-picture-id544850224?k=20&m=544850224&s=612x612&w=0&h=aXQalOX3YIvuWU1AJVsrkqCWeRFv7qaLTlzQkLShLyg=",
    type: "VIDEO/PHOTO SHOOTS",
  },
  {
    image:
      "https://media.gettyimages.com/photos/members-of-the-south-african-communist-party-sing-and-dance-around-picture-id1126868060?k=20&m=1126868060&s=612x612&w=0&h=E__NI4JB0f80PIbZFupBEfQVLxHu1-hjNrKJaUAIl3M=",
    type: "FUNERALS",
  },
  {
    image:
      "https://media.gettyimages.com/photos/ruth-akulu-and-her-colleagues-dance-while-attending-a-function-at-the-picture-id1187382163?k=20&m=1187382163&s=612x612&w=0&h=9g7yyoriYZUAt3L467uB6Z8WEKu38Vq9Gs9mRoCPTT8=",
    type: "GRADUATION PARTIES",
  },
  {
    image:
      "https://media.gettyimages.com/photos/laughing-friends-in-discussion-while-hanging-out-at-outdoor-bar-picture-id1063846452?k=20&m=1063846452&s=612x612&w=0&h=xhhTmEF3dEdxXL8k9aYzsKMoKmkIh7PEXoih7OfHz7w=",
    type: "NETWORKING EVENTS",
  },
  {
    image:
      "https://media.gettyimages.com/photos/women-participate-in-a-fashion-show-of-the-mougnan-foundation-as-part-picture-id1236989964?k=20&m=1236989964&s=612x612&w=0&h=mtPJ7jiIL8MfeHO6uTn_5Ds6t2nbtNNYO-uO8yfrP9A=",
    type: "FASHION SHOWS",
  },
  
];
const eventLocation = [
  {
    image:
      "https://www.einvestghana.com/wp-content/uploads/2020/02/Ghana-Night-.jpg",
    location: "EAST LEGON",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568306954278-df7b9ad9a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
    location: "ACCRA",
  },
  {
    image:
      "https://www.worldatlas.com/r/w1200/upload/ca/1e/b0/shutterstock-1177833901.jpg",
    location: "KASOA",
  },
  {
    image:
      "https://www.einvestghana.com/wp-content/uploads/2020/02/Ghana-Night-.jpg",
    location: "ADENTA",
  },
  {
    image:
      "https://cdn.statically.io/img/i0.wp.com/odarteyghnews.com/wp-content/uploads/2021/12/Accra-odarteyghnews.com_.jpg?resize=768%2C409&ssl=1&quality=70&f=auto",
    location: "TEMA",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Acca.jpg",
    location: "LABADI",
  },
];
function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <section id="home">
        
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div
                className="container"
                // style={{ backgroundColor: "hsla(0, 2%, 20%, 0.3)" }}
              >
                <p
                  className="text-white h1"
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    paddingBottom: "0%",
                    paddingTop: "15%",
                    fontSize:"64px"
                  }}
                >
                  Find affordable and unique spaces for your activities and
                  events{" "}
                  <h3 className="text-white" style={{paddingTop:"5%" , fontWeight:"bold"}}> Get up to 10% discount when you pay within 72hours of booking.  </h3>
                  {/* <h4 className="text-white"> Make cancellations up until two weeks of your events and get 100% refund.  </h4> */}
                </p>
              </div>

              <div className="elem-group inlined" style={{ paddingTop: "6%" }}>
                <form>
                  <input
                    name="search"
                    placeholder="what are you planning?"
                    style={{
                      width:"100%",
                      fontFamily: "Source Sans Pro",
                      borderColor: "#11245a",
                      borderRadius: "15px",
                      marginBottom: "4%",
                    }}
                  />
                  <input
                    name="search"
                    placeholder="where?"
                    style={{
                      width:"100%",
                      fontFamily: "Source Sans Pro",
                      borderColor: "#11245a",
                      borderRadius: "15px",
                      marginBottom: "4%",
                    }}
                  />
                   {/* <input
                   type="date"
                    name="search"
                    placeholder="when?"
                    style={{
                      width:"100%",
                      fontFamily: "Source Sans Pro",
                      borderColor: "#11245a",
                      borderRadius: "15px",
                    }}
                  /> */}
                  <input
                    type="date"
                    name="date"
                    placeholder="when?"
                    style={{
                      width:"100%",
                      fontFamily: "Source Sans Pro",
                      borderColor: "#11245a",
                      borderRadius: "15px",
                      marginBottom: "2%",
                    }}
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      navigate("space");
                    }}
                    className="btn btn-brand"
                    style={{
                      fontFamily: "Source Sans Pro",
                      backgroundColor: "#ff5a60",
                      color: "#fff",
                      fontWeight: "500",
                      fontSize: "16px",
                      textTransform: "uppercase",
                      padding: "12px 28px",
                      borderRadius: "30",
                      height: "45px",
                      width:"100%"
                    }}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="space">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  paddingBottom: "2%",
                }}
              >
                Book a unique space for your event
              </h1>
              <div className="hline"></div>
            </div>
          </div>

          <div className="row">
            {eventType.map((eventType) => {
              return (
                <EventType type={eventType.type} image={eventType.image} />
              );
            })}
          </div>
        </div>
      </section>

      <div className="column-container">
      <div className="flex-basis-50 img-col">
        <div className="row align-items-center">
          <div className="col-12 section-intro">
            <div className="hline"> </div>
            
          </div>
         <div className="col-lg-6 ">
            <img src={require("../images/background1.jpg")} alt="" />
          </div> 
           <div className="col-lg-6 ">
            <h1
              style={{
                textAlign: "left",
                fontWeight: "400",
                paddingBottom: "4%",
              }}
            >
            How Spacebar works
            {" "}
            </h1>

            <h3  style={{
                textAlign: "left",
                fontWeight: "400",
                paddingBottom: "2%",
              }}>Find the perfect space
            {" "} </h3>

            <h5 style={{paddingBottom:"5%"}}>
              Browse the marketplace and tailor your search 
               to your activity
              needs.
              {" "}
            </h5>
            
            <h3 style={{
                textAlign: "left",
                fontWeight: "400",
                paddingBottom: "2%",
              }}>Book it with ease{" "}</h3>

            <h5 style={{paddingBottom:"5%"}}>
              Once you find a perfect match, book the space and wait for a call from the Spacebar team to complete payment {" "}
            </h5>

            <h3 style={{
                textAlign: "left",
                fontWeight: "400",
                paddingBottom: "2%",
              }}>Meet and create memorable events{" "}</h3>
            <h5 style={{paddingBottom:"5%"}}>

              Create a memorable experience in a memorable space, and enjoy!
            </h5>
          </div> 
        </div>
      </div>
      </div>
      <section id="explore">
        <div className="container">
          <div className="row">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  paddingBottom: "2%",
                }}
              >
                Top event locations
              </h1>
              <div className="hline"></div>
            </div>
          </div>

          <div className="row">
            {eventLocation.map((eventLocation) => {
              return (
                <EventLocation
                  location={eventLocation.location}
                  image={eventLocation.image}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* <section id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 section-intro">
              <h1
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Contact Us
              </h1>
              <div className="hline"></div>
            </div>
            <div className="col-lg-4">
              <img src={require("../images/background1.jpg")} alt="" />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <form>
                <div className="mb-3">
                  <small>Name</small>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <small>Email</small>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <small>Phone Number</small>
                  <input type="tel" className="form-control" id="phone" />
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
                  {" "}
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

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
                Earn up to GHS 10,000 monthly by listing your space on spacebar {" "}
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

      <Footer />
    </div>
  );
}

export default HomePage;
