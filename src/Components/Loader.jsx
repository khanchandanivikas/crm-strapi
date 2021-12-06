import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Loader = () => {
  const [modalLoad, setModalLoad] = useState(true);
  const [nuevoContraseña, setNuevoContraseña] = useState("");
  const handleNuevoContraseña = (e) => {
    setNuevoContraseña(e.target.value);
  };
  const toggleModalLoad = () => {
    const toastId = toast.loading("Verificando contraseña...");
    setTimeout(() => {
      toast.success("Contraseña corecto", {
        id: toastId,
      });
      setModalLoad(!modalLoad);
    }, 1000);
  };
  const error = () => {
    const toastId = toast.loading("Verificando contraseña...");
    setTimeout(() => {
      toast.error("Contraseña incorecto", {
        id: toastId,
      });
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoContraseña === "admin") {
      toggleModalLoad();
    } else {
      error();
    }
  };

  return (
    <div>
      {modalLoad ? (
        <div className="modal">
          <div className="overlay"></div>
          <div className="form-container">
            <form action="" onSubmit={handleSubmit} className="formulario">
              <h2>Validar Credenciales</h2>
              <input
                type="password"
                name="contraseña"
                id="contraseña"
                value={nuevoContraseña}
                onChange={handleNuevoContraseña}
                placeholder="Contraseña"
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      ) : null}
      <Toaster />
    </div>
  );
};

export default Loader;
