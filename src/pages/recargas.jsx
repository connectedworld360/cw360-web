import React from "react";
import NavbarPage from "../components/navbarpage";
import LnkButton from "../components/lnkbutton";
import LnkButtonDev from "../components/lnkbuttondev";
import { makeStyles } from "@material-ui/core/styles";
import SelectRecarga from "../components/selectrecarga";
import SelectUsuario from '../components/selectusuario'

export default function Recargas() {
  return (
    <div>
      <NavbarPage />
      <div style={centerstyle}>
        <h1 style={{ textAlign: "center" }}>Administrador de Recargas</h1>
        <SelectUsuario/>
        <SelectRecarga /><br />
        <LnkButton name="Recargar" /><br />
        <LnkButtonDev name="Devolucion" /><br />

        {/* <MDBSelect
          options={this.state.options}
          selected="Choose your option"
          label="Example label"
        /> */}
      </div>
    </div>
  );
}
//}

const centerstyle = {
  position: "absolute",
  margin: "auto",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "50%",
  maxWidth: 350,
  height: 300,
  textAlign:'center'
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    justifyContent: "center",
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
//export default Recargas;
