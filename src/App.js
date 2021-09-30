import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import cogoToast from "cogo-toast";
import Header from "./Components/Header";
import BarraLateral from "./Components/BarraLateral";
import ListaClientes from "./Components/Listas/ListaClientes";
import ListaEventos from "./Components/Listas/ListaEventos";
import AñadirCliente from "./Components/Formularios/AñadirCliente";
import AñadirEvento from "./Components/Formularios/AñadirEvento";

function App() {
  const [clientes, setClientes] = useState([]);
  const [eventos, setEventos] = useState([]);
  const recuperarClientes = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/clientes"
      );
      const datos = request.data;
      setClientes(datos);
      console.log(datos);
    } catch (error) {
      console.log("error", error);
    }
  };
  const recuperarEventos = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/eventos"
      );
      const datos = await request.data;
      setEventos(datos);
      console.log(datos);
    } catch (error) {
      console.log("error" + error);
    }
  };
  useEffect(() => {
    recuperarClientes();
    recuperarEventos();
  }, []);

  const eliminarEvento = async (idEvento) => {
    try {
      const request = await axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/eventos/${idEvento}`
      );
      const datos = request.data;
      console.log(datos);
      recuperarEventos();
      cogoToast.success("Eliminado con exito!");
    } catch (error) {
      console.log("error" + error);
    }
  };

  const eliminarCliente = async (idCliente) => {
    try {
      const request = await axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/clientes/${idCliente}`
      );
      const datos = request.data;
      console.log(datos);
      recuperarClientes();
      cogoToast.success("Eliminado con exito!");
    } catch (error) {
      console.log("error" + error);
    }
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <BarraLateral />
        <Switch>
          <Route exact path="/">
            <Loader />
          </Route>
          <Route path="/listaClientes">
            <ListaClientes
              key={clientes.id}
              eventos={eventos}
              clientes={clientes}
              recuperarClientes={recuperarClientes}
              recuperarEventos={recuperarEventos}
              eliminarEvento={eliminarEvento}
              eliminarCliente={eliminarCliente}
            />
          </Route>
          <Route path="/añadirCliente">
            <AñadirCliente recuperarClientes={recuperarClientes} />
          </Route>
          <Route path="/listaEventos">
            <ListaEventos
              key={eventos.id}
              recuperarEventos={recuperarEventos}
              eventos={eventos}
              eliminarEvento={eliminarEvento}
            />
          </Route>
          <Route path="/añadirEvento">
            <AñadirEvento recuperarEventos={recuperarEventos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
