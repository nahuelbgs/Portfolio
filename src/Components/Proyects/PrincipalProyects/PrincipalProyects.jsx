import React from "react";
import "./PrincipalProyects.css";

function PrincipalProyects({
  title,
  deploy,
  repositorio,
  image,
  firstText,
  secondText,
}) {
  return (
    <div className="proyects-container">
      <div className="proyects">
        <div className="proyects-titulos-container">
          <h1 className="proyects-titulo">{title}</h1>
          <div className="proyects-anchors-container">
            <a className="proyects-anchors" target="_blank" href={repositorio}>
              Repositorio
            </a>
            <a className="proyects-anchors" target="_blank" href={deploy}>
              Deploy
            </a>
          </div>
        </div>
        <div className="proyects-description-container">
          <div className="text-container">
            <h1 className="proyects-text">{firstText}</h1>
          </div>
          <img className="proyects-image" src={image} alt={title} />
          <div className="text-container">
            <h1 className="proyects-text">{secondText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalProyects;
