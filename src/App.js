import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import Booking from "./pages/booking";
import Listing from "./pages/listing";
import Space from "./pages/spaces";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

const App = () => {
  return (
    <HashRouter base="/">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/space" element={<Space />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
