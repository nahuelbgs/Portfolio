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
      <a target="_blank" href="https://drive.google.com/file/d/1Xhsb0_O0cpyzzbz6K26ELWT4jvqLc6uu/view?usp=sharing" className="proyects-anchors">Ver CV</a>
      <h1 className="tecnologias-h1">Tecnologías</h1>
      <div className="tecnologias-container">
        <img
          className="tecnologias-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
          alt="CSS Logo"
        />
        <img
          className="tecnologias-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
          alt="JavaScript Logo"
        />
        <img
          className="tecnologias-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="React Logo"
        />
        <img
          className="tecnologias-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
          alt="SASS Logo"
        />
      </div>
      </div>
    </section>
  );
}

export default AboutMe;
