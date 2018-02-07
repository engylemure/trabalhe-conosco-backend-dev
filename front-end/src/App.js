import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './files/components/First'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfClicks: 0,
        }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="First-edit">
          comecei a editar
        </p>
         <p className="First-edit">
             <button onClick={() => this.setState(prevState => ({
                    numberOfClicks: prevState.numberOfClicks+1
             }))} > Clique aqui </button>
         </p>
        <First number={this.state.numberOfClicks}/>
      </div>
    );
  }
}

export default App;
