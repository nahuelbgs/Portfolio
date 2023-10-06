import React, { useEffect, useState } from "react";
import "./Cover.css";
import { usePortfolioContext } from "../../context/PortfolioContext";

function Cover() {
  const { darkMode, setDarkMode } = usePortfolioContext();
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <section className="section-cover">
      <label className="switch">
        <input value={darkMode} onClick={handleDarkMode} type="checkbox" />
        <span className="slider">
          <img
            className="sun"
            src="https://www.svgrepo.com/show/398412/sun.svg"
            alt="sun"
          />
          <img
            className="moon"
            src="https://www.svgrepo.com/show/285162/moon.svg"
            alt="moon"
          />
        </span>
      </label>
      <div className="name-container">
        <h1 className="about-me">
          Soy <span className="nahuel-amaya">Nahuel Amaya</span>, un desarrollador frontend apasionado por crear experiencias web
        </h1>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1CuWN7UX7WSUJ1OTbYaIumoMZtpr1Wzpg/view?usp=sharing"
          className="proyects-anchors"
        >
          Ver CV
        </a>
      </div>
    </section>
  );
}

export default Cover;
