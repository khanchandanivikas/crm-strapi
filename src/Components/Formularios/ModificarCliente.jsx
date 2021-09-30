import React from "react";
import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";
import "../Style/ModificarCliente.css";

const ModificarCliente = (props) => {
  const setClose = props.toggleModificarCliente;
  const handleModal = () => {
    setClose();
  };
  const clienteElegido = props.cliente;
  const [nuevoEmpresa, setNuevoEmpresa] = useState(clienteElegido.empresa);
  const [nuevoContacto, setNuevoContacto] = useState(clienteElegido.contacto);
  const [nuevoDireccion, setNuevoDireccion] = useState(
    clienteElegido.direccion
  );
  const [nuevoCorreo, setNuevoCorreo] = useState(clienteElegido.correo);
  const handleNuevoEmpresa = (e) => {
    setNuevoEmpresa(e.target.value);
  };
  const handleNuevoContacto = (e) => {
    setNuevoContacto(e.target.value);
  };
  const handleNuevoDireccion = (e) => {
    setNuevoDireccion(e.target.value);
  };
  const handleNuevoCorreo = (e) => {
    setNuevoCorreo(e.target.value);
  };
  const clientesRecuperar = props.recuperarClientes;
  const handleModificarCliente = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.put(
        process.env.REACT_APP_BACKEND_URL + `/clientes/${clienteElegido.id}`,
        {
          empresa: nuevoEmpresa,
          contacto: nuevoContacto,
          direccion: nuevoDireccion,
          correo: nuevoCorreo,
        }
      );
      const data = await request.data;
      console.log(data);
      clientesRecuperar();
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
        <form
          action=""
          onSubmit={handleModificarCliente}
          className="formulario"
        >
          <input
            value={nuevoEmpresa}
            onChange={handleNuevoEmpresa}
            type="text"
            name="empresa"
            id="empresa"
            placeholder="nombre de la empresa"
            required
          />
          <input
            value={nuevoContacto}
            onChange={handleNuevoContacto}
            type="number"
            name="contacto"
            id="contacto"
            placeholder="numero de contacto"
            required
          />
          <input
            value={nuevoDireccion}
            onChange={handleNuevoDireccion}
            type="text"
            name="direccion"
            id="direccion"
            placeholder="direccion del cliente"
            required
          />
          <input
            value={nuevoCorreo}
            onChange={handleNuevoCorreo}
            type="email"
            name="correo"
            id="correo"
            placeholder="correo electronico"
            required
          />
          <button type="submit">Modificar</button>
          <button onClick={handleModal}>close</button>
        </form>
      </div>
    </div>
  );
};

export default ModificarCliente;
