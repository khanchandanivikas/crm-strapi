import React from "react";
import "../Style/Card.css";
import { useState } from "react";
import ModificarEvento from "../Formularios/ModificarEvento";

const ElementoMostrarEvento = (props) => {
  const evento = props.element;
  const eliminarEvento = props.eventoEliminar;
  const recuperarEventos = props.eventosRecuperar;
  const [modalEventoModificar, setModalEventoModificar] = useState(false);
  const toggleModificarEvento = () => {
    setModalEventoModificar(!modalEventoModificar);
  };
  const handleEliminarEvento = () => {
    eliminarEvento(evento.id);
  };
  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#000",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <p><span>Hora: </span>{evento.hora}</p>
      <p><span>Fecha: </span>{evento.fecha}</p>
      <p><span>Titulo: </span>{evento.titulo}</p>
      <p><span>Evento: </span>{evento.mensaje}</p>
      <p><span>Resultado: </span>{evento.resultado}</p>
      <button onClick={handleEliminarEvento}>Eliminar</button>
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

export default ElementoMostrarEvento;
