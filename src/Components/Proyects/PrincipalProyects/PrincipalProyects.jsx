import React, { useState } from "react";
import "./PrincipalProyects.css";
import { usePortfolioContext } from "../../../context/PortfolioContext";

function PrincipalProyects({
  title,
  deploy,
  repositorio,
  image,
  firstText,
  secondText,
  tecnologias
}) {
  const { darkMode } = usePortfolioContext();
  return (
    <div
      className={
        darkMode === true
          ? "projects-container dark-projects"
          : "projects-container light-projects"
      }
    >
      <div className="projects">
        <div className="projects-titulos-container">
          <h1 className="projects-titulo">{title}</h1>
          <div className="projects-anchors-container">
            <a className="projects-anchors" target="_blank" href={repositorio}>
              Repositorio
            </a>
            <a className="projects-anchors" target="_blank" href={deploy}>
              Deploy
            </a>
          </div>
        </div>
        <div className="projects-description-container">
          <div className="text-container">
            <h1 className="projects-text">{firstText}</h1>
          </div>
          <img className="projects-image" src={image} alt={title} />
          <div className="text-container">
            <h1 className="projects-text">{secondText}</h1>
          </div>
        </div>
        <div className="tecnologias-container">
          {tecnologias.map((tecnologia) => (
            <a key={tecnologia.nombre} href={tecnologia.enlace} target="_blank">
              <img src={tecnologia.imagen} alt={tecnologia.nombre} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrincipalProyects;
