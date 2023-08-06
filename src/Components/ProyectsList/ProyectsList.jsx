import React from "react";
import "./ProyectsList.css";
import PrincipalProyects from "../Proyects/PrincipalProyects/PrincipalProyects";
import SecondaryProyects from "../Proyects/SecondaryProyects/SecondaryProyects";
function ProyectsList() {
  return (
    <section className="section-proyects" id="ProyectsList">
      <div className="principal-proyects-container">
        <div className="proyect-1">
          <PrincipalProyects
            title="No Gimmicks"
            image="https://i.ibb.co/2MnT3DY/Mockup-1-1.png"
            deploy="https://no-gimmicks.vercel.app/"
            repositorio="https://github.com/nahuelbgs/NoGimmicks"
            firstText="No Gimmicks es un ecommerce especializado en la venta de ropa y accesorios."
            secondText="Permite a los usuarios filtrar y agregar productos al carrito de compras."
          />
        </div>
        <div className="proyect-2">
          <SecondaryProyects
            title="Calcular TMB"
            color="blanco"
            image="https://i.ibb.co/T4YVb53/tmb.png"
            deploy='https://tmb-app-nahuelbgs.vercel.app/'
            repositorio='https://github.com/nahuelbgs/tmb-app'
            text="Calcula tu tasa metabólica basal para conocer las calorías necesarias para el mantenimiento diario del cuerpo."
          />
        </div>
        <div className="proyect-3">
          <SecondaryProyects
            title="Rick And Morty"
            color="blanco"
            text="Aplicación con personajes de Rick and Morty que incluye paginación, filtro por nombre y opción de agregar a favoritos."
            image="https://i.ibb.co/vd4NzNQ/rym.png"
            deploy='https://rick-and-morty-nahuelbgs.vercel.app/'
            repositorio='https://github.com/nahuelbgs/Rick-and-Morty'
          />
        </div>
        <div className="proyect-4">
          <PrincipalProyects
            title="Quiz App"
            image="https://i.ibb.co/6nBvMV6/triviamockup-min.png"
            deploy="https://trivia-app-nahuelbgs.vercel.app/"
            repositorio="https://github.com/nahuelbgs/trivia-app"
            firstText="Demuestra tu sabiduría con Quiz App, una aplicación de preguntas y respuestas en inglés."
            secondText="Selecciona la opción correcta mientras el contador registra tus aciertos en tiempo real."
          />
        </div>
      </div>
    </section>
  );
}

export default ProyectsList;
