import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="section-aboutMe" id="AboutMe">
      <div className="aboutMe-tecnologias-container">
        <div className="aboutMe-container">
          <h1 className="aboutMe-h1">About Me</h1>
          <p className="aboutMe">
            Soy un desarrollador web ubicado en Buenos Aires, Argentina. Me
            caracterizo por ser autodidacta y apasionado por aprender cosas
            nuevas y resolver problemas. Actualmente, estoy buscando activamente
            nuevas oportunidades laborales que me permitan ampliar mis
            conocimientos y potenciar mi crecimiento profesional.
          </p>
        </div>
        <div className="about-me-tecnologias-container">
          <h1 className="tecnologias-h1">Tecnologías</h1>
          <ul className="tecnologiasList">
            <li>HTML</li>
            <li>JAVASCRIPT</li>
            <li>CSS</li>
            <li>REACT</li>
            <li>FIREBASE</li>
            <li>SASS</li>
            <li>GIT</li>
            <li>GITHUB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
