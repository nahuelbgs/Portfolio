import React  from "react";
import "./Cover.css";
import Switch from "../Switch/Switch";

function Cover() {

  return (
    <section className="section-cover">
      <Switch/>
      <div className="name-container">
        <h1 className="soy">Hola, soy</h1>
        <h1 className="nahuel-amaya">Nahuel Amaya</h1>
        <h1 className="about-me">
          un desarrollador frontend apasionado por crear experiencias web
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
