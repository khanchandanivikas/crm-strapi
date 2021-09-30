import React from "react";
import { Link } from "react-router-dom";
import "./Style/BarraLateral.css";

const BarraLateral = () => {
  return (
    <div className="barra">
      <ul>
        <li>
          <h3>Perfiles :</h3>
        </li>
        <Link to="/listaClientes">
          <li>Lista Clientes</li>
        </Link>
        <Link to="/añadirCliente">
          <li>Añadir Cliente</li>
        </Link>
        <li>
          <h3>Eventos :</h3>
        </li>
        <Link to="/listaEventos">
          <li>Lista Eventos</li>
        </Link>
        <Link to="/añadirEvento">
          <li>Añadir Evento</li>
        </Link>
        <Link to="/">
          <li><i className="fas fa-power-off"></i></li>
        </Link>
      </ul>
    </div>
  );
};

export default BarraLateral;
