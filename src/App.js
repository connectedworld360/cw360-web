import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";

//Pages
import MainPage from "./pages/index";
import Recargas from "./pages/recargas";
import Usuarios from "./pages/usuarios";
import Cuenta from "./pages/cuenta";
import Pedidos from "./pages/pedidos";
import Login from "./pages/login";
//import Error from "./pages/error";

function App() {
  return (
    //<div className="App">
      <Router>
        {/* <Switch> */}
          <Route exact path="/" component={MainPage} />
          <Route exact path="/recargas" component={Recargas} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/cuenta" component={Cuenta} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={Error}/> */}
        {/* </Switch> */}
      </Router>
    //</div>
  );
}

export default App;
