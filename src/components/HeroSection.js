import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { FaSearch } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="input-areas">
        <form>
          <input
            className="home-input"
            name="Search"
            type="text"
            placeholder="Searching area"
          />
          <button className="btn_search">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
