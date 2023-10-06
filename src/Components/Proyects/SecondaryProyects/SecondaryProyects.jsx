import React from "react";
import "./SecondaryProyects.css";
import { usePortfolioContext } from "../../../context/PortfolioContext";

function SecondaryProyects({
  title,
  image,
  text,
  repositorio,
  deploy,
  tecnologias,
}) {
  console.log(tecnologias);
  const { darkMode } = usePortfolioContext();
  return (
    <div
      className={
        darkMode === true
          ? "secondary-project dark-projects"
          : "secondary-project light-projects"
      }
    >
      <div className="secondary-projects-titles-container">
        <h1 className="secondary-projects-title">{title}</h1>
        <div className="secondary-projects-anchors-container">
          <a
            className="secondary-projects-anchors"
            target="_blank"
            href={repositorio}
          >
            Repositorio
          </a>
          <a
            className="secondary-projects-anchors"
            target="_blank"
            href={deploy}
          >
            Deploy
          </a>
        </div>
      </div>
      <div className="secondary-projects-description-container">
        <h1 className="text">{text}</h1>
      </div>
      <div className="secondary-projects-tecnologias-container">
        {tecnologias.map((tecnologia) => (
          <a key={tecnologia.nombre} href={tecnologia.enlace} target="_blank">
            <img src={tecnologia.imagen} alt={tecnologia.nombre} />
          </a>
        ))}
      </div>
      <div className="secondary-projects-image-container">
        <img className="imagen-sec" src={image} alt={title} />
      </div>
    </div>
  );
}

export default SecondaryProyects;
