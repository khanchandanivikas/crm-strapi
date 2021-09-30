import React from "react";
import { useState } from "react";
import "../Style/Card.css";
import ModificarEvento from "../Formularios/ModificarEvento";

const ElementoEventoBuscado = (props) => {
  const evento = props.element;
  const eliminarEvento = props.eventoEliminar;
  const [modalEventoModificar, setModalEventoModificar] = useState(false);
  const [nuevoEliminarEvento, setNuevoEliminarEvento] = useState(evento.id);
  const handleNuevoEliminarEvento = (e) => {
    setNuevoEliminarEvento(evento.id);
  };
  const toggleModificarEvento = () => {
    setModalEventoModificar(!modalEventoModificar);
  };
  const recuperarEventos = props.eventosRecuperar;
  const handleEliminarEvento = () => {
    eliminarEvento(evento.id);
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

export default ElementoEventoBuscado;
