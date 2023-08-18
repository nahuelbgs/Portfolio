import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="section-aboutMe" id="AboutMe">
      <div className="aboutMe-container">
      <h1 className="aboutMe-h1">About Me</h1>
      <p className="aboutMe">
        Hola, soy Nahuel Amaya, un desarrollador web ubicado en Buenos Aires,
        Argentina. Me caracterizo por ser autodidacta y apasionado por aprender
        cosas nuevas y resolver problemas. Actualmente, estoy buscando
        activamente nuevas oportunidades laborales que me permitan ampliar mis
        conocimientos y potenciar mi crecimiento profesional.
      </p>
      <a target="_blank" href="https://drive.google.com/file/d/16rXOR5Oh9P9zOFWitw4UIhdhtRlz-rM-/view" className="proyects-anchors">Ver CV</a>
      <h1 className="tecnologias-h1">Tecnologías</h1>
      <div className="tecnologias-container">
        <img
          className="tecnologias-image"
          src="https://i.ibb.co/6PKz1Xp/CSS3-logo-svg.png"
          alt="CSS Logo"
        />
        <img
          className="tecnologias-image"
          src="https://i.ibb.co/Ns1ftVS/Java-Script-logo.png"
          alt="JavaScript Logo"
        />
        <img
          className="tecnologias-image"
          src="https://i.ibb.co/kc45dZq/React-icon-svg.png"
          alt="React Logo"
        />
        <img
          className="tecnologias-image"
          src="https://i.ibb.co/bJD0G26/1280px-Sass-Logo-Color-svg.png"
          alt="SASS Logo"
        />
      </div>
      </div>
    </section>
  );
}

export default AboutMe;
