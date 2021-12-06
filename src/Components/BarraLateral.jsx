import React from "react";
import { Link } from "react-router-dom";
import "./Style/BarraLateral.css";

const BarraLateral = (props) => {
  const hamburger = props.hamburger;
  const toggleHamburger = props.toggleHamburger;
  return (
    <div className={hamburger ? "barra-show" : "barra"}>
      <ul>
        <li>
          <h3>Perfiles :</h3>
        </li>
        <Link to="/listaClientes" onClick={toggleHamburger}>
          <li>Lista Clientes</li>
        </Link>
        <Link to="/añadirCliente" onClick={toggleHamburger}>
          <li>Añadir Cliente</li>
        </Link>
        <li>
          <h3>Eventos :</h3>
        </li>
        <Link to="/listaEventos" onClick={toggleHamburger}>
          <li>Lista Eventos</li>
        </Link>
        <Link to="/añadirEvento" onClick={toggleHamburger}>
          <li>Añadir Evento</li>
        </Link>
        <div className="barra-power">
          <Link to="/" onClick={toggleHamburger}>
            <li>
              <i className="fas fa-power-off"></i>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default BarraLateral;
