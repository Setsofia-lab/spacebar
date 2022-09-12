import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import EventType from "../components/eventType";
import EventLocation from "../components/eventLocation";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { text } from "@fortawesome/fontawesome-svg-core";

// const eventType = [
//   {
//     image:
//       "https://media.gettyimages.com/photos/presenting-to-coworkers-picture-id576901748?k=20&m=576901748&s=612x612&w=0&h=aXZ-XTrC3WX0ncluMORE72yP3jojrlYIGO8KRIE_kHU=",
//     type: "CORPORATE MEETINGS",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/wedding-guests-applauding-newlyweds-picture-id56901619?k=20&m=56901619&s=612x612&w=0&h=dIHaXa3PtR4jjbcbCc9IHCfaCjaf5ZaO55b2SP4iZhU=",
//     type: "MARRIAGE CEREMONIES",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/its-a-day-for-family-picture-id1064987534?k=20&m=1064987534&s=612x612&w=0&h=ulf0L8BnwaE_PanIPRUtaSdP90slu2ti0n01JQBlaSA=",
//     type: "PARTIES",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/women-smiling-at-baby-shower-picture-id149316508?k=20&m=149316508&s=612x612&w=0&h=YLTo-oZV7QG0IaTZSShyDgRMzCgGyHtCbkY6FxsXjJQ=",
//     type: "BRIDAL/BABY SHOWERS",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/rapper-gigi-lamayne-on-the-set-of-a-video-shoot-directed-by-mj-by-picture-id544850224?k=20&m=544850224&s=612x612&w=0&h=aXQalOX3YIvuWU1AJVsrkqCWeRFv7qaLTlzQkLShLyg=",
//     type: "VIDEO/PHOTO SHOOTS",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/members-of-the-south-african-communist-party-sing-and-dance-around-picture-id1126868060?k=20&m=1126868060&s=612x612&w=0&h=E__NI4JB0f80PIbZFupBEfQVLxHu1-hjNrKJaUAIl3M=",
//     type: "FUNERALS",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/ruth-akulu-and-her-colleagues-dance-while-attending-a-function-at-the-picture-id1187382163?k=20&m=1187382163&s=612x612&w=0&h=9g7yyoriYZUAt3L467uB6Z8WEKu38Vq9Gs9mRoCPTT8=",
//     type: "GRADUATION PARTIES",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/laughing-friends-in-discussion-while-hanging-out-at-outdoor-bar-picture-id1063846452?k=20&m=1063846452&s=612x612&w=0&h=xhhTmEF3dEdxXL8k9aYzsKMoKmkIh7PEXoih7OfHz7w=",
//     type: "NETWORKING EVENTS",
//   },
//   {
//     image:
//       "https://media.gettyimages.com/photos/women-participate-in-a-fashion-show-of-the-mougnan-foundation-as-part-picture-id1236989964?k=20&m=1236989964&s=612x612&w=0&h=mtPJ7jiIL8MfeHO6uTn_5Ds6t2nbtNNYO-uO8yfrP9A=",
//     type: "FASHION SHOWS",
//   },

// ];
// const eventLocation = [
//   {
//     image:
//       "https://www.einvestghana.com/wp-content/uploads/2020/02/Ghana-Night-.jpg",
//     location: "EAST LEGON",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1568306954278-df7b9ad9a72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
//     location: "ACCRA",
//   },
//   {
//     image:
//       "https://www.worldatlas.com/r/w1200/upload/ca/1e/b0/shutterstock-1177833901.jpg",
//     location: "KASOA",
//   },
//   {
//     image:
//       "https://www.einvestghana.com/wp-content/uploads/2020/02/Ghana-Night-.jpg",
//     location: "ADENTA",
//   },
//   {
//     image:
//       "https://cdn.statically.io/img/i0.wp.com/odarteyghnews.com/wp-content/uploads/2021/12/Accra-odarteyghnews.com_.jpg?resize=768%2C409&ssl=1&quality=70&f=auto",
//     location: "TEMA",
//   },
//   {
//     image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Acca.jpg",
//     location: "LABADI",
//   },
// ];
// function HomePage() {
//   const navigate = useNavigate();

//   return (
//     <div>

//     </div>
//   <div>

//     <Navbar />

//     <section id="home">

//       <div className="container text-center">
//         <div className="row justify-content-center">
//           <div className="col-md-10">
//             <div
//               className="container"
//               // style={{ backgroundColor: "hsla(0, 2%, 20%, 0.3)" }}
//             >
//               <p
//                 className="text-white h1"
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "600",
//                   paddingBottom: "0%",
//                   paddingTop: "15%",
//                   fontSize:"64px"
//                 }}
//               >
//                 Find affordable and unique spaces for your activities and
//                 events{" "}
//                 <h3 className="text-white" style={{paddingTop:"5%" , fontWeight:"bold"}}> Get up to 10% discount when you pay within 72hours of booking.  </h3>
//                 {/* <h4 className="text-white"> Make cancellations up until two weeks of your events and get 100% refund.  </h4> */}
//               </p>
//             </div>

//             <div className="elem-group inlined" style={{ paddingTop: "6%" }}>
//               <form>
//                 <input
//                   name="search"
//                   placeholder="what are you planning?"
//                   style={{
//                     width:"100%",
//                     fontFamily: "Source Sans Pro",
//                     borderColor: "#11245a",
//                     borderRadius: "15px",
//                     marginBottom: "4%",
//                   }}
//                 />
//                 <input
//                   name="search"
//                   placeholder="where?"
//                   style={{
//                     width:"100%",
//                     fontFamily: "Source Sans Pro",
//                     borderColor: "#11245a",
//                     borderRadius: "15px",
//                     marginBottom: "4%",
//                   }}
//                 />
//                  {/* <input
//                  type="date"
//                   name="search"
//                   placeholder="when?"
//                   style={{
//                     width:"100%",
//                     fontFamily: "Source Sans Pro",
//                     borderColor: "#11245a",
//                     borderRadius: "15px",
//                   }}
//                 /> */}
//                 <input
//                   type="date"
//                   name="date"
//                   placeholder="when?"
//                   style={{
//                     width:"100%",
//                     fontFamily: "Source Sans Pro",
//                     borderColor: "#11245a",
//                     borderRadius: "15px",
//                     marginBottom: "2%",
//                   }}
//                 />
//                 <button
//                   type="submit"
//                   onClick={() => {
//                     navigate("space");
//                   }}
//                   className="btn btn-brand"
//                   style={{
//                     fontFamily: "Source Sans Pro",
//                     backgroundColor: "#ff5a60",
//                     color: "#fff",
//                     fontWeight: "500",
//                     fontSize: "16px",
//                     textTransform: "uppercase",
//                     padding: "12px 28px",
//                     borderRadius: "30",
//                     height: "45px",
//                     width:"100%"
//                   }}
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section id="space">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 section-intro">
//             <h1
//               style={{
//                 textAlign: "center",
//                 fontWeight: "400",
//                 paddingBottom: "2%",
//               }}
//             >
//               Book a unique space for your event
//             </h1>
//             <div className="hline"></div>
//           </div>
//         </div>

//         <div className="row">
//           {eventType.map((eventType) => {
//             return (
//               <EventType type={eventType.type} image={eventType.image} />
//             );
//           })}
//         </div>
//       </div>
//     </section>

//     <div className="column-container">
//     <div className="flex-basis-50 img-col">
//       <div className="row align-items-center">
//         <div className="col-12 section-intro">
//           <div className="hline"> </div>

//         </div>
//        <div className="col-lg-6 ">
//           <img src={require("../images/background1.jpg")} alt="" />
//         </div>
//          <div className="col-lg-6 ">
//           <h1
//             style={{
//               textAlign: "left",
//               fontWeight: "400",
//               paddingBottom: "4%",
//             }}
//           >
//           How Spacebar works
//           {" "}
//           </h1>

//           <h3  style={{
//               textAlign: "left",
//               fontWeight: "400",
//               paddingBottom: "2%",
//             }}>Find the perfect space
//           {" "} </h3>

//           <h5 style={{paddingBottom:"5%"}}>
//             Browse the marketplace and tailor your search
//              to your activity
//             needs.
//             {" "}
//           </h5>

//           <h3 style={{
//               textAlign: "left",
//               fontWeight: "400",
//               paddingBottom: "2%",
//             }}>Book it with ease{" "}</h3>

//           <h5 style={{paddingBottom:"5%"}}>
//             Once you find a perfect match, book the space and wait for a call from the Spacebar team to complete payment {" "}
//           </h5>

//           <h3 style={{
//               textAlign: "left",
//               fontWeight: "400",
//               paddingBottom: "2%",
//             }}>Meet and create memorable events{" "}</h3>
//           <h5 style={{paddingBottom:"5%"}}>

//             Create a memorable experience in a memorable space, and enjoy!
//           </h5>
//         </div>
//       </div>
//     </div>
//     </div>
//     <section id="explore">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 section-intro">
//             <h1
//               style={{
//                 textAlign: "center",
//                 fontWeight: "400",
//                 paddingBottom: "2%",
//               }}
//             >
//               Top event locations
//             </h1>
//             <div className="hline"></div>
//           </div>
//         </div>

//         <div className="row">
//           {eventLocation.map((eventLocation) => {
//             return (
//               <EventLocation
//                 location={eventLocation.location}
//                 image={eventLocation.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>

