import React from "react";
import ElementoEventoBuscado from "../Card/ElementoEventoBuscado";
import "../Style/Lista.css";

const ListaEventoBuscado = (props) => {
  const eventosRecuperar = props.recuperarEventos;
  const eventoEliminar = props.eliminarEvento;
  return (
    <div className="lista2">
      {props.listaEventoBuscado.map((element) => {
        return (
          <ElementoEventoBuscado
            key={element.id}
            element={element}
            eventosRecuperar={eventosRecuperar}
            eventoEliminar={eventoEliminar}
          />
        );
      })}
    </div>
  );
};

export default ListaEventoBuscado;
