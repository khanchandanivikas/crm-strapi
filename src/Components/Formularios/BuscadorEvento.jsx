import React from "react";
import axios from "axios";
import { useState } from "react";
import ListaEventoBuscado from "../Listas/ListaEventoBuscado";
import "../Style/Buscador.css";

const BuscadorEvento = (props) => {
  const recuperarEventos = props.eventosRecuperar;
  const eliminarEvento = props.eventoEliminar;
  const [listaEventoBuscado, setListaEventoBuscado] = useState([]);
  const [eventoBuscado, setEventoBuscado] = useState("");
  const handleEventoBuscado = (e) => {
    setEventoBuscado(e.target.value);
  };
  const handleBuscarEvento = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/eventos?fecha=${eventoBuscado}`
      );
      const datos = await request.data;
      setListaEventoBuscado(datos);
      console.log(datos);
    } catch (error) {
      console.log("error" + error);
    }
    setEventoBuscado("");
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleBuscarEvento} className="form-buscador">
        <input
          value={eventoBuscado}
          onChange={handleEventoBuscado}
          type="date"
          name="state"
          id="state"
          style={{ marginTop: "15px" }}
        />
        <button type="submit">Buscar</button>
      </form>
      <ListaEventoBuscado
        key={listaEventoBuscado.id}
        listaEventoBuscado={listaEventoBuscado}
        recuperarEventos={recuperarEventos}
        eliminarEvento={eliminarEvento}
      />
    </div>
  );
};

export default BuscadorEvento;