//     {/* <section id="contact">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-12 section-intro">
//             <h1
//               style={{
//                 textAlign: "center",
//                 textTransform: "capitalize",
//                 fontWeight: "400",
//               }}
//             >
//               Contact Us
//             </h1>
//             <div className="hline"></div>
//           </div>
//           <div className="col-lg-4">
//             <img src={require("../images/background1.jpg")} alt="" />
//           </div>
//           <div className="col-lg-6 offset-lg-1">
//             <form>
//               <div className="mb-3">
//                 <small>Name</small>
//                 <input type="text" className="form-control" id="name" />
//               </div>
//               <div className="mb-3">
//                 <small>Email</small>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   aria-describedby="emailHelp"
//                 />
//               </div>
//               <div className="mb-3">
//                 <small>Phone Number</small>
//                 <input type="tel" className="form-control" id="phone" />
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-brand"
//                 style={{
//                   backgroundColor: "#ff5a60",
//                   color: "#fff",
//                   fontWeight: "500",
//                   fontSize: "12px",
//                   textTransform: "uppercase",
//                   padding: "12px 28px",
//                   borderRadius: "30",
//                 }}
//               >
//                 {" "}
//                 Submit{" "}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section> */}

//     <section id="list" className="py-5">
//       <div className="container py-4">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <h3
//               className="text-white"
//               style={{
//                 textAlign: "center",
//                 textTransform: "none",
//                 fontWeight: "400",
//               }}
//             >
//               Earn up to GHS 10,000 monthly by listing your space on spacebar {" "}
//             </h3>
//           </div>
//           <div className="col-auto">
//             <a
//               href="listing"
//               className="btn btn-light"
//               style={{ color: "#ff5a60" }}
//             >
//               {" "}
//               Get Started
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>

//     <Footer />
//   </div>
//    );
// }

// export default HomePage;

