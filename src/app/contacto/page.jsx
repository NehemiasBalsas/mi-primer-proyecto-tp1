"use client";
import React, { useState, useRef } from "react";

export default function Contactos() {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mensajeRef = useRef(null);
  const [Mensaje, setMensaje] = useState('');
  const [nameValido, setNameValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

     const CambiarNombre = () => {
       setNameValido(nameRef.current.value.trim() !== "");
     };

    const CambiarEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    setEmailValido(emailRegex.test(emailRef.current.value));
  };

    const eSubmit = (e) => {
        e.preventDefault();
   
         if (nameValido && emailValido) {
    console.log('Nombre:', nameRef.current.value);
    console.log('Correo electrónico:', emailRef.current.value);
    console.log('Mensaje:', mensajeRef.current.value);
             
       setMensaje('¡Formulario enviado con éxito!');
    } else {
           setMensaje('Por favor, completa los campos obligatorios.');
         }
    }


    return (
      <section className="contactos">
        <h1>Pagina de contacto</h1>
        <p>email:jorgeElbueno123@gmail.com</p>
        <br />
        <p>whatsapp:1234566789</p>

        <form onSubmit={eSubmit} className="Formulario">
          <label>Nombre:</label>
          <input
            className="border"
            type="text"
            id="Name"
            placeholder="Nombre"
            ref={nameRef}
          />

          <label>Email:</label>
          <input
            className="border"
            type="email"
            id="Email"
            placeholder="Email"
            ref={emailRef}
          />

          <label>Mensaje:</label>
          <textarea className="border" id="Mensaje" ref={mensajeRef}></textarea>

          <button className="border" type="submit">
            Enviar
          </button>
        </form>
        {Mensaje && (
          <div className="Mensaje">{Mensaje}</div>
        )}
      </section>
    );
}