import React, { useState } from "react";
import { Link } from "react-router-dom";
import twitter from './icon/icons8-twitterx-50.png'
import github from './icon/icons8-github-50.png'
import linkedin from './icon/icons8-linkedin-50.png'
import { RespNavbar } from "./RespNavbar";
import './css/Description.css'

import Intro from "./Intro";
import Work from "./Work";
import Blog from "./Blog";
import Contact from "./Contact";
import {  Routes, Route } from "react-router-dom";

export default function Description() {
  const [menu, setMenu] = useState("HOME");

  return (
    <div className="descriptionBox">
        <div className="descriptionHeading">
          <p>Hello, I am</p>
          <h1 style={{ fontSize: "2rem", fontStyle: "italic" }}>RONAK</h1>
          <p style={{ fontSize: "0.8rem" }}>
            This website reflects my personality
          </p>
        </div>
        <RespNavbar />
        <div  className="routesDescription">
        <Routes>
          <Route exact path="/" element={<Intro />}></Route>
          <Route exact path="/work" element={<Work />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        </div>
        
        <nav className="descriptionNav">
          <Link style={{ color: menu === "HOME" ? "#4f646f" : "black", textDecoration: "none", fontSize: menu === "HOME" ? "1.8rem" : "1rem" }} to="/" onClick={() => setMenu("HOME")}>
            Home
          </Link>
          <Link style={{ color: menu === "WORK" ? "#4f646f" : "black", textDecoration: "none", fontSize: menu === "WORK" ? "1.8rem" : "1rem" }} to="/work" onClick={() => setMenu("WORK")}>
            Work
          </Link>
          <Link style={{ color: menu === "CONTACT" ? "#4f646f" : "black", textDecoration: "none", fontSize: menu === "CONTACT" ? "1.8rem" : "1rem" }} to="/contact" onClick={() => setMenu("CONTACT")}>
            Contact
          </Link>
          <Link style={{ color: menu === "BLOG" ? "#4f646f" : "black", textDecoration: "none", fontSize: menu === "BLOG" ? "1.8rem" : "1rem" }} to="/blog" onClick={() => setMenu("BLOG")}>
            Blog
          </Link>
        </nav>

        <div className="descriptionContactProfile">
          <a href="https://github.com/ronak4195" target="_blank" rel="noopener noreferrer"><img src={github} alt="" style={{ height: "7vh", width: "auto", paddingRight: "2vw" }} /></a>
          <a href="https://www.linkedin.com/in/ronak4195/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" style={{ height: "7vh", width: "auto", paddingRight: "2vw" }} /></a>
          <a href="https://twitter.com/Ronak4195" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" style={{ height: "6.5vh", width: "auto", paddingRight: "2vw" }} /></a>
        </div>

        <div className="footerDescription">
          <p>This website has been made using react.js</p>
        </div>
    </div>
  );
}
