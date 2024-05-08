import React from "react";
import burgerFries from "./icon/burgerFries.jpeg";
import familyman from "./icon/familyman.jpg";
import shawshank from "./icon/shawshank.jpg"
import spotify from "./icon/spotify.jpg";
import "./css/Intro.css";

export default function Intro() {
  return (
    <div className="introBox">
      <p className="introPara">
        Hey there! I'm a web developer, and this website serves as my portfolio,
        crafted with ReactJS. Beyond crafting websites, I'm deeply passionate
        about coding, staying informed on geopolitics, and indulging in music.
      </p>
      <p className="introCatchLine">TECH . POLITICS . SPORTS</p>
      <div className="introCardList">
        <div className="introCard food">
          <div className="text">My favorite food!</div>
          <img className="image" src={burgerFries} alt="burger" />
        </div>
        <div className="smallCardGroup">
          <div className="introCard webseries">
            <div className="text">Web Series!</div>
            <img className="image" src={familyman} alt="burger" />
          </div>

          <div className="introCard movies">
            <div className="text">Movie!</div>
            <img className="image" src={shawshank} alt="burger" />
          </div>
        </div>
        <div className="introCard songs">
          <div className="text">My favorite song!</div>
          <img className="image" src={spotify} alt="burger" />
        </div>
      </div>
    </div>
  );
}
