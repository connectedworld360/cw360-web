import React from "react";
import NavbarPage from "../components/navbarpage";
import LnkButton from "../components/lnkbutton";
import { makeStyles } from "@material-ui/core/styles";
import InputPassword from "../components/inputpassword";
import { ValidatorForm } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
export default function Login() {
  const classes = useStyles();

  const handleSubmit = () => {
    // your submit logic
  };
  return (
    <div className={classes.root}>
      <NavbarPage />
      <div style={centerstyle}>
        <h1 style={{ textAlign: "center" }}>Iniciar Sesión</h1>
        <ValidatorForm
          //ref="form"
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FacebookLoginButton onClick={() => alert("Pronto")}>
                <span>Inicia Sesion con Facebook</span>
              </FacebookLoginButton>
            </Grid>
            <Grid item xs={12}>
              <GoogleLoginButton onClick={() => alert("Pronto")}>
                <span>Inicia Sesion con Google</span>
              </GoogleLoginButton>
            </Grid>
            <Grid item xs={12}>
              <TextField id="standard-basic" label="Usuario" />
            </Grid>
            <Grid item xs={12}>
              <InputPassword label="Contraseña" />
            </Grid>
            <Grid item xs={12}>
              <LnkButton name="Iniciar" />
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
