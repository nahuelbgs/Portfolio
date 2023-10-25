import "./Formulario.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { usePortfolioContext } from "../../context/PortfolioContext";

function Formulario() {
  const { darkMode } = usePortfolioContext();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_te5bvq2",
        "template_94fihpf",
        form.current,
        "6L-W4fkr0z7i60yLG"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className={darkMode === true ? "form-section dark" : "form-section"}
      id="Formulario"
    >
      <div className="principal-container">
        <div
          className={
            darkMode === true
              ? "form-container dark-form"
              : "form-container light-form"
          }
        >
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="form-title">Contáctame</h1>
            <p className="form-description">
              Envíame un mail o contáctame por{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nahuel-amaya/"
                className="linkedin"
              >
                Linkedin
              </a>
            </p>
            <div className="form-group">
              <label>Nombre</label>
              <input name="user_name" type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="user_email" />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea name="message" className="mensaje" />
            </div>
            <div className="form-button-container">
              <button type="submit" value="send" className="form-button">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="form-imagen-container">
          <img
            className="form-imagen"
            src="https://imgfz.com/i/tVhZcwL.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Formulario;
