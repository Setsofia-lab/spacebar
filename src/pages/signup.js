import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useState, useEffect, useCallback } from "react";
import { app } from "../utils/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import HomePage from "./homepage";
import { setUserToState } from "../redux/users";
import { useDispatch } from "react-redux";

const Signup = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      const auth = getAuth();
      // const { name, email, password } = signup.target.elements;
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(setUserToState(user));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Handling the name change
  const handleName = (value) => {
    if (value) setName(value);
    // setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h6>Thanks for signing up, {name}!</h6>
        <h6>
          Browse featured <a href="space">Spaces</a> or Continue to{" "}
          <a href="/">Homepage</a>
        </h6>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h3>Please enter all the fields</h3>
      </div>
    );
  };
  return (
    <div>
      <section id="signup">
        <Navbar />
        <div className="d-flex container justify-content-center">
          <div
            className="form"
            // style  ={{ paddingRight: "20%", paddingLeft: "20%" }}
          >
            <div>
              <h1>Sign Up</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>

            <form>
              <label className="label">Name</label>
              <input
                onChange={({ target }) => {
                  setName(target.value);
                }}
                className="input"
                value={name}
                type="text"
              />

              <label className="label">Email</label>
              <input
                onChange={handleEmail}
                className="input"
                value={email}
                type="email"
              />

              <label className="label">Password</label>
              <input
                onChange={handlePassword}
                className="input"
                value={password}
                type="password"
              />

              <button
                onClick={handleSignUp}
                className="btn"
                type="submit"
                style={{
                  backgroundColor: "#ff5a60",
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  padding: "12px 28px",
                  borderRadius: "30",
                  width: "100%",
                }}
              >
                Sign Up
              </button>
              <div>
                <h6>
                  {" "}
                  Already have an account, <a href="login"> Log In</a>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signup;
