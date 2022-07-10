import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setUserToState } from "../redux/users";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (email === "" || password === "") {
      setError("Please Enter All Fields");
    } else {
      setSubmitted(true);
      setError("");
      const auth = getAuth();
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUserToState(user));
        navigate("/");
      } catch (error) {
        setError("Wrong Email or Password");
      }
    }
  };

  useEffect(() => {
    console.log("timeout started");
    setTimeout(() => {
      console.log("timeout implementing");
      setError("");
    }, 5000);
  }, [error]);

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
              <h1>Log In</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
              {error && (
                <div className="error">
                  <h3>{error}</h3>
                </div>
              )}
              {/* {successMessage()} */}
            </div>

            <form>
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
                onClick={handleLogin}
                href="homepage"
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
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
