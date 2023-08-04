import React from "react";
import "./SecondaryProyects.css";

function SecondaryProyects({ color, title, image, text, repositorio, deploy }) {
  return (
    <div className={`secondary-proyect ${color}`}>
      <div className="secondary-proyects-titles-container">
        <h1 className="secondary-proyects-title">{title}</h1>
        <div className="secondary-proyects-anchors-container">
          <a
            className="secondary-proyects-anchors"
            target="_blank"
            href={repositorio}
          >
            Repositorio
          </a>
          <a
            className="secondary-proyects-anchors"
            target="_blank"
            href={deploy}
          >
            Deploy
          </a>
        </div>
      </div>
      <div className="secondary-proyects-description-container">
        <h1 className="text">{text}</h1>
      </div>
      <div className="secondary-proyects-image-container">
        <img className="imagen-sec" src={image} alt={title} />
      </div>
    </div>
  );
}

export default SecondaryProyects;
