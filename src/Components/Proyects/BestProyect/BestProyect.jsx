import React from "react";
import "./BestProyect.css";

function BestProyect({ title, deploy, repositorio, firstText, secondText }) {
  return (
    <div className="bestProjects-container">
      <div className="bestProjects">
        <div className="bestProjects-titulos-container">
          <h1 className="bestProjects-titulo">{title}</h1>
          <div className="bestProjects-anchors-container">
            <a
              className="bestProjects-anchors"
              target="_blank"
              href={repositorio}
            >
              Repositorio
            </a>
            <a className="bestProjects-anchors" target="_blank" href={deploy}>
              Deploy
            </a>
          </div>
        </div>
        <div className="bestProjects-text-container">
          <h1 className="bestProjects-firstText">{firstText}</h1>
          <h1 className="bestProjects-secondText">{secondText}</h1>
        </div>
      </div>
    </div>
  );
}

export default BestProyect;
