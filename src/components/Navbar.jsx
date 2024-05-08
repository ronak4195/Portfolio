import React from "react";
import Clock from "./Clock";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#e3f2fd' , height : '8vh'}}>
          <a href="/" className="navbarLogo" style={{textDecoration:"none", color:"black"}}>
            RJ
          </a>
          <Clock/>
      </nav>
    </div>
  );
}
