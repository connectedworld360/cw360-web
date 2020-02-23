import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputPassword = props => {

  return (
        <TextField
          id="standard-password-input"
          label={props.label}
          type="password"
          autoComplete="current-password"
        />
        
  );
}

export default InputPassword;