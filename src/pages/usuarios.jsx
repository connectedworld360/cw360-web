import React from "react";
import NavbarPage from "../components/navbarpage";
import LnkButton from "../components/lnkbutton";
import { makeStyles } from "@material-ui/core/styles";
import SelectNivel from "../components/selectnivel";
import InputMail from "../components/inputmail";
import SelectUsuario from "../components/selectusuario";
import { ValidatorForm } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";

export default function Usuarios() {
  const classes = useStyles();

  const handleSubmit = () => {
    // your submit logic
  };
  return (
    <div className={classes.root}>
      <NavbarPage />
      <div style={centerstyle}>
        <h1 style={{ textAlign: "center" }}>Administrador de Usuarios</h1>
        <ValidatorForm
          //ref="form"
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <SelectUsuario />
            </Grid>
            <Grid item xs={6}>
              <SelectNivel />
            </Grid>
            <Grid item xs={12}>
              <InputMail />
            </Grid>
            <Grid item xs={12}>
              <LnkButton name="Registrar" />
            </Grid>
          </Grid>
        </ValidatorForm>
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
  textAlign: "center",

  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

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
