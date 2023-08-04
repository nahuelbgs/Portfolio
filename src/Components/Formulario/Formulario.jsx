import "./Formulario.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_te5bvq2', 'template_94fihpf', form.current, '6L-W4fkr0z7i60yLG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="form-section" id="Formulario">
      <div className="principal-container">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="form-title">Contáctame</h1>
            <p className="form-description">
              Envíame un mail o contáctame por{" "}
              <a className="linkedin">Linkedin</a>
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
              <textarea
                name="message"
                className="mensaje"
              />
            </div>
            <div className="form-button-container">
              <button type="submit" value='send' className="form-button">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="form-imagen-container">
          <img
            className="form-imagen"
            src="https://i.ibb.co/QMLYhs7/Mail-i-OS-svg.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Formulario;
