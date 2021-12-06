import React from "react";
import ElementoClienteBuscado from "../Card/ElementoClienteBuscado";

const ListaClienteBuscado = (props) => {
  const clientesRecuperar = props.recuperarClientes;
  const eventosRecuperar = props.recuperarEventos;
  const clienteEliminar = props.eliminarCliente;
  const eventoEliminar = props.eliminarEvento;
  const listaEventos = props.eventos;
  return (
    <div style={{ marginTop: "1.5rem" }}>
      {props.listaClienteBuscado.map((element) => {
        return (
          <ElementoClienteBuscado
            key={element.id}
            element={element}
            clientesRecuperar={clientesRecuperar}
            eventosRecuperar={eventosRecuperar}
            clienteEliminar={clienteEliminar}
            eventoEliminar={eventoEliminar}
            listaEventos={listaEventos}
          />
        );
      })}
    </div>
  );
};

export default ListaClienteBuscado;