const images = [
  {
    url:
      "https://static.tildacdn.info/tild6461-6531-4161-b431-386165626530/thomas-william-OAVqa.jpg",
  },
  {
    url:
      "https://static.tildacdn.info/tild6164-3934-4938-b962-633963636333/pat-rindone-8qh5Fsjz.jpg",
  },

  {
    url:
      "https://thumb.tildacdn.com/tild3839-3936-4362-a162-396638616564/-/format/webp/pexels-teona-swift-6.png",
    text: "NAME",
  },
  {
    url:
      "https://thumb.tildacdn.com/tild6634-3863-4339-b131-643138326636/-/format/webp/pexels-wibhas-onnom-.png",
  },
  {
    url:
      "https://thumb.tildacdn.com/tild6564-3738-4561-a438-643135623032/-/format/webp/pexels-tyler-hendy-5.png",
  },
  {
    url:
      "https://thumb.tildacdn.com/tild6366-3438-4238-a534-373234316461/-/format/webp/pexels-renda-eko-riy.png",
  },
  {
    url:
      "https://thumb.tildacdn.com/tild3665-3138-4334-b064-343166623864/-/format/webp/pexels-max-vakhtbovy.png",
  },
  {
    url:
      "https://thumb.tildacdn.com/tild3166-3631-4661-b936-393638393062/-/resize/966x/-/format/webp/pexels-maria-salazar.png",
  },
];
function HomePage() {
  const navigate = useNavigate();

  return (
    
    <div>
      
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>spacebar</title>
      <meta name="description" content="spacebar web app 2.0" />
      <meta property="og:url" content="index.html" />
      <meta property="og:title" content="new website" />
      <meta property="og:description" content="spacebar web app 2.0" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://static.tildacdn.info/tild3965-6230-4463-b635-376436646438/-/resize/504x/yuliya-pankevich-oyx.jpg"
      />
      <link rel="canonical" href="index.html" />

      <meta property="fb:app_id" content={257953674358265} />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href="https://ws.tildacdn.com/" />
      <link rel="dns-prefetch" href="https://static.tildacdn.info/" />
      <meta name="robots" content="nofollow" />
      <link
        rel="shortcut icon"
        href="https://static.tildacdn.info/img/tildafavicon.ico"
        type="image/x-icon"
      />

      <link
        rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-grid-3.0.min.css"
        type="text/css"
        media="all"
        onerror="this.loaderr='y';"
      />
      <link
        rel="stylesheet"
        href="https://ourspacebar.tilda.ws/tilda-blocks-page29520076.min.css?t=1660141504"
        type="text/css"
        media="all"
        onerror="this.loaderr='y';"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&subset=latin,cyrillic&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-animation-1.0.min.css"
        type="text/css"
        media="all"
        onerror="this.loaderr='y';"
      />
      <link
        rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-forms-1.0.min.css"
        type="text/css"
        media="all"
        onerror="this.loaderr='y';"
      />
      <link
        rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-cover-1.0.min.css"
        type="text/css"
        media="all"
        onerror="this.loaderr='y';"
      />
      <link
        rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-slds-1.4.min.css"
        type="text/css"
        media="print"
        onload="this.media='all';"
        onerror="this.loaderr='y';"
      />
      <noscript>
        &lt;link rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-slds-1.4.min.css"
        type="text/css" media="all" /&gt;
      </noscript>
      <link
        rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-zoom-2.0.min.css"
        type="text/css"
        media="print"
        onload="this.media='all';"
        onerror="this.loaderr='y';"
      />
      <noscript>
        &lt;link rel="stylesheet"
        href="https://static.tildacdn.info/css/tilda-zoom-2.0.min.css"
        type="text/css" media="all" /&gt;
      </noscript>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Montserrat:wght@300;400;500&display=swap"
        type="text/css"
      />

      <div
        id="allrecords"
        className="t-records"
        data-hook="blocks-collection-content-node"
        data-tilda-project-id={5892684}
        data-tilda-page-id={29520076}
        data-tilda-formskey="15ea5a49ec7e763fb02762ebc5892684"
        data-tilda-lazy="yes"
      >

        <Navbar/>
        {/* <div
          id="rec477622108"
          className="r t-rec t-rec_pt_30 t-rec_pb_30"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: "#f8f4f9",
          }}
          data-animationappear="off"
          data-record-type={456}
          data-bg-color="#f8f4f9"
        >
          <div id="nav477622108marker" />
          <div className="tmenu-mobile">
            <div className="tmenu-mobile__container">
              <div
                className="tmenu-mobile__text t-name t-name_md"
                field="menu_mob_title"
              >
                &nbsp;
              </div>
              <div className="tmenu-mobile__burger">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          .tmenu-mobile {\n            background-color: #111;\n            display: none;\n            width: 100%;\n            top: 0;\n            z-index: 990;\n          }\n\n          .tmenu-mobile_positionfixed {\n            position: fixed;\n          }\n\n          .tmenu-mobile__text {\n            color: #fff;\n            position: absolute;\n            top: 50%;\n            left: 20px;\n            max-width: calc(100% - 80px);\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n          }\n\n          .tmenu-mobile__container {\n            height: 64px;\n            padding: 0;\n            position: relative;\n          }\n\n          .tmenu-mobile__burger {\n            position: absolute;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n            margin-top: 0;\n            right: 20px;\n            width: 28px;\n            height: 20px;\n            transition: 0.5s ease-in-out;\n            cursor: pointer;\n          }\n\n          .tmenu-mobile__burger span {\n            display: block;\n            position: absolute;\n            width: 100%;\n            opacity: 1;\n            left: 0;\n            transition: 0.25s ease-in-out;\n            height: 3px;\n            background-color: #fff;\n          }\n\n          .tmenu-mobile__burger span:nth-child(1) {\n            top: 0px;\n          }\n\n          .tmenu-mobile__burger span:nth-child(2),\n          .tmenu-mobile__burger span:nth-child(3) {\n            top: 8px;\n          }\n\n          .tmenu-mobile__burger span:nth-child(4) {\n            top: 16px;\n          }\n\n          .tmenu-mobile_opened .tmenu-mobile__burger span:nth-child(1) {\n            top: 8px;\n            width: 0%;\n            left: 50%;\n          }\n\n          .tmenu-mobile_opened .tmenu-mobile__burger span:nth-child(2) {\n            -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n          }\n\n          .tmenu-mobile_opened .tmenu-mobile__burger span:nth-child(3) {\n            -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n          }\n\n          .tmenu-mobile_opened .tmenu-mobile__burger span:nth-child(4) {\n            top: 8px;\n            width: 0%;\n            left: 50%;\n          }\n\n          .tmenu-mobile__list {\n            display: block;\n          }\n\n          .tmenu-mobile__burgerlogo {\n            display: inline-block;\n            font-size: 24px;\n            font-weight: 400;\n            white-space: nowrap;\n            vertical-align: middle;\n          }\n\n          .tmenu-mobile__imglogo {\n            height: auto;\n            display: block;\n            max-width: 300px;\n          }\n\n          @media screen and (max-width: 980px) {\n            .tmenu-mobile__menucontent_hidden {\n              display: none;\n              height: 100%;\n            }\n\n            .tmenu-mobile {\n              display: block;\n            }\n\n            .tmenu-mobile__imglogo {\n              width: 100% !important;\n              box-sizing: border-box;\n              padding: 20px;\n              margin: 0 auto;\n            }\n          }\n\n          @media screen and (max-width: 980px) {\n          }\n        ",
            }}
          />
          <div
            id="nav477622108"
            className="t456 t456__positionabsolute tmenu-mobile__menucontent_hidden"
            style={{
              backgroundColor: "rgba(248, 244, 249, 1)",
              height: "60px",
            }}
            data-bgcolor-hex="#f8f4f9"
            data-bgcolor-rgba="rgba(248,244,249,1)"
            data-navmarker="nav477622108marker"
            data-appearoffset
            data-bgopacity-two={70}
            data-menushadow
            data-bgopacity={1}
            data-bgcolor-rgba-afterscroll="rgba(248,244,249,0.70)"
            data-menu-items-align="right"
            data-menu="yes"
          >
            <div className="t456__maincontainer" style={{ height: "60px" }}>
              <div
                className="t456__leftwrapper"
                style={{ minWidth: "90px", width: "90px" }}
              >
                 <div>
                  <a href="/" target="_blank" style={{ color: "#ffffff" }}>
                    <div
                      className="t456__logo t-title"
                      field="title"
                      style={{ color: "#ffffff" }}
                    >
                      <div style={{ fontSize: "32px" }} data-customstyle="yes">
                        <span
                          style={{
                            fontWeight: 600,
                            color: "rgb(255, 0, 79)",
                            fontFamily: "Montserrat",
                          }}
                        >
                          spacebar
                        </span>
                      </div>
                    </div>
                  </a>
                </div> 
              </div>
               <div className="t456__rightwrapper t456__menualign_right">
                <ul className="t456__list">
                  <li
                    className="t456__list_item"
                    style={{ padding: "0 15px 0 0" }}
                  >
                    <a
                      // className="t-menu__link-item"
                      // onClick={() => {
                      //   navigate("/space");
                      // }}
                      href="/space"
                      data-menu-submenu-hook
                      //target="_blank"
                      style={{
                        color: "#ff004f",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: '"Montserrat"',
                      }}
                      data-menu-item-number={1}
                    >
                      Browse Spaces
                    </a>
                  </li>
                  <li
                    className="t456__list_item"
                    style={{ padding: "0 0 0 15px" }}
                  >
                    <a
                      // className="t-menu__link-item"
                      // onClick={() => {
                      //   navigate("/listing");
                      // }}

                      href="/listing"
                      data-menu-submenu-hook
                      // target="_blank"
                      style={{
                        color: "#ff004f",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: '"Montserrat"',
                      }}
                      data-menu-item-number={2}
                    >
                      List Spaces
                    </a>
                  </li>
                </ul>
              </div> 
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          @media screen and (max-width: 980px) {\n            #rec477622108 .t456__leftcontainer {\n              padding: 20px;\n            }\n          }\n\n          @media screen and (max-width: 980px) {\n            #rec477622108 .t456__imglogo {\n              padding: 20px 0;\n            }\n          }\n        ",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          #rec477622108 .t-menu__link-item {\n            -webkit-transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;\n            transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;\n          }\n\n          #rec477622108\n            .t-menu__link-item:not(.t-active):not(.tooltipstered):hover {\n            color: #8ef9f3 !important;\n          }\n\n          @supports (overflow: -webkit-marquee) and (justify-content: inherit) {\n            #rec477622108 .t-menu__link-item,\n            #rec477622108 .t-menu__link-item.t-active {\n              opacity: 1 !important;\n            }\n          }\n        ",
            }}
          />
        </div> */}
        <div
          id="rec477441155"
          className="r t-rec t-rec_pt_0 t-rec_pb_15"
          style={{ paddingTop: "0px", paddingBottom: "15px" }}
          data-animationappear="on"
          data-record-type={712}
        >
          <div
            className="t-cover"
            id="recorddiv477441155"
            bgimgfield="img"
            style={{
              height: "800px",
              backgroundImage:
                'url("https://static.tildacdn.info/tild3965-6230-4463-b635-376436646438/yuliya-pankevich-oyx.jpg")',
            }}
          >
            <div
              className="t-cover__carrier"
              id="coverCarry477441155"
              data-content-cover-id={477441155}
              data-content-cover-bg="https://static.tildacdn.info/tild3965-6230-4463-b635-376436646438/yuliya-pankevich-oyx.jpg"
              data-content-cover-height="800px"
              data-content-cover-parallax
              style={{
                height: "800px",
                backgroundAttachment: "scroll",
                backgroundPosition: "center top",
              }}
              itemScope
              itemType="http://schema.org/ImageObject"
            >
              <meta
                itemProp="image"
                content="https://static.tildacdn.info/tild3965-6230-4463-b635-376436646438/yuliya-pankevich-oyx.jpg"
              />
            </div>
            <div
              className="t-cover__filter"
              style={{
                height: "800px",
                backgroundColor: "hsla(0, 2%, 20%, 0.3)",
              }}
            />
            <div className="t712 t-container">
              <div
                className="t-cover__wrapper t-valign_middle"
                style={{ height: "800px", position: "relative", zIndex: 1 }}
              >
                <div className="t712__wrapper" data-hook-content="covercontent">
                  <div className="t-col t-col_7">
                    <div className="t712__left-content">
                      <h1
                        className="t712__title t-title t-title_xl t-animate"
                        data-animate-style="fadeinright"
                        data-animate-group="yes"
                        data-animate-order={1}
                        style={{
                          fontSize: "68px",
                          fontWeight: 600,
                          paddingTop: "80px",
                          fontFamily: '"Montserrat"',
                        }}
                        field="title"
                      ></h1>
                      <h1
                        className="text-white"
                        style={{
                          fontWeight: "bold",
                          fontSize: "64px",
                          fontColor: "white",
                        }}
                      >
                        {" "}
                        Find event spaces conveniently
                      </h1>
                      <h4 className="text-white" style={{ paddingTop: "12px" }}>
                        {" "}
                        Explore unique and affordable event spaces near you{" "}
                      </h4>
                    </div>
                  </div>

                  <div className="t-col t-col_4 t-prefix_1">
                    <div className="t712__formwrapper t712__right-content">
                      <div className="t712__form-text">
                        <div
                          className="t712__title-second t-title"
                          field="title2"
                        >
                          <div
                            style={{ fontSize: "24px" }}
                            data-customstyle="yes"
                          >
                            <span style={{ fontWeight: 600 }}>
                              Find event spaces here
                            </span>
                          </div>
                        </div>
                        <div
                          className="t712__descr-second t-descr t-descr_xxs"
                          field="descr2"
                          style={{ marginTop: "10px" }}
                        >
                          <div
                            style={{ fontSize: "16px" }}
                            data-customstyle="yes"
                          >
                            <span
                              style={{
                                color: "rgb(132, 90, 113)",
                                fontWeight: 500,
                                fontFamily: "Montserrat",
                              }}
                            >
                              Get up to 10% discount when you pay within 72
                              hours of booking
                            </span>
                          </div>
                        </div>
                      </div>
                      <form
                        id="form477441155"
                        name="form477441155"
                        role="form"
                        action="#"
                        method="POST"
                        data-formactiontype={0}
                        data-inputbox=".t-input-group"
                        data-success-url="/space"
                        className="t-form js-form-proccess t-form_inputs-total_3"
                        data-success-callback="t712_onSuccess"
                      >
                        <div
                          className="js-successbox t-form__successbox t-text t-text_md"
                          style={{ display: "none" }}
                        />
                        <div className="t-form__inputsbox">
                          <div
                            className="t-input-group t-input-group_in"
                            data-input-lid={1496154096760}
                          >
                            <div className="t-input-block">
                              <input
                                type="text"
                                name="Input"
                                className="t-input js-tilda-rule"
                                placeholder="event type"
                                data-tilda-req={1}
                                style={{
                                  color: "#3e2a35",
                                  backgroundColor: "#f8f4f9",
                                }}
                              />
                              <div className="t-input-error" />
                            </div>
                          </div>
                          <div
                            className="t-input-group t-input-group_in"
                            data-input-lid={1496154462918}
                          >
                            <div className="t-input-block">
                              <input
                                type="text"
                                name="Input_2"
                                className="t-input js-tilda-rule"
                                placeholder="location"
                                data-tilda-req={1}
                                style={{
                                  color: "#3e2a35",
                                  backgroundColor: "#f8f4f9",
                                }}
                              />
                              <div className="t-input-error" />
                            </div>
                          </div>
                          <div
                            className="t-input-group t-input-group_da"
                            data-input-lid={1659977872916}
                          >
                            <div className="t-input-block">
                              <div className="t-datepicker__wrapper">
                                <input
                                  type="text"
                                  name="Date"
                                  className="t-input t-datepicker js-tilda-rule js-tilda-mask"
                                  placeholder="00-00-0000"
                                  data-tilda-req={1}
                                  data-tilda-rule="date"
                                  data-tilda-dateformat="DD-MM-YYYY"
                                  data-tilda-datediv="dash"
                                  data-tilda-mask="99-99-9999"
                                  style={{
                                    color: "#3e2a35",
                                    backgroundColor: "#f8f4f9",
                                  }}
                                />
                                <svg
                                  role="presentation"
                                  className="t-datepicker__icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 69.5 76.2"
                                  style={{ width: "25px", fill: "#3e2a35" }}
                                >
                                  <path d="M9.6 42.9H21V31.6H9.6v11.3zm3-8.3H18v5.3h-5.3v-5.3zm16.5 8.3h11.3V31.6H29.1v11.3zm3-8.3h5.3v5.3h-5.3v-5.3zM48 42.9h11.3V31.6H48v11.3zm3-8.3h5.3v5.3H51v-5.3zM9.6 62H21V50.6H9.6V62zm3-8.4H18V59h-5.3v-5.4zM29.1 62h11.3V50.6H29.1V62zm3-8.4h5.3V59h-5.3v-5.4zM48 62h11.3V50.6H48V62zm3-8.4h5.3V59H51v-5.4z" />
                                  <path d="M59.7 6.8V5.3c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3v1.5H40V5.3C40 2.4 37.6 0 34.7 0s-5.3 2.4-5.3 5.3v1.5h-9.1V5.3C20.3 2.4 18 0 15 0c-2.9 0-5.3 2.4-5.3 5.3v1.5H0v69.5h69.5V6.8h-9.8zm-7.6-1.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.7 0c0-1.3 1-2.3 2.3-2.3S37 4 37 5.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.6 0C12.8 4 13.8 3 15 3c1.3 0 2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3V5.3zm53.7 67.9H3V9.8h6.8v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h6.8l-.1 63.4z" />
                                </svg>
                              </div>
                              <link
                                rel="stylesheet"
                                href="https://static.tildacdn.info/css/tilda-date-picker-1.0.min.css"
                              />
                              <div className="t-input-error" />
                            </div>
                          </div>
                          <div className="t-form__errorbox-middle">
                            <div
                              className="js-errorbox-all t-form__errorbox-wrapper"
                              style={{ display: "none" }}
                            >
                              <div className="t-form__errorbox-text t-text t-text_md">
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-all" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-req" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-email" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-name" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-phone" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-minlength" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-string" />
                              </div>
                            </div>
                          </div>
                          <div className="t-form__submit">
                            <button
                              type="submit"
                              onClick={() => {
                                navigate("/space");
                              }}
                              className="t-submit"
                              style={{
                                color: "#f8f4f9",
                                backgroundColor: "#ff004f",
                                fontFamily: "Montserrat",
                                fontWeight: 600,
                              }}
                            >
                              Search
                            </button>
                          </div>
                        </div>
                        <div className="t-form__errorbox-bottom">
                          <div
                            className="js-errorbox-all t-form__errorbox-wrapper"
                            style={{ display: "none" }}
                          >
                            <div className="t-form__errorbox-text t-text t-text_md">
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-all" />
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-req" />
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-email" />
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-name" />
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-phone" />
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-minlength" />
                              <p className="t-form__errorbox-item js-rule-error js-rule-error-string" />
                            </div>
                          </div>
                        </div>
                      </form>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                      #rec477441155 input::-webkit-input-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 input::-moz-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 input:-moz-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 input:-ms-input-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 textarea::-webkit-input-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 textarea::-moz-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 textarea:-moz-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n\n                      #rec477441155 textarea:-ms-input-placeholder {\n                        color: #3e2a35;\n                        opacity: 0.5;\n                      }\n                    ",
                        }}
                      />
                      <div
                        className="t712__form-bottom-text t-text t-text_xxs"
                        field="text"
                      >
                        <div
                          style={{ fontSize: "14px" }}
                          data-customstyle="yes"
                        >
                          <p style={{ textAlign: "center" }}>
                            <span
                              style={{
                                fontFamily: "Montserrat",
                                color: "rgb(132, 90, 113)",
                              }}
                            >
                              Read our terms and conditions
                            </span>
                          </p>
                        </div>
                      </div>
                      <div
                        className="t712__bg"
                        style={{ backgroundColor: "#f8f4f9", opacity: "0.7" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          #rec477441155 .t-submit:hover {\n            background-color: #8ef9f3 !important;\n          }\n\n          #rec477441155 .t-submit {\n            -webkit-transition: background-color 0.2s ease-in-out,\n              color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n              box-shadow 0.2s ease-in-out;\n            transition: background-color 0.2s ease-in-out,\n              color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n              box-shadow 0.2s ease-in-out;\n          }\n        ",
            }}
          />
        </div>
        <div
          id="rec477559403"
          className="r t-rec t-rec_pt_15 t-rec_pb_0"
          style={{ paddingTop: "15px", paddingBottom: "0px" }}
          data-record-type={33}
        >
          {/* T017 */}
          <div className="t017">
            <div className="t-container t-align_center">
              <div className="t-col t-col_10 t-prefix_1">
                <div
                  className="t017__title t-title t-title_xxs"
                  field="title"
                  style={{ color: "#3e2a35" }}
                >
                  <div style={{ fontSize: "38px" }} data-customstyle="yes">
                    <span
                      style={{
                        color: "rgb(255, 0, 79)",
                        fontWeight: 600,
                        fontFamily: "Montserrat",
                      }}
                    >
                      Explore event spaces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
          <SimpleImageSlider
            width={"60%"}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{
              position: "center",
              marginTop: "4%",
              marginBottom: "4%",
            }}
          />
        </div>

        <div
          id="rec477571844"
          className="r t-rec t-rec_pt_30 t-rec_pb_0"
          style={{ paddingTop: "30px", paddingBottom: "0px" }}
          data-animationappear="off"
          data-record-type={14}
        >
          <div
            className="t-cover"
            id="recorddiv477571844"
            bgimgfield="img"
            style={{
              height: "200px",
              backgroundImage:
                'url("https://static.tildacdn.info/tild3837-6563-4431-b337-653563663432/r-architecture-oGmf8.jpg")',
            }}
          >
            <div
              className="t-cover__carrier"
              id="coverCarry477571844"
              data-content-cover-id={477571844}
              data-content-cover-bg="https://static.tildacdn.info/tild3837-6563-4431-b337-653563663432/r-architecture-oGmf8.jpg"
              data-content-cover-height="200px"
              data-content-cover-parallax="fixed"
              style={{ height: "200px", backgroundPosition: "center bottom" }}
              itemScope
              itemType="http://schema.org/ImageObject"
            >
              <meta
                itemProp="image"
                content="https://static.tildacdn.info/tild3837-6563-4431-b337-653563663432/r-architecture-oGmf8.jpg"
              />
            </div>
            <div
              className="t-cover__filter"
              style={{
                height: "200px",
                backgroundColor: "hsla(0, 2%, 20%, 0.3)",
              }}
            />
            <div className="t-container">
              <div className="t-col t-col_12">
                <div
                  className="t-cover__wrapper t-valign_bottom"
                  style={{ height: "200px" }}
                >
                  <div
                    className="t102 t-align_center"
                    data-hook-content="covercontent"
                  >
                    <div
                      className="t102__descr t-descr t-descr_md t102__descr_center"
                      style={{ color: "#f8f4f9" }}
                      field="descr"
                    >
                      <div style={{ fontSize: "38px" }} data-customstyle="yes">
                        <span
                          style={{ fontFamily: "Montserrat", fontWeight: 600 }}
                        >
                          Earn up to GHS 10,000 monthly by listing your space
                          today
                        </span>
                      </div>
                    </div>
                    <span className="space" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="rec477573008"
          className="r t-rec t-rec_pt_30 t-rec_pb_30"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: "#f5fefe",
          }}
          data-record-type={191}
          data-bg-color="#f5fefe"
        >
          <div className="t142">
            <div className="t-container_100">
              <div className="t142__wrapone">
                <div className="t142__wraptwo">
                  <a
                    onClick={() => {
                      navigate("/listing");
                    }}
                    rel="nofollow"
                    target="_blank"
                    className
                  >
                    <div
                      className="t-btn t142__submit t-btn_md"
                      style={{
                        color: "#f8f4f9",
                        backgroundColor: "#ff004f",
                        borderRadius: "100px",
                        MozBorderRadius: "100px",
                        WebkitBorderRadius: "100px",
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                      }}
                    >
                      <span className="t142__text">Get started</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          @media (hover), (min-width: 0\\0) {\n            #rec477573008 .t-btn:not(.t-animate_no-hover):hover {\n              color: #8ef9f3 !important;\n            }\n\n            #rec477573008 .t-btn:not(.t-animate_no-hover) {\n              -webkit-transition: background-color 0.2s ease-in-out,\n                color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n                box-shadow 0.2s ease-in-out;\n              transition: background-color 0.2s ease-in-out,\n                color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n                box-shadow 0.2s ease-in-out;\n            }\n\n            #rec477573008 .t-btntext:not(.t-animate_no-hover):hover {\n              color: #8ef9f3 !important;\n            }\n          }\n        ",
            }}
          />
        </div>
        <div
          id="rec477441160"
          className="r t-rec t-rec_pt_45 t-rec_pb_45"
          style={{
            paddingTop: "45px",
            paddingBottom: "45px",
            backgroundColor: "#f8f4f9",
          }}
          data-animationappear="off"
          data-record-type={490}
          data-bg-color="#f8f4f9"
        >
          {/* t490 */}
          <div className="t490">
            <div className="t-section__container t-container">
              <div className="t-col t-col_12">
                <div className="t-section__topwrapper t-align_center">
                  <div
                    className="t-section__title t-title t-title_xs"
                    field="btitle"
                  >
                    <div style={{ fontSize: "38px" }} data-customstyle="yes">
                      <span
                        style={{ fontWeight: 600, fontFamily: "Montserrat" }}
                      >
                        Why spacebar?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-container">
              <div className="t490__col t-col t-col_4 t-align_center t-item">
                <img
                  className="t490__img t-img"
                  src="https://static.tildacdn.info/tild6532-3335-4864-b461-346164346563/location.svg"
                  imgfield="li_img__1476968690512"
                  alt=""
                  role="presentation"
                />
                <div className="t490__wrappercenter">
                  <div
                    className="t-heading t-heading_md"
                    style={{ color: "#3e2a35" }}
                    field="li_title__1476968690512"
                  >
                    <div style={{ fontSize: "26px" }} data-customstyle="yes">
                      <span
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                          color: "rgb(97, 66, 83)",
                        }}
                      >
                        Unique Spaces
                      </span>
                    </div>
                  </div>
                  <div
                    className="t-descr t-descr_xs"
                    style={{ fontWeight: 400, fontFamily: '"Montserrat"' }}
                    field="li_descr__1476968690512"
                  >
                    <div style={{ fontSize: "16px" }} data-customstyle="yes">
                      <span
                        style={{
                          fontFamily: "Montserrat",
                          color: "rgb(132, 90, 113)",
                          fontWeight: 500,
                        }}
                      >
                        Find one-of-a-kind spaces around you for every type of
                        event
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="t490__col t-col t-col_4 t-align_center t-item">
                <img
                  className="t490__img t-img"
                  src="https://static.tildacdn.info/tild3432-3731-4433-b939-373966336562/3.svg"
                  imgfield="li_img__1476968700508"
                  alt=""
                  role="presentation"
                />
                <div className="t490__wrappercenter">
                  <div
                    className="t-heading t-heading_md"
                    style={{ color: "#3e2a35" }}
                    field="li_title__1476968700508"
                  >
                    <div style={{ fontSize: "26px" }} data-customstyle="yes">
                      <span
                        style={{
                          color: "rgb(97, 66, 83)",
                          fontWeight: 600,
                          fontFamily: "Montserrat",
                        }}
                      >
                        Convenient Booking
                      </span>
                    </div>
                  </div>
                  <div
                    className="t-descr t-descr_xs"
                    style={{ fontWeight: 400, fontFamily: '"Montserrat"' }}
                    field="li_descr__1476968700508"
                  >
                    <div style={{ fontSize: "16px" }} data-customstyle="yes">
                      <span
                        style={{
                          color: "rgb(132, 90, 113)",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                        }}
                      >
                        Explore and book your chosen event space in 10 minutes
                        or less
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="t490__col t-col t-col_4 t-align_center t-item">
                <img
                  className="t490__img t-img"
                  src="https://static.tildacdn.info/tild6232-3031-4639-a539-383539323537/1.svg"
                  imgfield="li_img__1476968722790"
                  alt=""
                  role="presentation"
                />
                <div className="t490__wrappercenter">
                  <div
                    className="t-heading t-heading_md"
                    style={{ color: "#3e2a35" }}
                    field="li_title__1476968722790"
                  >
                    <div style={{ fontSize: "26px" }} data-customstyle="yes">
                      <span
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                          color: "rgb(97, 66, 83)",
                        }}
                      >
                        Add-on Services
                      </span>
                    </div>
                  </div>
                  <div
                    className="t-descr t-descr_xs"
                    style={{ fontWeight: 400, fontFamily: '"Montserrat"' }}
                    field="li_descr__1476968722790"
                  >
                    <div style={{ fontSize: "16px" }} data-customstyle="yes">
                      Tap into our network of vetted vendors and save money on
                      events
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-section__container t-container">
              <div className="t-col t-col_12">
                <div className="t-section__bottomwrapper t-clear t-align_center">
                  <a
                    onClick={() => {
                      navigate("/space");
                    }}
                    target="_blank"
                    className="t-btn t-btn_md js-click-stat"
                    data-tilda-event-name="/tilda/click/rec477441160/button1"
                    style={{
                      color: "#f8f4f9",
                      backgroundColor: "#ff004f",
                      borderRadius: "100px",
                      MozBorderRadius: "100px",
                      WebkitBorderRadius: "100px",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                    }}
                  >
                    <table style={{ width: "100%", height: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Browse spaces</td>
                        </tr>
                      </tbody>
                    </table>
                  </a>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n            #rec477441160 .t-btn:not(.t-animate_no-hover):hover {\n              background-color: #8ef9f3 !important;\n            }\n\n            #rec477441160 .t-btn:not(.t-animate_no-hover) {\n              transition: background-color 0.2s ease-in-out,\n                color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n                box-shadow 0.2s ease-in-out;\n            }\n          ",
              }}
            />
          </div>
        </div>
        <div
          id="rec477441163"
          className="r t-rec t-rec_pt_0 t-rec_pb_0"
          style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            backgroundColor: "#f8f4f9",
          }}
          data-animationappear="off"
          data-record-type={680}
          data-bg-color="#f8f4f9"
        >
          <div className="t680">
            <div className="t680__container t-container_100">
              <div className="t680__row t680__row_indent-0px t-row">
                <div
                  className="t680__tile t680__tile_left t680__tile_big-img t680__top"
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <meta
                    itemProp="image"
                    content="https://static.tildacdn.info/tild3435-3636-4263-b765-666439326132/IMG-9728.jpg"
                  />
                  <meta itemProp="caption" content="Osu" />
                  <div
                    className="t680__bgimg t680__bgimg_lg t-bgimg"
                    data-original="https://static.tildacdn.info/tild3435-3636-4263-b765-666439326132/IMG-9728.jpg"
                    bgimgfield="gi_img__0"
                    title="Osu"
                    data-zoomable="yes"
                    data-img-zoom-url="https://static.tildacdn.info/tild3435-3636-4263-b765-666439326132/IMG-9728.jpg"
                    style={{
                      background:
                        'url("https://static.tildacdn.info/tild3435-3636-4263-b765-666439326132/IMG-9728.jpg") ',
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <div className="t680__tile t680__tile_right">
                  <div
                    className="t680__bgimg_wrapper t680__bgimg_wrapper_left"
                    itemScope
                    itemType="http://schema.org/ImageObject"
                  >
                    <meta
                      itemProp="image"
                      content="https://static.tildacdn.info/tild3262-3034-4237-b264-386531313762/image_dd6724c4-8b7c-.jpg"
                    />
                    <meta itemProp="caption" content="Kokrobite" />
                    <div
                      className="t680__bgimg t680__bgimg_sm t-bgimg"
                      data-original="https://static.tildacdn.info/tild3262-3034-4237-b264-386531313762/image_dd6724c4-8b7c-.jpg"
                      bgimgfield="gi_img__1"
                      title="Kokrobite"
                      data-zoomable="yes"
                      data-img-zoom-url="https://static.tildacdn.info/tild3262-3034-4237-b264-386531313762/image_dd6724c4-8b7c-.jpg"
                      style={{
                        background:
                          'url("https://static.tildacdn.info/tild3262-3034-4237-b264-386531313762/image_dd6724c4-8b7c-.jpg")',
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="t680__bgimg_wrapper t680__bgimg_wrapper_right"
                    itemScope
                    itemType="http://schema.org/ImageObject"
                  >
                    <meta
                      itemProp="image"
                      content="https://static.tildacdn.info/tild3731-3862-4132-a264-613737393834/2021-08-18_1.jpg"
                    />
                    <meta itemProp="caption" content="Adjiringanor" />
                    <div
                      className="t680__bgimg t680__bgimg_sm t-bgimg"
                      data-original="https://static.tildacdn.info/tild3731-3862-4132-a264-613737393834/2021-08-18_1.jpg"
                      bgimgfield="gi_img__2"
                      title="Adjiringanor"
                      data-zoomable="yes"
                      data-img-zoom-url="https://static.tildacdn.info/tild3731-3862-4132-a264-613737393834/2021-08-18_1.jpg"
                      style={{
                        background:
                          'url("https://static.tildacdn.info/tild3731-3862-4132-a264-613737393834/2021-08-18_1.jpg")',
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                  <div className="t680__gap" />
                  <div
                    className="t680__bgimg_wrapper t680__bgimg_wrapper_left t680__bgimg_wrapper_100"
                    itemScope
                    itemType="http://schema.org/ImageObject"
                  >
                    <meta
                      itemProp="image"
                      content="https://static.tildacdn.info/tild3264-6165-4436-a262-323261303939/FB_IMG_1659015770889.jpg"
                    />
                    <meta itemProp="caption" content="East Legon" />
                    <div
                      className="t680__bgimg t680__bgimg_sm t-bgimg"
                      data-original="https://static.tildacdn.info/tild3264-6165-4436-a262-323261303939/FB_IMG_1659015770889.jpg"
                      bgimgfield="gi_img__3"
                      title="East Legon"
                      data-zoomable="yes"
                      data-img-zoom-url="https://static.tildacdn.info/tild3264-6165-4436-a262-323261303939/FB_IMG_1659015770889.jpg"
                      style={{
                        background:
                          'url("https://static.tildacdn.info/tild3264-6165-4436-a262-323261303939/FB_IMG_1659015770889.jpg")',
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="rec477881224"
          className="r t-rec t-rec_pt_45 t-rec_pb_45"
          style={{
            paddingTop: "45px",
            paddingBottom: "45px",
            backgroundColor: "#f5fefe",
          }}
          data-animationappear="off"
          data-record-type={486}
          data-bg-color="#f5fefe"
        >
          {/* T486 */}
          <div className="t486">
            <div className="t-container">
              <div className="t486__top t-col t-col_7">
                <div className="t486__textwrapper t-align_left">
                  <div className="t486__content t-valign_middle">
                    <div className="t486__box">
                      <div
                        className="t486__title t-title t-title_xs"
                        field="title"
                      >
                        <div
                          style={{ fontSize: "38px" }}
                          data-customstyle="yes"
                        >
                          <span
                            style={{
                              fontFamily: "Montserrat",
                              color: "rgb(62, 42, 53)",
                              fontWeight: 600,
                            }}
                          >
                            Digital Magazine Launch
                          </span>
                        </div>
                      </div>
                      <div
                        className="t486__descr t-descr t-descr_md"
                        field="descr"
                        style={{ color: "#3e2a35" }}
                      >
                        <div
                          style={{ fontSize: "20px" }}
                          data-customstyle="yes"
                        >
                          <span
                            style={{
                              color: "rgb(62, 42, 53)",
                              fontWeight: 400,
                              fontFamily: "Montserrat",
                            }}
                          >
                            The flagship event was held on the 18th of June,
                            2022 to launch the publication of the interior
                            decoration imprint - Décor by Mush. The setting was
                            minimalistic with a chic theme. The spacebar team
                            worked with vetted vendors to curate this memorable
                            event. Check out the magazine below.
                          </span>
                        </div>
                      </div>
                      <div className="t486__btn-container">
                        <div className="t486__btntext-wrapper">
                          <a
                            href="https://www.decorbymush.com/"
                            target="_blank"
                            className="t-btntext js-click-stat"
                            data-tilda-event-name="/tilda/click/rec477881224/button1"
                            style={{
                              color: "#ff004f",
                              fontFamily: "Montserrat",
                              fontWeight: 600,
                            }}
                          >
                            View website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="t-col t-col_5">
                <div className="t486__imgcontainer">
                  <div className="t486__row">
                    <div
                      className="t486__imgwrapper"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <meta
                        itemProp="image"
                        content="https://static.tildacdn.info/tild6433-3463-4137-a565-323733303832/mush.png"
                      />
                      <div
                        className="t486__blockimg t-bgimg"
                        data-original="https://static.tildacdn.info/tild6433-3463-4137-a565-323733303832/mush.png"
                        bgimgfield="img"
                        style={{
                          backgroundImage:
                            'url("https://static.tildacdn.info/tild6433-3463-4137-a565-323733303832/mush.png")',
                        }}
                      />
                      <div className="t486__separator" />
                    </div>
                    <div
                      className="t486__imgwrapper"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <meta
                        itemProp="image"
                        content="https://static.tildacdn.info/tild6564-3238-4466-b530-336330346639/looks.png"
                      />
                      <div
                        className="t486__blockimg t-bgimg"
                        data-original="https://static.tildacdn.info/tild6564-3238-4466-b530-336330346639/looks.png"
                        bgimgfield="img2"
                        style={{
                          backgroundImage:
                            'url("https://static.tildacdn.info/tild6564-3238-4466-b530-336330346639/looks.png")',
                        }}
                      />
                      <div className="t486__separator" />
                    </div>
                  </div>
                  <div className="t486__row t486__row_last">
                    <div
                      className="t486__imgwrapper"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <meta
                        itemProp="image"
                        content="https://static.tildacdn.info/tild6638-6530-4465-b164-613636343962/emily.png"
                      />
                      <div
                        className="t486__blockimg t-bgimg"
                        data-original="https://static.tildacdn.info/tild6638-6530-4465-b164-613636343962/emily.png"
                        bgimgfield="img3"
                        style={{
                          backgroundImage:
                            'url("https://static.tildacdn.info/tild6638-6530-4465-b164-613636343962/emily.png")',
                        }}
                      />
                      <div className="t486__separator" />
                    </div>
                    <div
                      className="t486__imgwrapper"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <meta
                        itemProp="image"
                        content="https://static.tildacdn.info/tild3831-6661-4866-b333-633637383537/cocktail.png"
                      />
                      <div
                        className="t486__blockimg t-bgimg"
                        data-original="https://static.tildacdn.info/tild3831-6661-4866-b333-633637383537/cocktail.png"
                        bgimgfield="img4"
                        style={{
                          backgroundImage:
                            'url("https://static.tildacdn.info/tild3831-6661-4866-b333-633637383537/cocktail.png")',
                        }}
                      />
                      <div className="t486__separator" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          @media (hover), (min-width: 0\\0) {\n            #rec477881224 .t-btn:not(.t-animate_no-hover):hover {\n              background-color: #8ef9f3 !important;\n              color: #8ef9f3 !important;\n              border-color: #8ef9f3 !important;\n            }\n\n            #rec477881224 .t-btn:not(.t-animate_no-hover) {\n              -webkit-transition: background-color 0.2s ease-in-out,\n                color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n                box-shadow 0.2s ease-in-out;\n              transition: background-color 0.2s ease-in-out,\n                color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n                box-shadow 0.2s ease-in-out;\n            }\n\n            #rec477881224 .t-btntext:not(.t-animate_no-hover):hover {\n              color: #8ef9f3 !important;\n            }\n          }\n        ",
            }}
          />
        </div>

        <div
          id="rec477441170"
          className="r t-rec"
          style={{ backgroundColor: "#f8f4f9" }}
          data-animationappear="off"
          data-record-type={698}
          data-bg-color="#f8f4f9"
        >
          <div
            className="t-cover"
            id="recorddiv477441170"
            bgimgfield="img"
            style={{
              height: "700px",
              backgroundImage:
                'url("https://static.tildacdn.info/tild3731-6462-4134-a234-383535393066/hassan-ouajbir-d2DpU.jpg")',
            }}
          >
            <div
              className="t-cover__carrier"
              id="coverCarry477441170"
              data-content-cover-id={477441170}
              data-content-cover-bg="https://static.tildacdn.info/tild3731-6462-4134-a234-383535393066/hassan-ouajbir-d2DpU.jpg"
              data-content-cover-height="300px"
              data-content-cover-parallax="fixed"
              style={{ height: "600px" }}
              itemScope
              itemType="http://schema.org/ImageObject"
            >
              <meta
                itemProp="image"
                content="https://static.tildacdn.info/tild3731-6462-4134-a234-383535393066/hassan-ouajbir-d2DpU.jpg"
              />
            </div>
            <div
              className="t-cover__filter"
              style={{
                height: "700px",
                backgroundColor: "hsla(0, 2%, 20%, 0.3)",
              }}
            />
            <div className="t698">
              <div className="t-container">
                <div className="t-width t-width_8 t698__mainblock">
                  <div
                    className="t-cover__wrapper t-valign_middle"
                    style={{ height: "700px" }}
                  >
                    <div
                      className="t698__mainwrapper"
                      data-hook-content="covercontent"
                    >
                      <div
                        className="t698__title t-title t-title_xs"
                        field="title"
                      >
                        <div
                          style={{ fontSize: "38px" }}
                          data-customstyle="yes"
                        >
                          <span
                            style={{
                              color: "rgb(248, 244, 249)",
                              fontWeight: 600,
                              fontFamily: "Montserrat",
                            }}
                          >
                            Couldn't find a space?
                          </span>
                        </div>
                      </div>
                      <div
                        className="t698__descr t-descr t-descr_md"
                        field="descr"
                      >
                        <div
                          style={{ fontSize: "20px" }}
                          data-customstyle="yes"
                        >
                          <span
                            style={{
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                            }}
                          >
                            Enter your details below and we will contact you as
                            soon as possible
                          </span>
                        </div>
                      </div>
                      <div>
                        <form
                          id="form477441170"
                          name="form477441170"
                          role="form"
                          action="#"
                          method="POST"
                          data-formactiontype={0}
                          data-inputbox=".t-input-group"
                          className="t-form js-form-proccess t-form_inputs-total_4"
                          data-success-callback="t698_onSuccess"
                        >
                          <div
                            className="js-successbox t-form__successbox t-text t-text_md"
                            style={{
                              display: "none",
                              color: "#f8f4f9",
                              backgroundColor: "#3e2a35",
                            }}
                          >
                            Submitted successfully!
                          </div>
                          <div className="t-form__inputsbox">
                            <div
                              className="t-input-group t-input-group_nm"
                              data-input-lid={1495646567135}
                            >
                              <div className="t-input-block">
                                <input
                                  type="text"
                                  autoComplete="name"
                                  name="Name"
                                  className="t-input js-tilda-rule"
                                  placeholder="name"
                                  data-tilda-req={1}
                                  data-tilda-rule="name"
                                  style={{
                                    color: "#000000",
                                    backgroundColor: "#ffffff",
                                  }}
                                />
                                <div className="t-input-error" />
                              </div>
                            </div>
                            <div
                              className="t-input-group t-input-group_ph"
                              data-input-lid={1495646545048}
                            >
                              <div className="t-input-block">
                                <input
                                  type="tel"
                                  autoComplete="tel"
                                  name="Phone"
                                  className="t-input js-tilda-rule"
                                  placeholder="phone number"
                                  data-tilda-req={1}
                                  data-tilda-rule="phone"
                                  pattern="[0-9]*"
                                  style={{
                                    color: "#000000",
                                    backgroundColor: "#ffffff",
                                  }}
                                />
                                <div className="t-input-error" />
                              </div>
                            </div>
                            <div
                              className="t-input-group t-input-group_in"
                              data-input-lid={1660072044880}
                            >
                              <div className="t-input-block">
                                <input
                                  type="text"
                                  name="Input"
                                  className="t-input js-tilda-rule"
                                  placeholder="location"
                                  data-tilda-req={1}
                                  style={{
                                    color: "#000000",
                                    backgroundColor: "#ffffff",
                                  }}
                                />
                                <div className="t-input-error" />
                              </div>
                            </div>
                            <div
                              className="t-input-group t-input-group_da"
                              data-input-lid={1660072136228}
                            >
                              <div className="t-input-block">
                                <div className="t-datepicker__wrapper">
                                  <input
                                    type="text"
                                    name="Date"
                                    className="t-input t-datepicker js-tilda-rule js-tilda-mask"
                                    placeholder="00-00-0000"
                                    data-tilda-req={1}
                                    data-tilda-rule="date"
                                    data-tilda-dateformat="DD-MM-YYYY"
                                    data-tilda-datediv="dash"
                                    data-tilda-mask="99-99-9999"
                                    style={{
                                      color: "#000000",
                                      backgroundColor: "#ffffff",
                                    }}
                                  />
                                  <svg
                                    role="presentation"
                                    className="t-datepicker__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 69.5 76.2"
                                    style={{ width: "25px" }}
                                  >
                                    <path d="M9.6 42.9H21V31.6H9.6v11.3zm3-8.3H18v5.3h-5.3v-5.3zm16.5 8.3h11.3V31.6H29.1v11.3zm3-8.3h5.3v5.3h-5.3v-5.3zM48 42.9h11.3V31.6H48v11.3zm3-8.3h5.3v5.3H51v-5.3zM9.6 62H21V50.6H9.6V62zm3-8.4H18V59h-5.3v-5.4zM29.1 62h11.3V50.6H29.1V62zm3-8.4h5.3V59h-5.3v-5.4zM48 62h11.3V50.6H48V62zm3-8.4h5.3V59H51v-5.4z" />
                                    <path d="M59.7 6.8V5.3c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3v1.5H40V5.3C40 2.4 37.6 0 34.7 0s-5.3 2.4-5.3 5.3v1.5h-9.1V5.3C20.3 2.4 18 0 15 0c-2.9 0-5.3 2.4-5.3 5.3v1.5H0v69.5h69.5V6.8h-9.8zm-7.6-1.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.7 0c0-1.3 1-2.3 2.3-2.3S37 4 37 5.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.6 0C12.8 4 13.8 3 15 3c1.3 0 2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3V5.3zm53.7 67.9H3V9.8h6.8v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h6.8l-.1 63.4z" />
                                  </svg>
                                </div>
                                <link
                                  rel="stylesheet"
                                  href="https://static.tildacdn.info/css/tilda-date-picker-1.0.min.css"
                                />
                                <div className="t-input-error" />
                              </div>
                            </div>
                            <div className="t-form__errorbox-middle">
                              <div
                                className="js-errorbox-all t-form__errorbox-wrapper"
                                style={{ display: "none" }}
                              >
                                <div className="t-form__errorbox-text t-text t-text_md">
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-all" />
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-req" />
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-email" />
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-name" />
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-phone" />
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-minlength" />
                                  <p className="t-form__errorbox-item js-rule-error js-rule-error-string" />
                                </div>
                              </div>
                            </div>
                            <div className="t-form__submit">
                              <button
                                type="submit"
                                className="t-submit"
                                style={{
                                  color: "#f8f4f9",
                                  backgroundColor: "#ff004f",
                                  fontFamily: "Montserrat",
                                  fontWeight: 600,
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="t-form__errorbox-bottom">
                            <div
                              className="js-errorbox-all t-form__errorbox-wrapper"
                              style={{ display: "none" }}
                            >
                              <div className="t-form__errorbox-text t-text t-text_md">
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-all" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-req" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-email" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-name" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-phone" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-minlength" />
                                <p className="t-form__errorbox-item js-rule-error js-rule-error-string" />
                              </div>
                            </div>
                          </div>
                        </form>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                        #rec477441170 input::-webkit-input-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 input::-moz-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 input:-moz-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 input:-ms-input-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 textarea::-webkit-input-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 textarea::-moz-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 textarea:-moz-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n\n                        #rec477441170 textarea:-ms-input-placeholder {\n                          color: #000000;\n                          opacity: 0.5;\n                        }\n                      ",
                          }}
                        />
                      </div>
                      <div
                        className="t698__form-bottom-text t-text t-text_xs"
                        field="text"
                      >
                        <div
                          style={{ fontSize: "14px" }}
                          data-customstyle="yes"
                        >
                          <span
                            style={{
                              color: "rgb(248, 244, 249)",
                              fontFamily: "Montserrat",
                            }}
                          >
                            By clicking the button you agree to our Privacy
                            Policy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          #rec477441170 .t-submit:hover {\n            background-color: #8ef9f3 !important;\n          }\n\n          #rec477441170 .t-submit {\n            -webkit-transition: background-color 0.2s ease-in-out,\n              color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n              box-shadow 0.2s ease-in-out;\n            transition: background-color 0.2s ease-in-out,\n              color 0.2s ease-in-out, border-color 0.2s ease-in-out,\n              box-shadow 0.2s ease-in-out;\n          }\n        ",
            }}
          />
        </div>
        <div
          id="rec477441172"
          className="r t-rec t-rec_pt_30 t-rec_pb_30"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: "#f8f4f9",
          }}
          data-animationappear="off"
          data-record-type={555}
          data-bg-color="#f8f4f9"
        >
          {/* t555 */}
          <div className="t555">
            <div className="t-container" style={{ margin: "0 auto" }}>
              <div className="t-col t-col_5">
                <div className="t555__contentbox" style={{ height: "200px" }}>
                  <div className="t555__contentwrapper">
                    <div
                      className="t555__title t-heading t-heading_sm"
                      style={{ color: "#ff004f", fontFamily: '"Montserrat"' }}
                      field="title"
                    >
                      <div style={{ fontSize: "38px" }} data-customstyle="yes">
                        <span
                          style={{
                            fontWeight: 600,
                            fontFamily: "Montserrat",
                            color: "rgb(255, 0, 79)",
                          }}
                        >
                          Contact us
                        </span>
                      </div>
                    </div>
                    <div className="t-text t-text_md" field="text">
                      <div style={{ fontSize: "20px" }} data-customstyle="yes">
                        <span
                          style={{
                            fontWeight: 400,
                            fontFamily: "Montserrat",
                            color: "rgb(62, 42, 53)",
                          }}
                        >
                          No. 20 Aluguntugui Street, Ambassadorial Enclave, East
                          Legon, Accra, Ghana
                        </span>
                      </div>
                    </div>
                    <div className="t-sociallinks">
                      <div className="t-sociallinks__wrapper">
                        {/* new soclinks */}
                        <div className="t-sociallinks__item t-sociallinks__item_phone">
                          <a
                            href="tel:+233 20 049 8056"
                            target="_blank"
                            rel="nofollow"
                            style={{ width: "30px", height: "30px" }}
                          >
                            <svg
                              className="t-sociallinks__svg"
                              width="30px"
                              height="30px"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#a)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50ZM32.3668 30.3616c1.529-1.5266 2.313-2.1741 2.7866-2.3015.5616-.1511 1.0518-.0196 1.5634.4196.4329.3715 1.527 1.4916 2.2759 2.3299 2.2004 2.4633 4.882 5.8263 5.2576 6.5935.1136.2322.1247.2979.1055.6292-.0354.6107-.1598.802-.9765 1.5021-1.3026 1.1165-3.299 3.2046-3.9969 4.1805-.4567.6386-.4698 1.0387-.0576 1.7681.3502.6197 2.0532 2.862 3.2535 4.2837 2.0092 2.38 4.3376 4.6029 6.599 6.3002 1.6806 1.2614 4.0441 2.7152 5.6262 3.4606 1.1308.5328 1.4843.5028 2.2087-.1874.6947-.6619 1.5124-1.7299 2.8824-3.7642.4462-.6627.8793-1.2623.9624-1.3325.2534-.2141.5397-.3152.9571-.3379.2672-.0145.4467.0007.5916.05.2786.0949 1.005.549 3.9543 2.4721 1.3685.8924 2.8854 1.8756 3.3709 2.1849 2.7509 1.7526 3.0562 1.988 3.1982 2.4656.1894.6376.0314 1.0473-.8661 2.2452-1.1143 1.4874-2.9896 3.4964-4.389 4.7019-1.1352.978-2.5943 1.9613-4.0331 2.7178l-.6221.3271-.6298-.0005c-1.8358-.0011-3.567-.3672-6.2166-1.3144-6.2054-2.2186-11.7074-5.4657-16.5254-9.7527-.9039-.8044-3.0041-2.9209-3.7864-3.8159-2.6069-2.9827-4.5701-5.8918-6.2658-9.2845-1.2218-2.4446-2.3446-5.2818-2.5339-6.4026-.2774-1.6423.3983-3.7909 1.9148-6.0887.9075-1.3749 1.9016-2.562 3.3911-4.0492Z"
                                  fill="#ff004f"
                                />
                              </g>
                              <defs>
                                <clipPath id="a">
                                  <path fill="#fff" d="M0 0h100v100H0z" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="t-sociallinks__item t-sociallinks__item_email">
                          <a
                            href="mailto:info@ourspacebar.com"
                            target="_blank"
                            rel="nofollow"
                            style={{ width: "30px", height: "30px" }}
                          >
                            <svg
                              className="t-sociallinks__svg"
                              width="30px"
                              height="30px"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50ZM26.2268 34.1813c.3042-.9738.9636-1.693 1.8568-2.0249l.4151-.1543 21.4794-.0018c21.3404-.0017 21.4819-.0009 21.8807.1335.9642.3248 1.6814 1.1482 1.9797 2.2727l.0944.3556-1.7711 1.2707c-2.462 1.7666-6.8447 4.9166-8.8523 6.3624-.925.6662-2.2783 1.639-3.0072 2.1619-2.1029 1.5081-4.2894 3.0785-5.891 4.2312-3.6493 2.6264-4.3577 3.1288-4.4113 3.1288-.0541 0-.817-.5414-4.5039-3.1961-1.6149-1.1627-3.4655-2.4914-5.7994-4.1637-.7296-.5227-2.1661-1.5561-3.1924-2.2964-1.0262-.7404-2.4421-1.7593-3.1465-2.2642-.7044-.5051-2.3496-1.6873-3.656-2.6273s-2.646-1.9002-2.9769-2.1338c-.667-.4708-.675-.4878-.4981-1.0543Zm-.1497 27.1823c-.0616.0397-.0771-2.244-.0771-11.3267 0-6.257.0122-11.3764.0271-11.3764.015 0 1.063.7458 2.3291 1.6574 2.2612 1.628 3.4539 2.4857 6.7132 4.8273 2.1704 1.5593 4.0585 2.9159 5.6761 4.0785.7296.5244 1.3265.9876 1.3265 1.0293 0 .0718-.8103.6465-3.9486 2.8008-.7465.5124-2.0931 1.4401-2.9923 2.0616-.8992.6215-3.1064 2.1429-4.9049 3.3809-1.7984 1.238-3.4504 2.3784-3.6709 2.5342-.2206.1559-.4357.3058-.4782.3331Zm43.234-19.3639c.6277-.4485 1.9187-1.381 2.8688-2.0722.9502-.6912 1.7483-1.259 1.7738-1.2619.0255-.0028.0463 5.1143.0463 11.3713 0 9.0827-.0155 11.3664-.0771 11.3267-.0424-.0273-.2576-.1768-.4782-.3323-.2205-.1554-1.0951-.7591-1.9434-1.3415-.8483-.5824-1.6812-1.1582-1.8509-1.2795-.1697-.1213-.7388-.5155-1.2648-.8759-.526-.3604-1.3172-.9043-1.7583-1.2086-.4412-.3043-2.1348-1.4711-3.7635-2.593-4.735-3.2613-4.9358-3.4028-4.9358-3.4788 0-.0759.2206-.2386 4.0412-2.9806 1.3064-.9376 3.2359-2.3243 4.2879-3.0815 1.0519-.7573 2.4262-1.7437 3.054-2.1922ZM37.8152 57.1366c.3609-.2411 1.7297-1.1886 4.8121-3.3308 1.2215-.849 2.2627-1.5349 2.3136-1.5242.0509.0107 1.0504.7092 2.2211 1.5523 1.1706.8431 2.2361 1.5743 2.3676 1.625.3044.1171.6365.117.9414-.0003.1318-.0507 1.1964-.7809 2.3658-1.6228 1.1693-.8418 2.1572-1.5435 2.1951-1.5594.0604-.0253 1.5111.9576 5.8267 3.9476 1.1431.7919 2.7209 1.8798 5.9537 4.1051.9502.6541 2.9214 2.014 4.3805 3.022l2.653 1.8328-.0051.2599c-.0072.3723-.3476 1.0784-.7463 1.5482-.3863.4549-1.0056.8296-1.5552.9408C71.322 67.9767 63.8578 68 50 68c-13.8578 0-21.322-.0233-21.5392-.0672-.5496-.1112-1.1689-.4859-1.5552-.9408-.3741-.4409-.7126-1.118-.7618-1.5243l-.0316-.2603 1.656-1.14c.9108-.627 2.2112-1.5239 2.8899-1.9932 3.6716-2.539 6.8851-4.7559 7.1571-4.9376Z"
                                fill="#ff004f"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="t-col t-col_7">
                <div
                  className="t-map-lazyload t555__map"
                  style={{
                    height: "200px",
                    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  data-maplazy-load="false"
                >
                  <div
                    className="t-map"
                    id="separateMap477441172"
                    data-map-language="EN"
                    data-map-x="-74.005941"
                    data-map-y="40.7127837"
                    data-map-zoom={14}
                    data-map-title=" Contact us "
                    style={{ width: "100%", height: "200px" }}
                    data-map-style='[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="rec477942951"
          className="r t-rec t-rec_pt_15 t-rec_pb_15"
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            backgroundColor: "#ff004f",
          }}
          data-animationappear="off"
          data-record-type={452}
          data-bg-color="#ff004f"
        >
          {/* T452 */}
          <div className="t452" id="t-footer_477942951">
            <div className="t452__maincontainer" style={{ height: "30px" }}>
              <div className="t452__content">
                <div className="t452__col t452__col_hiddenmobile">
                  <div
                    className="t452__typo t452__copyright t-name t-name_xs"
                    field="text"
                    style={{
                      color: "#f8f4f9",
                      fontWeight: 600,
                      fontFamily: '"Montserrat"',
                    }}
                  >
                    <div style={{ fontSize: "22px" }} data-customstyle="yes">
                      <span
                        style={{
                          color: "rgb(248, 244, 249)",
                          fontWeight: 600,
                          fontFamily: "Montserrat",
                        }}
                      >
                        © 2022 spacebar
                      </span>
                    </div>
                  </div>
                </div>
                <div className="t452__col t452__col_center t-align_center">
                  <div className="t-sociallinks">
                    <div className="t-sociallinks__wrapper">
                      {/* new soclinks */}
                      <div
                        className="t-sociallinks__item t-sociallinks__item_facebook"
                        title="facebook"
                      >
                        <a
                          href="https://www.facebook.com/ourpacebarhq/"
                          target="_blank"
                          rel="nofollow"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <svg
                            className="t-sociallinks__svg"
                            width="30px"
                            height="30px"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z"
                              fill="#f8f4f9"
                            />
                          </svg>
                        </a>
                      </div>
                      <div
                        className="t-sociallinks__item t-sociallinks__item_twitter"
                        title="twitter"
                      >
                        <a
                          href="https://instagram.com/ourspacebarhq"
                          target="_blank"
                          rel="nofollow"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <svg
                            className="t-sociallinks__svg"
                            width="30px"
                            height="30px"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm19.091-63.636c2.046-.227 4.09-.682 5.909-1.591-1.364 2.045-2.954 3.863-5.228 5v1.364c0 13.636-10.227 29.09-29.09 29.09-5.909 0-11.137-1.59-15.682-4.545.909.227 1.59.227 2.5.227 4.773 0 9.318-1.59 12.727-4.318-4.545 0-8.181-2.955-9.545-7.046.455.227 1.137.227 1.818.227.907 0 1.814-.226 2.72-.453l.008-.002c-4.772-.909-8.182-5-8.182-10v-.227a8.196 8.196 0 0 0 4.546 1.364c-2.727-1.819-4.546-4.773-4.546-8.41 0-2.045.455-3.636 1.364-5.226 5.227 6.136 12.727 10.227 21.136 10.682-.227-.682-.227-1.364-.227-2.273A10.184 10.184 0 0 1 59.546 30c2.954 0 5.681 1.136 7.5 3.181 2.5-.454 4.545-1.362 6.59-2.5-.909 2.501-2.5 4.319-4.545 5.683Z"
                              fill="#f8f4f9"
                            />
                          </svg>
                        </a>
                      </div>
                      <div
                        className="t-sociallinks__item t-sociallinks__item_instagram"
                        title="instagram"
                      >
                        <a
                          href="https://twitter.com/ourspacebarhq"
                          target="_blank"
                          rel="nofollow"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <svg
                            className="t-sociallinks__svg"
                            width="30px"
                            height="30px"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
                              fill="#f8f4f9"
                            />
                          </svg>
                        </a>
                      </div>
                      <div
                        className="t-sociallinks__item t-sociallinks__item_linkedin"
                        title="linkedin"
                      >
                        <a
                          href="https://www.linkedin.com/company/ourspacebar"
                          target="_blank"
                          rel="nofollow"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <svg
                            className="t-sociallinks__svg"
                            width="30px"
                            height="30px"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm23-31.0002V52.363c0-8.9114-4.7586-13.0586-11.1079-13.0586-5.1234 0-7.4123 2.8199-8.6942 4.7942v-4.1124h-9.6468c.1297 2.7235 0 29.0136 0 29.0136h9.6484v-16.203c0-.8675.0657-1.731.3203-2.3513.6981-1.7351 2.284-3.5286 4.9491-3.5286 3.4905 0 4.8859 2.6611 4.8859 6.5602v15.5227H73ZM53.1979 44.0986v.094h-.0632c.0069-.0111.0148-.0228.0229-.0346.0137-.0198.0281-.0401.0403-.0594ZM28 31.0123C28 28.1648 30.1583 26 33.4591 26c3.3016 0 5.3302 2.1648 5.3934 5.0123 0 2.7851-2.0918 5.0156-5.4567 5.0156h-.064c-3.2351 0-5.3318-2.2305-5.3318-5.0156Zm10.2177 37.9875h-9.6445V39.9862h9.6445v29.0136Z"
                              fill="#f8f4f9"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t452__col t452__col_mobile">
                  <div
                    className="t452__typo t452__copyright t-name t-name_xs"
                    field="text"
                    style={{
                      color: "#f8f4f9",
                      fontWeight: 600,
                      fontFamily: '"Montserrat"',
                    }}
                  >
                    <div style={{ fontSize: "22px" }} data-customstyle="yes">
                      <span
                        style={{
                          color: "rgb(248, 244, 249)",
                          fontWeight: 600,
                          fontFamily: "Montserrat",
                        }}
                      >
                        © 2022 spacebar
                      </span>
                    </div>
                  </div>
                </div>
                <div className="t452__col">
                  <div className="t452__scroll t-align_right">
                    <a
                      className="t452__typo t-name t-name_xs t452_scrolltop"
                      style={{
                        color: "#f8f4f9",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        fontWeight: 700,
                        fontFamily: '"Montserrat"',
                      }}
                      href="javascript:t452_scrollToTop();"
                    >
                      Back to top
                      <span className="t452__icon">
                        <svg
                          role="presentation"
                          width="5px"
                          height="17px"
                          viewBox="0 0 6 20"
                          version="1.1"
                        >
                          <defs />
                          <g
                            id="Welcome"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="Desktop-HD-Copy-39"
                              transform="translate(-569.000000, -1797.000000)"
                              fill="#f8f4f9"
                            >
                              <path
                                d="M565.662286,1804.2076 L562.095536,1806.87166 C561.958036,1807.00916 561.958036,1807.16385 562.095536,1807.30135 L565.662286,1809.96541 C565.799786,1810.10291 565.941411,1810.0431 565.941411,1809.83616 L565.941411,1808.11741 L581.816411,1808.11741 L581.816411,1806.05491 L565.941411,1806.05491 L565.941411,1804.33616 C565.941411,1804.18147 565.866474,1804.1141 565.769536,1804.14297 C565.737224,1804.1526 565.696661,1804.17322 565.662286,1804.2076 Z"
                                id="Shape"
                                transform="translate(571.904411, 1807.088000) rotate(-270.000000) translate(-571.904411, -1807.088000) "
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
