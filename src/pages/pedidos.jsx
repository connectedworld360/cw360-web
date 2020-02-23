import React from "react";
import NavbarPage from "../components/navbarpage";
import PedidosItem from "../components/pedidositem";
import { makeStyles } from "@material-ui/core/styles";
import InputPassword from "../components/inputpassword";
import SelectUsuario from "../components/selectusuario";
import { ValidatorForm } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

export default function Pedidos() {
  const classes = useStyles();

  const handleSubmit = () => {
    // your submit logic
  };
  return (
    <div className={classes.root}>
      <NavbarPage />
      <div style={centerstyle}>
        <Grid container style={{marginTop:20,padding:20 }}>
          <Grid item xs={6}>
            <h1>Gestion de Pedidos de:</h1>
          </Grid>
          <Grid item xs={3}>
            <SelectUsuario />
          </Grid>
        </Grid>

        <div>
          <List className={classes.root2}>
            <h2>Amazon</h2>
            <PedidosItem
              title
              description='HP OMEN 15-dc1017ns - Portátil Gaming de 15.6" FullHD (Intel Core i5-9300H, 16GB RAM, 1TB HDD + 256GB SSD, NVIDIA GeForce GTX 1650-4GB, FreeDOS) negro - teclado QWERTY Español'
              image="/img/81Z0bYdzdhL._AC_SX679_.jpg"
              precio='999,99€'
              status='1'
            />
            <Divider variant="inset" component="li" />
            <h2>Ali Express</h2>
            <PedidosItem
              title
              description='BRITA Aluna – Jarra de Agua Filtrada con 1 cartucho MAXTRA+ – Filtro de agua BRITA que reduce la cal y el cloro – Agua filtrada para un sabor excelente – Filtro de agua color blanco'
              image="/img/71GqKVqpmiL._AC_SX679_.jpg"
              precio='11,99€'
              status='1'
              />
            <Divider variant="inset" component="li" />
              <h2>Zara</h2>
            <PedidosItem
              title
              description='Juego de ropa de cama con funda de edredón, de microfibra, 135 x 200 cm, Negro (Black Aztec)'
              image="/img/A1Bjh3tJcnL._AC_SX679_.jpg"
              precio='21,59€'
              status='1'
              />
            <Divider variant="inset" component="li" />
            <h2>Mediamark</h2>
            <PedidosItem
              title
              description='Xiaomi Band 4 Pulsera de Fitness Inteligente Monitor de Ritmo cardíaco 135 mAh Pantalla Color Bluetooth 5.0 más Reciente 2019, Negro'
              image="/img/51kIRBGmYpL._AC_SX425_.jpg"
              precio='33,24€'
              status='1'
            />
            <Divider variant="inset" component="li" />
            <PedidosItem
              title
              description='Osram Smart + LED, lámpara ZigBee con zócalo E27, blanco cálido, atenuable, directamente compatible con Echo Plus y Echo Show (2ª generación), compatible con Philips Hue Bridge [Clase de eficiencia energética A]'
              image="/img/61dCqKrWj0L._AC_SX679_.jpg"
              precio='9,94€'
              status='1'
            />
          </List>
        </div>
      </div>
    </div>
  );
}
//}

const centerstyle = {
  
  margin: "auto",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "90%",
  maxWidth: 900,
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
  root2: {
    width: "90%",
    maxWidth: 900,
    backgroundColor: theme.palette.background.paper
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
