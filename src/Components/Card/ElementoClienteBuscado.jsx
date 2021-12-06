import React from "react";
import { useState } from "react";
import "../Style/Card.css";
import ListaMostrarEvento from "../Listas/ListaMostrarEvento";
import ModificarCliente from "../Formularios/ModificarCliente";

const ElementoClienteBuscado = (props) => {
  const cliente = props.element;
  const eventos = props.listaEventos;
  const eliminarCliente = props.clienteEliminar;
  const eliminarEvento = props.eventoEliminar;
  const recuperarEventos = props.eventosRecuperar;
  const [modalClienteModificar, setModalClienteModificar] = useState(false);
  const [nuevoEliminarCliente, setNuevoEliminarCliente] = useState(cliente.id);
  const [nuevoMostrar, setNuevoMostrar] = useState(cliente.empresa);
  const [lista, setLista] = useState([]);
  const [modal, setModal] = useState(false);
  const handleNuevoMostrar = (e) => {
    setNuevoMostrar(cliente.empresa);
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
  const toggleModificarCliente = () => {
    setModalClienteModificar(!modalClienteModificar);
  };
  const handleNuevoEliminarCliente = (e) => {
    setNuevoEliminarCliente(cliente.id);
  };
  const recuperarClientes = props.clientesRecuperar;
  const handleEliminarCliente = () => {
    eliminarCliente(nuevoEliminarCliente);
  };
  return (
    <div className="card">
      <img
        src={cliente.imagen}
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

export default ElementoClienteBuscado;
