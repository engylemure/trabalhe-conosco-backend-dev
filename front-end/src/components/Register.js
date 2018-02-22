import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class Register extends Component{
    render(){
        return (
            <div>
                <TextField
                    id="name-field-controlled"
                    value={this.props.nameValue}
                    onChange={this.props.handleNameChange}
                    hintText="Nome"
                /><br />
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
                <TextField
                    id="passwordConf-field-controlled"
                    value={this.props.passwordConfValue}
                    onChange={this.props.handlePasswordConfChange}
                    hintText="Confirmacao de senha"
                    type="password"
                /><br />
                <RaisedButton
                    label={"Registrar"}
                    onClick={this.props.onRegistrarClick}
                />
            </div>
        )
    }
}