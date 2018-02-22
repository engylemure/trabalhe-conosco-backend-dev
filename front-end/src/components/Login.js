import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends Component{
    render(){
        return (
            <div>
                <TextField
                    id="email-field-controlled"
                    value={this.props.emailValue}
                    onChange={this.props.handleEmailChange}
                    hintText="Email"
                /><br />
                <TextField
                    id="password-field-controlled"
                    value={this.props.passwordValue}
                    onChange={this.props.handlePasswordChange}
                    hintText="Senha"
                    type="password"
                /><br />
                <RaisedButton
                    label={"Entrar"}
                    onClick={this.props.onEntrarClick}
                />
            </div>
        )
    }
}