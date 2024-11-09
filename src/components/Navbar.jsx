import React from "react";
import Clock from "./Clock";
<<<<<<< HEAD
import './css/Navbar.css';
=======
>>>>>>> 3949d9455c3a5ba74f252b74716249de571e1681
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
<<<<<<< HEAD
      <nav className="navbar" >
          <a href="/" className="navbarLogo">
=======
      <nav className="navbar" style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#e3f2fd' , height : '8vh'}}>
          <a href="/" className="navbarLogo" style={{textDecoration:"none", color:"black"}}>
>>>>>>> 3949d9455c3a5ba74f252b74716249de571e1681
            RJ
          </a>
          <Clock/>
      </nav>
    </div>
  );
}
