import React from "react";
import "./AboutMe.css";
import { usePortfolioContext } from "../../context/PortfolioContext";

function AboutMe() {
  const { darkMode } = usePortfolioContext();
  return (
    <section className="section-aboutMe" id="AboutMe">
      <div className="aboutMe-container">
        <h1 className="aboutMe-h1">About Me</h1>
        <p className="aboutMe">
          Hola, soy Nahuel Amaya, un desarrollador web ubicado en Buenos Aires,
          Argentina. Me caracterizo por ser autodidacta y apasionado por
          aprender cosas nuevas y resolver problemas. Actualmente, estoy
          buscando activamente nuevas oportunidades laborales que me permitan
          ampliar mis conocimientos y potenciar mi crecimiento profesional.
        </p>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/16rXOR5Oh9P9zOFWitw4UIhdhtRlz-rM-/view"
          className="proyects-anchors"
        >
          Ver CV
        </a>
        <h1 className="tecnologias-h1">Tecnologías</h1>
        <div className="tecnologias-container">

          <img
            title="Firebase"
            className="tecnologias-image"
            src="https://i.postimg.cc/fyj5vcWD/fire.png"
            alt="Firebase Logo"
          />
          <img
            title="SASS"
            className="tecnologias-image"
            src="https://i.postimg.cc/hPtGgSFt/sass.png"
            alt="SASS Logo"
          />
          <img
            title="Bootstrap"
            className="tecnologias-image"
            src="https://i.postimg.cc/zDbj7RXn/boot.png"
            alt="Bootstrap Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
