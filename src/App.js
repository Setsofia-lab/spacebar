import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Booking from "./pages/booking";
import Listing from "./pages/listing";
import Space from "./pages/spaces";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Blog from "./pages/blog";
import Moments from "./pages/moments";
import BlogPage from "./pages/blogpage";
import "./utils/firebase";

const App = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY);
  }, []);
  // const dispatch = useDispatch();
  // // const userList = useSelector((state) => state.listings.value);

  // const [list, setListings] = useState("");
  // const [book, setBookings] = useState("");

  return (
    <BrowserRouter base="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/space" element={<Space />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
