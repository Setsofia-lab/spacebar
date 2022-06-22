import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
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
        <h3> Welcome to spacebar, {name}!</h3>
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

        <div
          className="form"
          style={{ paddingRight: "20%", paddingLeft: "20%" }}
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
            <label className="label" >Name</label>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              style={{ width: "40%" }}
            />

            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
              style={{ width: "40%" }}
            />

            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
              style={{ width: "40%" }}
            />

            <button
              onClick={handleSubmit}
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
                width: "40%",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Signup;
