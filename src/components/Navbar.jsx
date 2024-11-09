import React from "react";
import Clock from "./Clock";
import './css/Navbar.css';
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" >
          <a href="/" className="navbarLogo">
            RJ
          </a>
          <Clock/>
      </nav>
    </div>
  );
}
