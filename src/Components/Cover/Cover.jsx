import React from "react";
import "./Cover.css";
import {Link} from 'react-scroll' 

function Cover() {
  return (
    <section className="section-cover">
      <div className="name-container">
        <p className="name">Nahuel Amaya</p>
        <p className="frontend">Frontend Developer</p>
        <div className="nav">
          <Link to="AboutMe" spy={true} smooth={true} offset={0} duration={100} className="nav-anchors">About Me</Link>
          <Link to="ProyectsList" spy={true} smooth={true} offset={50} duration={100} className="nav-anchors">Proyectos</Link>
          <Link to="Formulario" spy={true} smooth={true} offset={0} duration={100} className="nav-anchors">Contacto</Link>
        </div>
      </div>
    </section>
  );
}

export default Cover;
