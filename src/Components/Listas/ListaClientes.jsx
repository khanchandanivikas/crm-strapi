import React from "react";
import BuscadorCliente from "../Formularios/BuscadorCliente";
import ElementoClientes from "../Card/ElementoClientes";
import "../Style/Lista.css";

const ListaClientes = (props) => {
  const clientesRecuperar = props.recuperarClientes;
  const eventosRecuperar = props.recuperarEventos;
  const clienteEliminar = props.eliminarCliente;
  const eventoEliminar = props.eliminarEvento;
  const listaEventos = props.eventos;
  return (
    <div>
      <BuscadorCliente
        clientesRecuperar={clientesRecuperar}
        eventosRecuperar={eventosRecuperar}
        listaEventos={listaEventos}
        clienteEliminar={clienteEliminar}
        eventoEliminar={eventoEliminar}
      />
      <div className="lista">
        {props.clientes.map((element) => {
          return (
            <ElementoClientes
              key={element.id}
              clientesRecuperar={clientesRecuperar}
              eventosRecuperar={eventosRecuperar}
              listaEventos={listaEventos}
              element={element}
              eventoEliminar={eventoEliminar}
              clienteEliminar={clienteEliminar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaClientes;
