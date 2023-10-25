import React from "react";
import "./ProyectsList.css";
import PrincipalProyects from "../Proyects/PrincipalProyects/PrincipalProyects";
import SecondaryProyects from "../Proyects/SecondaryProyects/SecondaryProyects";
import { usePortfolioContext } from "../../context/PortfolioContext";
import Tecnologias from "../../JSON/Tecnologias.json";
function ProyectsList() {
  const { darkMode } = usePortfolioContext();
  return (
    <section
      className={
        darkMode === true ? "section-proyects dark" : "section-proyects"
      }
      id="ProyectsList"
    >
      <div className="principal-proyects-container">
        <div className="proyect-1">
          <PrincipalProyects
            title="Mis Artistas"
            image="https://imgfz.com/i/L5Xtw6V.png"
            deploy="https://mis-artistas.vercel.app/"
            repositorio="https://github.com/nahuelbgs/mis-artistas"
            firstText="¿Te gustaría conocer cuáles son los artistas que más has escuchado?"
            secondText="Muestra tus principales artistas y canciones en Spotify."
            tecnologias={[
              Tecnologias[0],
              Tecnologias[2],
              Tecnologias[3],
              Tecnologias[4],
              Tecnologias[8],
            ]}
          />
        </div>
        <div className="proyect-2">
          <SecondaryProyects
            title="Trivia App"
            image="https://imgfz.com/i/2gtfVIn.png"
            deploy="https://trivia-app-nahuelbgs.vercel.app/"
            repositorio="https://github.com/nahuelbgs/trivia-app"
            text="Demuestra tu sabiduría con Trivia App, una aplicación de preguntas y respuestas en inglés."
            tecnologias={[
              Tecnologias[0],
              Tecnologias[1],
              Tecnologias[2],
              Tecnologias[3],
              Tecnologias[7],
            ]}
          />
        </div>
        <div className="proyect-3">
          <SecondaryProyects
            title="Rick And Morty"
            text="Aplicación con personajes de Rick and Morty que incluye paginación, filtro por nombre y opción de agregar a favoritos."
            image="https://imgfz.com/i/7B2enSp.png"
            deploy="https://rick-and-morty-nahuelbgs.vercel.app/"
            repositorio="https://github.com/nahuelbgs/Rick-and-Morty"
            tecnologias={[
              Tecnologias[0],
              Tecnologias[1],
              Tecnologias[2],
              Tecnologias[3],
              Tecnologias[7],
            ]}
          />
        </div>
        <div className="proyect-4">
          <PrincipalProyects
            title="No Gimmicks"
            image="https://imgfz.com/i/WnF0Kze.png"
            deploy="https://no-gimmicks.vercel.app/"
            repositorio="https://github.com/nahuelbgs/NoGimmicks"
            firstText="No Gimmicks es un ecommerce especializado en la venta de ropa y accesorios."
            secondText="Permite a los usuarios filtrar y agregar productos al carrito de compras."
            tecnologias={[
              Tecnologias[0],
              Tecnologias[1],
              Tecnologias[2],
              Tecnologias[3],
              Tecnologias[5],
              Tecnologias[7],
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default ProyectsList;
