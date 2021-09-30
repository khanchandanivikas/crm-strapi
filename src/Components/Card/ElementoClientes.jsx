import React from "react";
import { useState } from "react";
import "../Style/Card.css";
import ModificarCliente from "../Formularios/ModificarCliente";
import ListaMostrarEvento from "../Listas/ListaMostrarEvento";

const ElementoClientes = (props) => {
  const cliente = props.element;
  const eventos = props.listaEventos;
  const eliminarEvento = props.eventoEliminar;
  const eliminarCliente = props.clienteEliminar;
  const recuperarEventos = props.eventosRecuperar;
  const [nuevoEliminarCliente, setNuevoEliminarCliente] = useState(cliente.id);
  const [nuevoMostrar, setNuevoMostrar] = useState(cliente.empresa);
  const [lista, setLista] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalClienteModificar, setModalClienteModificar] = useState(false);
  const handleNuevoMostrar = () => {
    setNuevoMostrar(cliente.empresa);
  };
  const toggleModificarCliente = () => {
    setModalClienteModificar(!modalClienteModificar);
  };
  const handleMostrar = (e) => {
    e.preventDefault();
    setLista(
      eventos.filter((evento) => {
        return evento.cliente === nuevoMostrar;
      })
    );
    setModal(!modal);
  };
  const handleNuevoEliminarCliente = (e) => {
    setNuevoEliminarCliente(cliente.id);
  };
  const recuperarClientes = props.clientesRecuperar;
  const handleEliminarCliente = async (e) => {
    eliminarCliente(nuevoEliminarCliente);
  };

  return (
    <div className="card">
      <img
        src={process.env.REACT_APP_BACKEND_URL + `${cliente.imagen.url}`}
        alt="empresa"
        className="logo"
      />
      <h3>{cliente.empresa}</h3>
      <h3>{cliente.contacto}</h3>
      <h3>{cliente.direccion}</h3>
      <h3>{cliente.correo}</h3>
      <div className="flex">
        <button
          onClick={handleEliminarCliente}
          value={nuevoEliminarCliente}
          onChange={handleNuevoEliminarCliente}
        >
          Eliminar
        </button>
        <button onClick={toggleModificarCliente}>Modificar</button>
      </div>
      <button
        onClick={handleMostrar}
        value={nuevoMostrar}
        onChange={handleNuevoMostrar}
      >
        Eventos
      </button>
      {modal ? (
        <ListaMostrarEvento
          key={lista.id}
          modal={modal}
          lista={lista}
          eliminarEvento={eliminarEvento}
          recuperarEventos={recuperarEventos}
        />
      ) : null}
      {modalClienteModificar ? (
        <ModificarCliente
          cliente={cliente}
          toggleModificarCliente={toggleModificarCliente}
          recuperarClientes={recuperarClientes}
        />
      ) : null}
    </div>
  );
};

export default ElementoClientes;
