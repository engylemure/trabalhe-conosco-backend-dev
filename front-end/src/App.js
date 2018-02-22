import React, { Component } from 'react';
import placeHolder from './assets/img/hero-feed.png'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Api from './lib/backendApi';
import Search from './components/Search'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            shouldLogin: false,
            shouldRegister: false,
            loggedOn: false,
            user: {},
            loginEmail: '',
            loginPassword: '',
            registerEmail: '',
            registerName: '',
            registerPassword: '',
            registerPasswordConfirmation: '',
            search: '',
        }
    }
    login(){
        Api.default.create({
            email: this.state.loginEmail,
            password: this.state.loginPassword
        },'','login').then(
            (response) => {
                return Promise.all([response.status,response.json()])
            }
        ).then(promises => {
            let user = promises[1], status = promises[0]
            if(status === 200){
                this.setState({
                    user: user,
                    loggedOn: true,
                    shouldLogin: false,
                    shouldRegister: false,
                })
            }
        }).catch(e => console.log(e))
    }
    logout(){
        Api.default.create({},this.state.user.api_token,'logout').then(
            (response) => {
                return Promise.all([response.status,response.json()])
            }
        ).then(promises => {
            console.log(promises)
            if(promises[0] === 200){
                this.setState({
                    user: {},
                    loggedOn: false,
                })
            }
        }).catch(e => console.log(e))
    }
    register(){
        Api.default.create({
            name: this.state.registerName,
            email: this.state.registerEmail,
            password: this.state.registerPassword,
            password_confirmation: this.state.registerPasswordConfirmation
        },'','register').then(
            (response) => {
                return Promise.all([response.status,response.json()])
            }
        ).then(promises => {
            console.log(promises)
            if(promises[0] === 200){
                this.setState({
                    token: '',
                    loggedOn: false,
                })
            }
        }).catch(e => console.log(e))
    }
    handleEmailChange = (event) => {
        this.setState({
            loginEmail: event.target.value,
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            loginPassword: event.target.value,
        });
    }
    handleRPasswordConfChange = (event) => {
        this.setState({
            registerPasswordConfirmation: event.target.value,
        });
    }
    handleRNameChange = (event) => {
        this.setState({
            registerName: event.target.value,
        });
    }
    handleREmailChange = (event) => {
        this.setState({
            registerEmail: event.target.value,
        });
    }
    handleRPasswordChange = (event) => {
        this.setState({
            registerPassword: event.target.value,
        });
    }
    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value,
        });
    }
    search(page = 1){
        if(this.state.search)
        Api.profiles.index(this.state.user.api_token,'?search='+this.state.search+"&page="+page)
            .then(
                (response) => {
                    return Promise.all([response.status,response.json()])
                }
            ).then(promises => {
            console.log(promises)
            if(promises[0] === 200){
                this.setState({
                    profiles: promises[1]
                })
            }
        }).catch(e => console.log(e))
    }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header
            onEntrarClick={() => this.setState(prevState => ({ shouldLogin:!prevState.shouldLogin, shouldRegister: false}))}
            onRegistrarClick={() => this.setState(prevState => ({ shouldLogin:false, shouldRegister: !prevState.shouldRegister}))}
            onSairClick={this.logout.bind(this)}
            loggedOn={this.state.loggedOn}
        />
          {
              this.state.shouldLogin?
                  <Login
                    onEntrarClick={this.login.bind(this)}
                    passwordValue={this.state.loginPassword}
                    emailValue={this.state.loginEmail}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    disabled={!this.state.shouldLogin}
                  />:null
          }
          {
              this.state.shouldRegister?
                  <Register
                      onRegistrarClick={this.register.bind(this)}
                      passwordValue={this.state.registerPassword}
                      emailValue={this.state.registerEmail}
                      nameValue={this.state.registerName}
                      passwordConfValue={this.state.registerPasswordConfirmation}
                      handleNameChange={this.handleRNameChange}
                      handleEmailChange={this.handleREmailChange}
                      handlePasswordChange={this.handleRPasswordChange}
                      handlePasswordConfChange={this.handleRPasswordConfChange}
                  />:null
          }
          {!this.state.loggedOn?
              <img src={placeHolder} className="placeHolder" alt="placeHolder"/>
              :
              <Search
                  searchValue={this.state.search}
                  handleSearchChange={this.handleSearchChange}
                  onSearchClick={this.search.bind(this)}
              />
          }

      </div>
    );
  }
}

export default App;
