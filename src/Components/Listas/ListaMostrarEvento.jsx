import React from "react";
import ElementoMostrarEvento from "../Card/ElementoMostrarEvento";

const ListaMostrarEvento = (props) => {
  const eventoEliminar = props.eliminarEvento;
  const eventosRecuperar = props.recuperarEventos;
  return (
    <div>
      {props.lista.map((element) => {
        return (
          <ElementoMostrarEvento
            key={element.id}
            element={element}
            eventoEliminar={eventoEliminar}
            eventosRecuperar={eventosRecuperar}
          />
        );
      })}
    </div>
  );
};

export default ListaMostrarEvento;
