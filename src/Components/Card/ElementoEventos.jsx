import React from "react";
import { useState } from "react";
import "../Style/Card.css";
import ModificarEvento from "../Formularios/ModificarEvento";

const ElementoEventos = (props) => {
  const evento = props.element;
  const eliminarEvento = props.eventoEliminar;
  const recuperarEventos = props.eventosRecuperar;
  const [nuevoEliminarEvento, setNuevoEliminarEvento] = useState(evento.id);
  const [modalEventoModificar, setModalEventoModificar] = useState(false);
  const handleNuevoEliminarEvento = () => {
    setNuevoEliminarEvento(evento.id);
  };
  const toggleModificarEvento = () => {
    setModalEventoModificar(!modalEventoModificar);
  };
  const handleEliminarEvento = () => {
    eliminarEvento(nuevoEliminarEvento);
  };
  return (
    <div className="card2">
      <p><span>Cliente: </span>{evento.cliente}</p>
      <p><span>Hora: </span>{evento.hora}</p>
      <p><span>Fecha: </span>{evento.fecha}</p>
      <p><span>Titulo: </span>{evento.titulo}</p>
      <p><span>Evento: </span>{evento.mensaje}</p>
      <p><span>Resultado: </span>{evento.resultado}</p>
      <button
        onClick={handleEliminarEvento}
        value={nuevoEliminarEvento}
        onChange={handleNuevoEliminarEvento}
      >
        Eliminar
      </button>
      <button onClick={toggleModificarEvento}>Modificar</button>
      {modalEventoModificar ? (
        <ModificarEvento
          evento={evento}
          toggleModificarEvento={toggleModificarEvento}
          recuperarEventos={recuperarEventos}
        />
      ) : null}
    </div>
  );
};

export default ElementoEventos;
