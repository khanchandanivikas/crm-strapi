import React from "react";
import BuscadorEvento from "../Formularios/BuscadorEvento";
import ElementoEventos from "../Card/ElementoEventos";
import "../Style/Lista.css";

const ListaEventos = (props) => {
  const listaEventos = props.eventos;
  const eventosRecuperar = props.recuperarEventos;
  const eventoEliminar = props.eliminarEvento;
  return (
    <div>
      <BuscadorEvento
        eventosRecuperar={eventosRecuperar}
        eventoEliminar={eventoEliminar}
      />
      <div className="lista2">
        {listaEventos.map((element) => {
          return (
            <ElementoEventos
              key={element.id}
              eventosRecuperar={eventosRecuperar}
              element={element}
              eventoEliminar={eventoEliminar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaEventos;
