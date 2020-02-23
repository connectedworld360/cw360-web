import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectRecarga() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Cantidad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={5}>5€</MenuItem>
            <MenuItem value={10}>10€</MenuItem>
            <MenuItem value={15}>15€</MenuItem>
            <MenuItem value={20}>20€</MenuItem>
            <MenuItem value={25}>25€</MenuItem>
            <MenuItem value={30}>30€</MenuItem>
            <MenuItem value={35}>35€</MenuItem>
            <MenuItem value={40}>40€</MenuItem>
            <MenuItem value={45}>45€</MenuItem>
            <MenuItem value={50}>50€</MenuItem>
          </Select>
        </FormControl>
    </div>
  );
}
