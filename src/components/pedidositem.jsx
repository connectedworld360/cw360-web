import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import SelectStatus from "../components/selectstatus";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const PedidosItem = props => {
  
  const classes = useStyles();

  return (
    <ListItem style={{paddingBottom:20, paddingTop:20}} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          variant="square"
          
          src={props.image}
          style={{ width: 80, height: 80 }}
        />
      </ListItemAvatar>
      <ListItemText style={{ margin: 10 }} primary={props.description} secondary={'Precio: ' + props.precio} />
      <SelectStatus status={props.status} />
    </ListItem>
  );
};

export default PedidosItem;
