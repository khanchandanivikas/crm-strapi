import React from "react";
import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";

const ModificarEvento = (props) => {
  const setClose = props.toggleModificarEvento;
  const handleModal = () => {
    setClose();
  };
  const eventoElegido = props.evento;
  const [nuevoCliente, setNuevoCliente] = useState(eventoElegido.cliente);
  const [nuevoHora, setNuevoHora] = useState(eventoElegido.hora);
  const [nuevoFecha, setNuevoFecha] = useState(eventoElegido.fecha);
  const [nuevoTitulo, setNuevoTitulo] = useState(eventoElegido.titulo);
  const [nuevoMensaje, setNuevoMensaje] = useState(eventoElegido.mensaje);
  const [nuevoResultado, setNuevoResultado] = useState(eventoElegido.resultado);
  const handleNuevoCliente = (e) => {
    setNuevoCliente(e.target.value);
  };
  const handleNuevoHora = (e) => {
    setNuevoHora(`${e.target.value}:00.000`);
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
  const handleModificarEvento = async (e) => {
    const eventosRecuperar = props.recuperarEventos;
    e.preventDefault();
    try {
      const request = await axios.put(
        process.env.REACT_APP_BACKEND_URL + `/eventos/${eventoElegido.id}`,
        {
          cliente: nuevoCliente,
          hora: nuevoHora,
          fecha: nuevoFecha,
          titulo: nuevoTitulo,
          mensaje: nuevoMensaje,
          resultado: nuevoResultado,
        }
      );
      const datos = request.data;
      console.log(datos);
      eventosRecuperar();
      cogoToast.success("Modificado con exito!");
      setClose();
    } catch (error) {
      console.log("error" + error);
    }
  };
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="form-container">
        <form action="" onSubmit={handleModificarEvento} className="formulario">
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
          <button type="submit">Modificar</button>
          <button onClick={handleModal}>close</button>
        </form>
      </div>
    </div>
  );
};

export default ModificarEvento;
