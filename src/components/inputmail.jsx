import React from 'react';
import {TextValidator} from 'react-material-ui-form-validator';
 
class InputMail extends React.Component {
 
    state = {
        email: '',
    }
 
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
 
    render() {
        const { email } = this.state;
        return (
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Este campo es requerido', 'Correo no válido']}
                />

        );
    }
}

export default InputMail;