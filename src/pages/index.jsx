import React, { Component } from "react";
import NavbarPage from "../components/navbarpage";
import LnkButtonLarge from "../components/lnkbuttonlarge";

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <div style={centerstyle}>
          <LnkButtonLarge name="Recargar Cuenta de Usuario" link='/recargas' />
          <LnkButtonLarge name="Gestion de Pedidos" link='/pedidos' />
          <LnkButtonLarge name="Gestion de Administradores" link='/usuarios' />
        </div>
      </div>
    );
  }
}

const centerstyle = {
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '50%',
    maxWidth: 300,
    height: 100
  };
export default MainPage;
