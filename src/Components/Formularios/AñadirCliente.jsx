import React from "react";
import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";
import "../Style/Form.css";

const AñadirCliente = (props) => {
  const [files, setFiles] = useState("");
  const [nuevoEmpresa, setNuevoEmpresa] = useState("");
  const [nuevoContacto, setNuevoContacto] = useState("");
  const [nuevoDireccion, setNuevoDireccion] = useState("");
  const [nuevoCorreo, setNuevoCorreo] = useState("");
  const handleNuevoImagen = (e) => {
    setFiles(e.target.files);
  };
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
  const handleAñadirCliente = (e) => {
    const clientesRecuperar = props.recuperarClientes;
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", files[0]);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/upload", formData)
      .then((response) => {
        const imageId = response.data[0].id;
        axios
          .post(process.env.REACT_APP_BACKEND_URL + "/clientes", {
            imagen: imageId,
            empresa: nuevoEmpresa,
            contacto: nuevoContacto,
            direccion: nuevoDireccion,
            correo: nuevoCorreo,
          })
          .then((response) => {
            console.log(response);
            clientesRecuperar();
            cogoToast.success("Añadido con exito!");
            setFiles("");
            setNuevoEmpresa("");
            setNuevoContacto("");
            setNuevoDireccion("");
            setNuevoCorreo("");
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleAñadirCliente} className="form">
        <h1>Añadir Cliente</h1>
        <input
          onChange={handleNuevoImagen}
          type="file"
          name="imagen"
          id="imagen"
          required
        />
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
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AñadirCliente;
