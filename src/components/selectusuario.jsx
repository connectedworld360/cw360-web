/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SelectUsuario() {
  const defaultProps = {
    options: users,
    getOptionLabel: option => option.user,
  };

  return (
      <Autocomplete
        {...defaultProps}
        id="auto-highlight"
        autoHighlight
        renderInput={params => (
          <TextField {...params} label="Introducir Usuario" margin="dense" fullWidth />
        )}
      />
  );
}

const users = [
  { user: 'Jose maria' },
  { user: 'Enrique' },
  { user: 'Raul' },
  { user: 'Esteban' },
  { user: 'Carlos' },
  { user: 'Maite' },
  { user: 'Maria Alejandra' },
  { user: 'Sandra' },
];
