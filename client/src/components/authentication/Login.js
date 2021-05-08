import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./authentication.css";
export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/api/user/login", user)
      .then((res) => {
        console.log(res.data);
        const msg = res.data.msg;
        if (msg === "success") {
          setErrorMsg(msg);
          setToken(res.data.token);
        } else setErrorMsg(msg);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="authentication">
      <div className="auth-container">
        <p className="header">Login</p>
        <form onSubmit={handleSubmission}>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email id"
            />
          </div>
          <div>
            <input
              type="password"
              name="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <div className="error-msg">{errorMsg}</div>
          <div>
            <input type="submit" value="Login" className="submit-button" />
          </div>
        </form>
        <p className="login-register">
          Don't have an account, then <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
