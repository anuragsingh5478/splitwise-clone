import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar({ logout }) {
  return (
    <div className="navbar">
      <Link to="/homepage">Home</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
