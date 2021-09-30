import React from "react";
import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";
import "../Style/Form.css";

const AñadirEvento = (props) => {
  const [nuevoCliente, setNuevoCliente] = useState("");
  const [nuevoHora, setNuevoHora] = useState("");
  const [nuevoFecha, setNuevoFecha] = useState("");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [nuevoResultado, setNuevoResultado] = useState("");
  const handleNuevoCliente = (e) => {
    setNuevoCliente(e.target.value);
  };
  const handleNuevoHora = (e) => {
    setNuevoHora(e.target.value);
  };
  const handleNuevoFecha = (e) => {
    setNuevoFecha(e.target.value);
  };
  const handleNuevoTitulo = (e) => {
    setNuevoTitulo(e.target.value);
  };
  const handleNuevoMensaje = (e) => {
    setNuevoMensaje(e.target.value);
  };
  const handleNuevoResultado = (e) => {
    setNuevoResultado(e.target.value);
  };
  const handleAñadirEvento = async (e) => {
    const eventosRecuperar = props.recuperarEventos;
    e.preventDefault();
    try {
      const request = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/eventos",
        {
          cliente: nuevoCliente,
          hora: `${nuevoHora}:00.000`,
          fecha: nuevoFecha,
          titulo: nuevoTitulo,
          mensaje: nuevoMensaje,
          resultado: nuevoResultado,
        }
      );
      const datos = request.data;
      console.log(datos);
      eventosRecuperar();
      cogoToast.success("Añadido con exito!");
      setNuevoCliente("");
      setNuevoHora("");
      setNuevoFecha("");
      setNuevoTitulo("");
      setNuevoMensaje("");
      setNuevoResultado("");
    } catch (error) {
      console.log("error" + error);
    }
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAñadirEvento} className="form">
        <h1>Añadir Evento</h1>
        <input
          value={nuevoCliente}
          onChange={handleNuevoCliente}
          type="text"
          name="cliente"
          id="cliente"
          placeholder="nombre del cliente"
          required
        />
        <input
          value={nuevoHora}
          onChange={handleNuevoHora}
          type="time"
          name="hora"
          id="hora"
          placeholder="hora del evento"
          required
        />
        <input
          value={nuevoFecha}
          onChange={handleNuevoFecha}
          type="date"
          name="fecha"
          id="fecha"
          placeholder="fecha del evento"
          required
        />
        <input
          value={nuevoTitulo}
          onChange={handleNuevoTitulo}
          type="text"
          name="titulo"
          id="titulo"
          placeholder="titulo del evento"
          required
        />
        <input
          value={nuevoMensaje}
          onChange={handleNuevoMensaje}
          type="text"
          name="mensaje"
          id="mensaje"
          placeholder="detalles del evento"
          required
        />
        <input
          value={nuevoResultado}
          onChange={handleNuevoResultado}
          type="text"
          name="resultado"
          id="resultado"
          placeholder="resultado del evento"
          required
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AñadirEvento;
