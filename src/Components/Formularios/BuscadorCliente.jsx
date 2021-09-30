import React from "react";
import axios from "axios";
import { useState } from "react";
import ListaClienteBuscado from "../Listas/ListaClienteBuscado";
import "../Style/Buscador.css";

const BuscadorCliente = (props) => {
  const recuperarClientes = props.clientesRecuperar;
  const recuperarEventos = props.eventosRecuperar;
  const eliminarCliente = props.clienteEliminar;
  const eliminarEvento = props.eventoEliminar;
  const eventos = props.listaEventos;
  const [listaClienteBuscado, setListaClienteBuscado] = useState([]);
  const [clienteBuscado, setClienteBuscado] = useState("");
  const handleClienteBuscado = (e) => {
    setClienteBuscado(e.target.value);
  };
  const handleBuscarCliente = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/clientes?empresa=${clienteBuscado}`
      );
      const datos = await request.data;
      setListaClienteBuscado(datos);
      console.log(datos);
    } catch (error) {
      console.log("error" + error);
    }
    setClienteBuscado("");
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleBuscarCliente} className="form-buscador">
        <input
          value={clienteBuscado}
          onChange={handleClienteBuscado}
          type="text"
          name="cliente"
          id="cliente"
          placeholder="nombre del cliente a buscar"
          style={{ marginTop: "15px" }}
        />
        <button type="submit">Buscar</button>
      </form>
      <ListaClienteBuscado
        key={listaClienteBuscado.id}
        listaClienteBuscado={listaClienteBuscado}
        recuperarClientes={recuperarClientes}
        recuperarEventos={recuperarEventos}
        eventos={eventos}
        eliminarCliente={eliminarCliente}
        eliminarEvento={eliminarEvento}
      />
    </div>
  );
};

export default BuscadorCliente;
