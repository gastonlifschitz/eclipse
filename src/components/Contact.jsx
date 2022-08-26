import React from "react";
import NavbarEclipse from "./common/NavbarEclipse";
import FormEclipse from "./FormEclipse";
import ButtonEclipse from "./common/ButtonEclipse";
import Banner from "./Banner";
// import { Form } from 'react-bootstrap'; // quise importar de bootstrap pero no pude hacerlo andar :(
import "../styles/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact({ setScreen }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days} Dias - {hours}:{minutes}:{seconds} hs.
      </span>
    );
  };
  return (
    <div className="all-height">
      <NavbarEclipse setScreen={setScreen} />
      <Banner renderer={renderer} breadcrumb="Home/Contacto" />
      <div className="form-container">
        <FormEclipse />

        <div className="doscol contact" id="contactp">
          <div className="txtcol">
            <p>
              Si usted es periodista y está interesado en hablar con los
              profesionales de la Asociación Argentina de Astronomía, por favor
              contáctese con nosotros por mail:{" "}
              <strong> aaacd@fcaglp.unlp.edu.ar</strong>{" "}
            </p>
          </div>
          <div className="txtcol">
            <p id="p2">
              ¡No olvides ingresar a Box y revisar el material gráfico y
              audiovisual disponible!
            </p>
            <a href="https://ibm.box.com/s/y6vj1gfnxhj030l4c98f9fzrlsd2mln2">
              {" "}
              <ButtonEclipse>Ir al Box</ButtonEclipse>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
