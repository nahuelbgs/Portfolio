import React from "react";
import "./Cover.css";
import { Link } from "react-scroll";
import { usePortfolioContext } from "../../context/PortfolioContext";

function Cover() {
  const { darkMode, setDarkMode } = usePortfolioContext();
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <section className="section-cover">
      <label className="switch">
        <input value={darkMode} onClick={handleDarkMode} type="checkbox" />
        <span className="slider">
          <img className="sun" src="https://www.svgrepo.com/show/398412/sun.svg" alt="sun"/>
          <img className="moon" src="https://www.svgrepo.com/show/285162/moon.svg" alt="moon"/>
        </span>
      </label>
      <div className="name-container">
        <p className="name">Nahuel Amaya</p>
        <p className="frontend">Frontend Developer</p>
        <div className="nav">
          <Link
            to="AboutMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            className={
              darkMode === true
                ? "nav-anchors a-darkMode"
                : "nav-anchors a-lightMode"
            }
          >
            About Me
          </Link>
          <Link
            to="ProyectsList"
            spy={true}
            smooth={true}
            offset={50}
            duration={100}
            className={
              darkMode === true
                ? "nav-anchors a-darkMode"
                : "nav-anchors a-lightMode"
            }
          >
            Proyectos
          </Link>
          <Link
            to="Formulario"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
            className={
              darkMode === true
                ? "nav-anchors a-darkMode"
                : "nav-anchors a-lightMode"
            }
          >
            Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cover;
